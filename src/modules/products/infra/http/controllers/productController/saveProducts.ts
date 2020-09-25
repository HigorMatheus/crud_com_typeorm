import { Request, Response } from "express";
import { getRepository } from "typeorm";
import  Product  from "../../../typeorm/entities/product";

export const saveProducts = async (request:Request, response:Response)=>{
    const product = await getRepository(Product).save(request.body)
        return response.json(product)
}