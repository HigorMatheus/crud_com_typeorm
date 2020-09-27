import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Category from "../../../typeorm/entities/categories";

export const getCategory= async (request:Request,response:Response)=>{
    const category = await getRepository(Category).find()
    return response.json(category)
}