import express from 'express';
import { createProduct, getProducts, getProductById, updateProductById, deleteProductById, getProductbyUser } from '../controllers/product.js';

const productRoute = express.Router();

productRoute.post('/createProduct', createProduct);
productRoute.get('/getProducts', getProducts);
productRoute.get('/getProduct/:id', getProductById);
productRoute.put('/updateProduct/:id', updateProductById);
productRoute.delete('/deleteProduct/:id', deleteProductById);
productRoute.get('/getProductbyUser', getProductbyUser);

export default productRoute;