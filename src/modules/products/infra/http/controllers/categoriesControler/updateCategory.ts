import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Category from "../../../typeorm/entities/categories";

export const updateCategory = async (request:Request, response:Response)=>{
    const id = request.params
    const category = await getRepository(Category).update(id,request.body)
    if(category.affected === 1){
        const updateCategory = await getRepository(Category).findOne(id)
        return response.json(updateCategory)
    }
   return response.status(402).json({menssage:"category not found"})
}