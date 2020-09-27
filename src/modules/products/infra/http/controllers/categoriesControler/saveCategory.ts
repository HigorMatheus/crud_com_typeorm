import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Category from "../../../typeorm/entities/categories";


export const saveCategory = async (request:Request,response:Response)=>{
    
    const products = await getRepository(Category).save(request.body)
    return response.json(products)
}