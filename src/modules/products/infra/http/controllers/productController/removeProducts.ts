import { Request, Response } from "express";
import { getRepository } from "typeorm";
import  Product  from "../../../typeorm/entities/product";

export const removeProduct = async (request:Request, response:Response)=>{
    const id = request.params
    const product = await getRepository(Product).delete(id)
    if(product.affected === 1){
         await getRepository(Product).findOne(id)
        return response.json({menssage:"product deletado com sucesso"})
    }
   return response.status(402).json({menssage:"product not found"})
}