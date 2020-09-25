import { Request, Response } from "express";
import { getRepository } from "typeorm";
import  Product  from "../../../typeorm/entities/product";

export const fisicoProduct = async (request:Request, response:Response)=>{
    const id = request.params
    const product = await getRepository(Product).update(id,{ digital : false})
    if(product.affected === 1){
        const updateProd = await getRepository(Product).findOne(id)
        return response.json(updateProd)
    }
   return response.status(402).json({menssage:"product not found"})
}