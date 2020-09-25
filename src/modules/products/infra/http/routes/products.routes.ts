import { Router} from 'express'
import { digitalProduct, fisicoProduct, getProduct, getProducts, removeProduct, saveProducts, updateProduct } from '../controllers/productController';



const productRoutes = Router();

productRoutes.get('/',getProducts)
productRoutes.get('/:id',getProduct)
productRoutes.post('/',saveProducts)
productRoutes.put('/:id',updateProduct)
productRoutes.delete('/:id',removeProduct)
productRoutes.patch('/digital/:id',digitalProduct)
productRoutes.patch('/fisico/:id',fisicoProduct)

export default productRoutes