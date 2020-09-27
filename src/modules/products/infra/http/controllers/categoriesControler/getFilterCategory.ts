import { Request, Response } from "express";
import { getRepository } from "typeorm";
// import Category from "../../../typeorm/entities/categories";
import Product from "../../../typeorm/entities/product";

export const getFilterCategory= async (request:Request,response:Response)=>{
    const {id} = request.params
    const category_id = id
    const products = await getRepository(Product).find({category_id})
    return response.json(products)
}