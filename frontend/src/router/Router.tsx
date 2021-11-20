import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import NotFound from '../views/404';
import Board from '../views/Board';
import BoardDetail from '../views/BoardDetail';
import BoardUpdate from '../views/BoardUpdate';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Board />} />
      <Route path="/detail/:id" element={<BoardDetail />} />
      <Route path="/update/:id" element={<BoardUpdate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
