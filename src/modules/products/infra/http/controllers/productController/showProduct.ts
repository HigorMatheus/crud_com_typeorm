import { Request, Response } from "express";
import { getRepository } from "typeorm";
import  Product  from "../../../typeorm/entities/product";

export const showProduct = async (request:Request,response:Response)=>{
    const id = request.params
    const product = await getRepository(Product).findOne(id)

    // if(!product){
    //     return response.json({menssage:"product not found"})
    // }

    return response.json(product)
  
}