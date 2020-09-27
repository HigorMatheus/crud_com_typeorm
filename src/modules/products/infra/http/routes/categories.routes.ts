import { Router} from 'express'
import { getCategory, getFilterCategory, removeCategory, saveCategory, updateCategory, showCategory} from '../controllers/categoriesControler';

const categoriesRoutes = Router();

categoriesRoutes.get('/',getCategory)
categoriesRoutes.get('/:id',showCategory)
categoriesRoutes.get('/:id/products',getFilterCategory)
categoriesRoutes.post('/',saveCategory)
categoriesRoutes.put('/:id',updateCategory)
categoriesRoutes.delete('/:id',removeCategory)

export default categoriesRoutes