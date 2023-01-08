import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HappyPage } from '../../pages/happyPage';
import { HomePage } from '../../pages/homePage';
import { LostPage } from '../../pages/lostPage';
import { SadPage } from '../../pages/sadPage';

export const Main = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/happy" element={<HappyPage />}></Route>
                <Route path="/lost" element={<LostPage />}></Route>
                <Route path="/sad" element={<SadPage />}></Route>
            </Routes>
        </BrowserRouter>
    </>
    );
};

