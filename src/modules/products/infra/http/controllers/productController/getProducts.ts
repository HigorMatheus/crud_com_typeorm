import { Request, Response } from "express";
import { getRepository } from "typeorm";
import  Product  from "../../../typeorm/entities/product";

export const getProducts = async (request:Request,response:Response)=>{
    const products = await getRepository(Product).find()
    return response.json(products)
}