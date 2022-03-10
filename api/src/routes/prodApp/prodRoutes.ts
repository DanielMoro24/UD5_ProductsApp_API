import { prodController } from "../../controllers/prodController";

export const prodRoutes = [
    {
        method: 'post',
        route: '/addProd',
        controller: prodController,
        action: 'saveProd'
    },
    {
        method: 'get',
        route: '/getProds',
        controller: prodController,
        action: 'getProds'
    },
    {
        method: 'get',
        route: '/getProdById/:prodId',
        controller: prodController,
        action: 'getProdById'
    },
    {
        method: 'delete',
        route: '/deleteProd/:prodId',
        controller: prodController,
        action: 'deleteProd'
    }
]