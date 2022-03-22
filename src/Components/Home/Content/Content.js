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
import Branded from "./Routes/Lawns/Component/Branded/Branded";
import Cheap from "./Routes/Lawns/Component/Cheap";
import Order from "./Routes/RouteContent/Order/Order";
import Cottage from "./Routes/Lawns/Component/Branded/Cottage";
import Undersized from "./Routes/Lawns/Component/Branded/Undersized";
import Sports from "./Routes/Lawns/Component/Branded/Sports";
import Universal from "./Routes/Lawns/Component/Branded/Universal";
import Noryegrass from "./Routes/Lawns/Component/Branded/Noryegrass";
import ShadeTolerant from "./Routes/Lawns/Component/Branded/Shade-tolerant";
import Urban from "./Routes/Lawns/Component/Branded/Urban";
import Roadside from "./Routes/Lawns/Component/Branded/Roadside";
import Fly from "./Routes/Lawns/Component/Branded/Fly";
import North from "./Routes/Lawns/Component/Branded/North";
import South from "./Routes/Lawns/Component/Branded/South";
import Reclamation from "./Routes/Lawns/Component/Branded/Reclamation";
import Unpretentious from "./Routes/Lawns/Component/Branded/Unpretentious";
import Stalls from "./Routes/Lawns/Component/Branded/Stalls";
import Perennial from "./Routes/Lawns/Component/Perennial/Perennial";
import Sowing from "./Routes/Lawns/Component/Sowing";
import Related from "./Routes/Lawns/Component/Related";
import Fodder from "./Routes/Lawns/Component/Fodder/Fodder";
import Fertilizers from "./Routes/Lawns/Component/Fertilizers/Fertilizers";
import Product from "./Routes/Lawns/Product/Product";
import Catalog from "./Routes/Lawns/Catalog/Catalog";
import Senokos from "./Routes/Lawns/Component/Fodder/Senokos";
import Combined from "./Routes/Lawns/Component/Fodder/Combined";
import Pasture from "./Routes/Lawns/Component/Fodder/Pasture";
import Alfalfa from "./Routes/Lawns/Component/Fodder/Alfalfa";
import Alfalf from "./Routes/Lawns/Component/Perennial/Alfalf";
import Bluegrass from "./Routes/Lawns/Component/Perennial/Bluegrass";
import Ryegrass from "./Routes/Lawns/Component/Perennial/Ryegrass";
import NotFound from "./Routes/Lawns/Component/NotFound/NotFound";
import Oatmeal from "./Routes/Lawns/Component/Perennial/Oatmeal";
import Clover from "./Routes/Lawns/Component/Perennial/Clover";
import Pike from "./Routes/Lawns/Component/Perennial/Pike";
import Polevitsa from "./Routes/Lawns/Component/Perennial/Polevitsa";
import Timofeevka from "./Routes/Lawns/Component/Perennial/Timofeevka";
import Rump from "./Routes/Lawns/Component/Perennial/Rump";
import Festulolium from "./Routes/Lawns/Component/Perennial/Festulolium";
import Hedgehog from "./Routes/Lawns/Component/Perennial/Hedgehog";
import Canary from "./Routes/Lawns/Component/Perennial/Canary";
import Basket from "./Routes/Lawns/Component/Basket/Basket";
import PlaceanOrder from "./Routes/Lawns/Component/PlaceanOrder/PlaceanOrder";

const Content = () => {
    return (
        <section className='home__content'>
                <Header/>
                <Routes>
                    <Route path='/*' element={<NotFound/>}/>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/basket' element={<Basket/>}/>
                    <Route path='/placeanorder' element={<PlaceanOrder/>}/>
                    <Route path='/company' element={<Company/>}/>
                    <Route path='/articles' element={<Articles/>}/>
                    <Route path='/payment' element={<Payment/>}/>
                    <Route path='/express' element={<Express/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/cheap' element={<Cheap/>}/>
                    <Route path='/order' element={<Order/>}/>
                    <Route path='/branded' element={<Branded/>}/>
                    <Route path='/product/:title' element={<Product/>}/>
                    <Route path='/branded/cottage' element={<Cottage/>}/>
                    <Route path='/branded/undersized' element={<Undersized/>}/>
                    <Route path='/branded/sports' element={<Sports/>}/>
                    <Route path='/branded/universal' element={<Universal/>}/>
                    <Route path='/branded/noryegrass' element={<Noryegrass/>}/>
                    <Route path='/branded/shade-tolerant' element={<ShadeTolerant/>}/>
                    <Route path='/branded/urban' element={<Urban/>}/>
                    <Route path='/branded/roadside' element={<Roadside/>}/>
                    <Route path='/branded/fly' element={<Fly/>}/>
                    <Route path='/branded/north' element={<North/>}/>
                    <Route path='/branded/south' element={<South/>}/>
                    <Route path='/branded/reclamation' element={<Reclamation/>}/>
                    <Route path='/branded/unpretentious' element={<Unpretentious/>}/>
                    <Route path='/branded/stalls' element={<Stalls/>}/>
                    <Route path='/perennial' element={<Perennial/>}/>
                    <Route path='/perennial/bluegrass' element={<Bluegrass/>}/>
                    <Route path='/perennial/oatmeal' element={<Oatmeal/>}/>
                    <Route path='/perennial/clover' element={<Clover/>}/>
                    <Route path='/perennial/ryegrass' element={<Ryegrass/>}/>
                    <Route path='/perennial/alfalfa' element={<Alfalf/>}/>
                    <Route path='/perennial/pike' element={<Pike/>}/>
                    <Route path='/perennial/polevitsa' element={<Polevitsa/>}/>
                    <Route path='/perennial/timofeevka' element={<Timofeevka/>}/>
                    <Route path='/perennial/rump' element={<Rump/>}/>
                    <Route path='/perennial/festulolium' element={<Festulolium/>}/>
                    <Route path='/perennial/hedgehog' element={<Hedgehog/>}/>
                    <Route path='/perennial/canary' element={<Canary/>}/>
                    <Route path='/sowing' element={<Sowing/>}/>
                    <Route path='/related' element={<Related/>}/>
                    <Route path='/fodder' element={<Fodder/>}/>
                    <Route path='/fodder/senokos' element={<Senokos/>}/>
                    <Route path='/fodder/combined' element={<Combined/>}/>
                    <Route path='/fodder/pasture' element={<Pasture/>}/>
                    <Route path='/fodder/alfalfa' element={<Alfalfa/>}/>
                    <Route path='/fertilizers' element={<Fertilizers/>}/>
                </Routes>
                <Footer/>
        </section>
    );
};

export default Content;