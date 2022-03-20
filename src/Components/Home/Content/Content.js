import React from 'react';
import Header from "./Header/Header";
import Main from "./Routes/Main/Main";
import {Routes, Route} from 'react-router-dom'
import Footer from "./Footer/Footer";
import Company from "./Routes/RouteContent/Company/Company";
import Articles from "./Routes/RouteContent/Articles/Articles";
import Payment from "./Routes/RouteContent/Payment/Payment";
import Express from "./Routes/RouteContent/Express/Express";
import Contact from "./Routes/RouteContent/Contact/Contact";
import Branded from "./Routes/Lawns/Branded/Branded";
import Cheap from "./Routes/Lawns/Component/Cheap";
import Order from "./Routes/RouteContent/Order/Order";
import Cottage from "./Routes/Lawns/Component/Cottage";
import Undersized from "./Routes/Lawns/Component/Undersized";
import Sports from "./Routes/Lawns/Component/Sports";
import Universal from "./Routes/Lawns/Component/Universal";
import Noryegrass from "./Routes/Lawns/Component/Noryegrass";
import ShadeTolerant from "./Routes/Lawns/Component/Shade-tolerant";
import Urban from "./Routes/Lawns/Component/Urban";
import Roadside from "./Routes/Lawns/Component/Roadside";
import Fly from "./Routes/Lawns/Component/Fly";
import North from "./Routes/Lawns/Component/North";
import South from "./Routes/Lawns/Component/South";
import Reclamation from "./Routes/Lawns/Component/Reclamation";
import Unpretentious from "./Routes/Lawns/Component/Unpretentious";
import Stalls from "./Routes/Lawns/Component/Stalls";
import Perennial from "./Routes/Lawns/Perennial/Perennial";
import Sowing from "./Routes/Lawns/Sowing/Sowing";
import Related from "./Routes/Lawns/Related/Related";
import Fodder from "./Routes/Lawns/Fodder/Fodder";
import Fertilizers from "./Routes/Lawns/Fertilizers/Fertilizers";
import Product from "./Routes/Lawns/SortItem/Product";
import ProductItem from "./Routes/Lawns/Product-Item/Product-Item";
import Catalog from "./Routes/Lawns/Catalog/Catalog";
import Senokos from "./Routes/Lawns/Component/Senokos";
import Combined from "./Routes/Lawns/Component/Combined";
import Pasture from "./Routes/Lawns/Component/Pasture";
import Alfalfa from "./Routes/Lawns/Component/Alfalfa";
import Bluegrass from "./Routes/Lawns/Component/Bluegrass";

const Content = () => {
    return (
        <section className='home__content'>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/company' element={<Company/>}/>
                    <Route path='/articles' element={<Articles/>}/>
                    <Route path='/payment' element={<Payment/>}/>
                    <Route path='/express' element={<Express/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/branded' element={<Branded/>}/>
                    <Route path='/cheap' element={<Cheap/>}/>
                    <Route path='/order' element={<Order/>}/>
                    <Route path='/cottage' element={<Cottage/>}/>
                    <Route path='/undersized' element={<Undersized/>}/>
                    <Route path='/sports' element={<Sports/>}/>
                    <Route path='/universal' element={<Universal/>}/>
                    <Route path='/noryegrass' element={<Noryegrass/>}/>
                    <Route path='/shade-tolerant' element={<ShadeTolerant/>}/>
                    <Route path='/urban' element={<Urban/>}/>
                    <Route path='/roadside' element={<Roadside/>}/>
                    <Route path='/fly' element={<Fly/>}/>
                    <Route path='/north' element={<North/>}/>
                    <Route path='/south' element={<South/>}/>
                    <Route path='/reclamation' element={<Reclamation/>}/>
                    <Route path='/unpretentious' element={<Unpretentious/>}/>
                    <Route path='/stalls' element={<Stalls/>}/>
                    <Route path='/perennial' element={<Perennial/>}/>
                    <Route path='/sowing' element={<Sowing/>}/>
                    <Route path='/related' element={<Related/>}/>
                    <Route path='/fodder' element={<Fodder/>}/>
                    <Route path='/senokos' element={<Senokos/>}/>
                    <Route path='/combined' element={<Combined/>}/>
                    <Route path='/pasture' element={<Pasture/>}/>
                    <Route path='/alfalfa' element={<Alfalfa/>}/>
                    <Route path='/bluegrass' element={<Bluegrass/>}/>
                    <Route path='/fertilizers' element={<Fertilizers/>}/>
                    <Route path='/product' element={<Product/>}/>
                    <Route path='/product-item' element={<ProductItem/>}/>
                    <Route path='/:path/product/:id' element={<Product/>}/>
                </Routes>
                <Footer/>
        </section>
    );
};

export default Content;