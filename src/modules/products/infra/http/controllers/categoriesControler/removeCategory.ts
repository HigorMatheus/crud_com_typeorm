import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Category from "../../../typeorm/entities/categories";

export const removeCategory = async (request:Request, response:Response)=>{
    const id = request.params
    const categoty = await getRepository(Category).delete(id)
    if(categoty.affected === 1){
         await getRepository(Category).findOne(id)
        return response.json({menssage:"categoria deletado com sucesso"})
    }
   return response.status(402).json({menssage:"categorya not found"})
}