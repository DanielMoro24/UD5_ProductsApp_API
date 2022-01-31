import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { Request, Response } from 'express';

export class userControllers {

    private userRepository = getRepository(User);
    public get usersRepository() {
        return this.userRepository;
    }
    public set usersRepository(value) {
        this.userRepository = value;
    }

    public async saveUser(req: Request, res: Response) {
        try {
            this.usersRepository.save(req.body);
            res.status(200).json({ resp: "ok" });
        } catch (error) {
            res.status(404).json({ resp: "ko", error });
        }
    }

    public async getUsers(req: Request, res: Response) {
        try {
            let users = await this.usersRepository.find()

            res.status(200).json({ resp: "ok", users });
        } catch (error) {
            res.status(404).json({ resp: "ko", error });
        }
    }

    public async getUsersById(req: Request, res: Response) {
        try {
            let users = await this.usersRepository.find({where: { id: req.params.userId }})

            res.status(200).json({ resp: "ok", users });
        } catch (error) {
            res.status(404).json({ resp: "ko", error });
        }
    }

    public async deleteUser(req: Request, res: Response) {
        try {
            let dMsg = await this.usersRepository.createQueryBuilder()
                .delete()
                .where("id = :id", { id: req.params.userId })
                .execute();
            if (dMsg.affected == 0) {
                res.status(404).json({ resp: "ko", error: "Id not found." });
            } else {
                res.status(200).json({ resp: "ok" });
            }
        } catch (error) {
            res.status(404).json({ resp: "ko", error });
        }
    }

}