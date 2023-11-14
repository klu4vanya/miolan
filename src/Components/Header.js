import React, { Component } from 'react'
import { Container, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Nav, NavbarText } from 'react-bootstrap'
import logo from "./images/logo.png"
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import News from '../Pages/News';
import Options from '../Pages/Options';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='dark' data-bs-theme="dark">
                    <Container >
                        <NavbarBrand style={{ width: "20%" }} href='/'>
                            <img
                                src={logo}
                                height="auto"
                                width="100%"
                                className='d-inline-block align-top'
                                alt='logo'
                            />
                        </NavbarBrand>
                        <NavbarToggle aria-controls='responsive-navbar-nav' />
                        <NavbarCollapse style={{ justifyContent: "center" }}>
                            <Nav style={{ margin: "auto" }}>
                                <NavLink href='/'> О компании </NavLink>
                                <NavLink href='/products'> Товары </NavLink>
                                <NavLink href='/options'> Наши услуги </NavLink>
                                <NavLink href='/news'> Новости </NavLink>
                                <NavLink href='/contacts'> Контакты </NavLink>
                            </Nav>
                            <NavbarText className='fs-4'>+7-(985)-639-99-65</NavbarText >
                        </NavbarCollapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path='/' element={<About />} />
                        <Route path='/products' element={<Options />} />
                        <Route path='/options' element={<Home />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/contacts' element={<Contacts />} />
                    </Routes>
                </Router>
            </>

        );
    }
}
