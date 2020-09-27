import { Router} from 'express'
import {  getProducts, removeProduct, saveProducts, showProduct, updateProduct } from '../controllers/productController';



const productRoutes = Router();

productRoutes.get('/',getProducts)
productRoutes.get('/:id',showProduct)
productRoutes.post('/',saveProducts)
productRoutes.put('/:id',updateProduct)
productRoutes.delete('/:id',removeProduct)

export default productRoutes