// Server
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Request, Response } from "express";

// TypeORM
import "reflect-metadata";
import { createConnection } from "typeorm";

// Routes
import { routes } from "./routes/routes";

createConnection().then(async () => {

    const app = express();

    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json({ limit: '150mb' }))
    app.use(express.urlencoded({ extended: false }));
    

    routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response) => {
            (new (route.controller as any))[route.action](req, res);
        });
    });

    app.set('port', process.env.PORT || 3000);
    app.set('ip', process.env.IP || '192.168.1.50');

    let port = app.get('port');
    let ip = app.get('ip');

    app.listen(port, ip, () => {
        console.log("Server URL: http://" + ip + ":" + port);
    });

}).catch(error => console.log(error));