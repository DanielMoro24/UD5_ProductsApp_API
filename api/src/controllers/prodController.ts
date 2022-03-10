import { getRepository } from "typeorm";
import { Product } from "../entities/Product";
import { Request, Response } from 'express';

export class prodController {

    private prodRepository = getRepository(Product);
    public get prodsRepository() {
        return this.prodRepository;
    }
    public set prodsRepository(value) {
        this.prodRepository = value;
    }

    public async saveProd(req: Request, res: Response) {
        try {
            this.prodsRepository.save(req.body);
            res.status(200).json({ resp: "ok" });
        } catch (error) {
            res.status(404).json({ resp: "ko", error });
        }
    }

    public async getProds(req: Request, res: Response) {
        try {
            let prods = await this.prodsRepository.find()

            res.status(200).json({ resp: "ok", prods });
        } catch (error) {
            res.status(404).json({ resp: "ko", error });
        }
    }

    public async getProdById(req: Request, res: Response) {
        try {
            let prods = await this.prodsRepository.find({where: { id: req.params.prodId }})

            res.status(200).json({ resp: "ok", prods });
        } catch (error) {
            res.status(404).json({ resp: "ko", error });
        }
    }

    public async deleteProd(req: Request, res: Response) {
        try {
            let dPRod = await this.prodsRepository.createQueryBuilder()
                .delete()
                .where("id = :id", { id: req.params.prodId })
                .execute();
            if (dPRod.affected == 0) {
                res.status(404).json({ resp: "ko", error: "Id not found." });
            } else {
                res.status(200).json({ resp: "ok" });
            }
        } catch (error) {
            res.status(404).json({ resp: "ko", error });
        }
    }

}