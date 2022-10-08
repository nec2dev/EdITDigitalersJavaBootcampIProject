import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Post from '../pages/Post';
import Error from '../pages/Error';
import PostEdit from '../pages/PostEdit';
import PostNew from '../pages/PostNew';
import SignUp from '../pages/SignUp';
import NotFound404 from '../pages/Error404';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/post/:id/edit" element={<PostEdit />} />
            <Route path="/post/new" element={<PostNew />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/error" element={<Error />} />
            <Route exact path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;