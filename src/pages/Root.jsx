import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const ModalContext = createContext(null);

const Root = () => {
  return (
    <ModalContext.Provider>
        <Header />
        <main>
           <Outlet /> 
        </main>
    </ModalContext.Provider>
  )
}

export default Root