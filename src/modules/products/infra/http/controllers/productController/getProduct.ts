import { Request, Response } from "express";
import { getRepository } from "typeorm";
import  Product  from "../../../typeorm/entities/product";

export const getProduct = async (request:Request,response:Response)=>{
    const id = request.params
    const product = await getRepository(Product).findOne(id)

  
        return response.json(product)
  
}