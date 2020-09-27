import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Category from "../../../typeorm/entities/categories";

export const showCategory = async (request:Request,response:Response)=>{
    const id = request.params
    const category = await getRepository(Category).findOne(id)

    if(!category){
        return response.json({menssage:"category not found"})
    }

    return response.json(category)
}