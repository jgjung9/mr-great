import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuDetail from './pages/MenuDetail';
import MyCart from './pages/MyCart';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';
import Admin from './pages/Admin';
import Rider from './pages/Rider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/menu/:id', element: <MenuDetail /> },
      { path: '/cart', element: <MyCart /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/admin', element: <Admin /> },
      { path: '/rider', element: <Rider /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
