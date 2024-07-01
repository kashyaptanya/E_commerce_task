import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import Dashboard from '../Screen/Dashboard/Dashboard';
import Products from '../Screen/Products/ProductsShop';
import ProductDetail from '../Screen/Products/ProductDetail';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AdminRoutes />}>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/productsShop' element={<Products />} /> 
                    <Route path='/productDetail' element={<ProductDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
export default index;
