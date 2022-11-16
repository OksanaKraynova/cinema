import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Catalog from './pages/Catalog';

const RouteApp = ({ searchValue, setSearchValue }) => {

    return (

        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/:category/:id' element={<Detail />} />
            <Route path='/:category' element={<Catalog />} />
            <Route path='/:category/search/:keyword' element={<Catalog />}
            />
        </Routes>
    );
};

export default RouteApp;