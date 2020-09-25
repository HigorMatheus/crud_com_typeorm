import  {Router} from 'express'
import productRoutes from './modules/products/infra/http/routes/products.routes'
// import { getProducts, saveProducts, getProduct, updateProduct, removeProduct, digitalProduct, fisicoProduct} from './controller/productsController'



const routes= Router()

routes.use('/products',productRoutes)

// routes.get('/products',getProducts)
// routes.get('/products/:id',getProduct)
// routes.put('/products/:id',updateProduct)
// routes.patch('/products/digital/:id',digitalProduct)
// routes.patch('/products/fisico/:id',fisicoProduct)


// routes.delete('/products/:id', removeProduct)
// routes.post('/products',saveProducts)

export default routes 

