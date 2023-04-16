import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Registration from './pages/Registration';



const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} ></Route>

          <Route path="/cart" element={<Cart />}></Route>

        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Route>


    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;