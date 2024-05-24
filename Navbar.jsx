import React from "react";

import gallogo from './assets/galtech-school-black-new-1.png.webp'
// language import
import country1 from './assets/images/county/01.png'
import country2 from './assets/images/county/02.png'
import country3 from './assets/images/county/03.png'
import country4 from './assets/images/county/04.png'
import country5 from './assets/images/county/05.png'
import country6 from './assets/images/county/06.png'
import country7 from './assets/images/county/07.png'
import country8 from './assets/images/county/08.png'
import Language from "./Language";
//css
import "./Navbar.css"
//logo import 
import { IoMoonOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";

//Notifications Import
import notiprofile1 from './assets/images/avatars/avatar-1.png'
import notiprofile2 from './assets/images/avatars/avatar-2.png'
import notiprofile3 from './assets/images/avatars/avatar-3.png'
import notiprofile4 from './assets/images/avatars/avatar-4.png'
import notiprofile5 from './assets/images/avatars/avatar-5.png'
import notiprofile6 from './assets/images/avatars/avatar-6.png'
import notiprofile7 from './assets/images/avatars/avatar-7.png'
import notiprofile8 from './assets/images/avatars/avatar-8.png'
import notiprofile9 from './assets/images/avatars/avatar-9.png'
import Notification from "./Notification";

const Navbar = () =>{
    const languageDetails = [
        {
            'language': "English",
            'img': country1
        },
        {
            'language': "Catalan",
            'img': country2
        },
        {
            'language': "French",
            'img': country3
        },
        {
            'language': "Belize",
            'img': country4
        },
        {
            'language': "Colombia",
            'img': country5
        },
        {
            'language': "Spanish",
            'img': country6
        },
        {
            'language': "Georgian",
            'img': country7
        },
        {
            'language': "Hindi",
            'img': country8
        },
    ]
    const NotificationDetails = [
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile1,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile2,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile3,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile4,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile5,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile6,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile7,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile8,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        {
            'name' : "Daisy Anderson",
            "img" : notiprofile9,
            "time" : "5 sec ago",
            "sentence" : "The standard Chunk of Lorem"  
        },
        
    ]
    return(
        <>
            
            <header>
        <div className="topbar d-flex align-items-center">
            <nav className="navbar navbar-expand gap-3">
                <div className="topbar-logo-header d-none d-lg-flex">
                    <div className="logo-div">
                        <img src={gallogo} className="logo-icon" alt="logo icon"/>
                    </div>
                   
                </div>
                
                <div class="search-bar d-lg-block d-none" data-bs-toggle="modal" data-bs-target="#SearchModal">
                     <a  className="btn d-flex align-items-center"><i className="bx bx-search"></i>Search</a>
                  </div>
                  <div className="top-menu ms-auto">
                    <ul className="navbar-nav align-items-center gap-1">
                        <li className="nav-item mobile-search-icon d-flex d-lg-none" data-bs-toggle="modal" data-bs-target="#SearchModal">
                            <a className="nav-link" href="avascript:;"><i className='bx bx-search'></i>
                            </a>
                        </li>
                        <li onclick="onclick_nav(this)" className="nav-item dropdown dropdown-laungauge d-none d-sm-flex">
                            <a onmouseover="nav_border(this)"  onmouseleave="navborderremove(this)" className="nav-link dropdown-toggle dropdown-toggle-nocaret"  data-bs-toggle="dropdown"><img src={country2} width="22" alt=""/>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end " >
                                {languageDetails.map((language,index) =>
                                (
                                    <Language key={index} name={language.language} image = {language.img}/>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item dark-mode d-none d-sm-flex">
                            <a className="nav-link dark-mode-icon" id="moon" onmouseover="nav_border(this)" onmouseleave="navborderremove(this)" ><IoMoonOutline />
                            </a>
                        </li>

                        <li className="nav-item dropdown dropdown-app" onclick="onclick_nav(this)">
                            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" onMouseEnter="nav_border(this)" onmouseleave="navborderremove(this)" data-bs-toggle="dropdown" href="javascript:;"><IoGridOutline color=""/></a>
                            <div className="dropdown-menu dropdown-menu-end p-0 ">
                                <div className="app-container p-2 my-2">
                                  <div className="row gx-0 gy-2 row-cols-3 justify-content-center p-2">
                                     <div className="col" >
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/slack.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Slack</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/behance.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Behance</p>
                                          </div>
                                          </div>
                                      </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                            <img src="assets/images/app/google-drive.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Dribble</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/outlook.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Outlook</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/github.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">GitHub</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/stack-overflow.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Stack</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/figma.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Stack</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/twitter.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Twitter</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/google-calendar.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Calendar</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/spotify.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Spotify</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/google-photos.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Photos</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/pinterest.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Photos</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/linkedin.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">linkedin</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/dribble.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Dribble</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/youtube.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">YouTube</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/google.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">News</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/envato.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Envato</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
                                     <div className="col">
                                      <a href="javascript:;">
                                        <div className="app-box text-center">
                                          <div className="app-icon">
                                              <img src="assets/images/app/safari.png" width="30" alt=""/>
                                          </div>
                                          <div className="app-name">
                                              <p className="mb-0 mt-1">Safari</p>
                                          </div>
                                          </div>
                                        </a>
                                     </div>
            
                                  </div>
            
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown dropdown-large" onclick="onclick_nav(this)">
                            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" data-bs-toggle="dropdown" onmouseover="nav_border(this)" onmouseleave="navborderremove(this)"><span className="alert-count">7</span>
                            <FaRegBell />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;">
                                    <div className="msg-header">
                                        <p className="msg-header-title">Notifications</p>
                                        <p className="msg-header-badge">8 New</p>
                                    </div>
                                </a>
                                <div className="header-notifications-list">
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center">
                                            <div className="user-online">
                                                <img src="assets/images/avatars/avatar-1.png" className="msg-avatar" alt="user avatar"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="msg-name">Daisy Anderson<span className="msg-time float-end">5 sec
                                            ago</span></h6>
                                                <p className="msg-info">The standard chunk of lorem</p>
                                            </div>
                                        </div>
                                    </a>
                                    {NotificationDetails.map((notifi , index) =>(
                                        <Notification key={index} name={notifi.name} sentence={notifi.sentence} img={notifi.img}  time={notifi.time} />
                                    ))}
                                    
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center">
                                            <div className="notify bg-light-primary">
                                                <img src="assets/images/app/github.png" width="25" alt="user avatar"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="msg-name">New 24 authors<span className="msg-time float-end">1 day
                                            ago</span></h6>
                                                <p className="msg-info">24 new authors joined last week</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center">
                                            <div className="user-online">
                                                <img src="assets/images/avatars/avatar-8.png" className="msg-avatar" alt="user avatar"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="msg-name">Peter Costanzo <span className="msg-time float-end">6 hrs
                                            ago</span></h6>
                                                <p className="msg-info">It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <a href="javascript:;">
                                    <div className="text-center msg-footer">
                                        <button className="btn btn-primary w-100">View All Notifications</button>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown dropdown-large" onclick="onclick_nav(this)">
                            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" onmouseover="nav_border(this)" onmouseleave="navborderremove(this)" data-bs-toggle="dropdown" aria-expanded="false"> 
                                <span className="alert-count">8</span> 
                                <RiShoppingBag4Line />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="javascript:;">
                                    <div className="msg-header">
                                        <p className="msg-header-title">My Cart</p>
                                        <p className="msg-header-badge">10 Items</p>
                                    </div>
                                </a>
                                <div className="header-message-list">
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/11.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/02.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/03.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/04.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/05.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/06.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/07.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/08.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="javascript:;">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="position-relative">
                                                <div className="cart-product rounded-circle bg-light">
                                                    <img src="assets/images/products/09.png" className="" alt="product image"/>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="cart-product-title mb-0">Men White T-Shirt</h6>
                                                <p className="cart-product-price mb-0">1 X $29.00</p>
                                            </div>
                                            <div className="">
                                                <p className="cart-price mb-0">$250</p>
                                            </div>
                                            <div className="cart-product-cancel"><i className="bx bx-x"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <a href="javascript:;">
                                    <div className="text-center msg-footer">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h5 className="mb-0">Total</h5>
                                            <h5 className="mb-0 ms-auto">$489.00</h5>
                                        </div>
                                        <button className="btn btn-primary w-100">Checkout</button>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="user-box dropdown px-3 " onclick="onclick_nav(this)">
                    <a className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="assets/images/avatars/avatar-2.png" className="user-img" alt="user avatar"/>
                        <div className="user-info">
                            <p className="user-name mb-0">Pauline Seitz</p>
                            <p className="designattion mb-0">Web Designer</p>
                        </div> 
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" >
                        <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-user fs-5"></i><span>Profile</span></a>
                        </li>
                        <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-cog fs-5"></i><span>Settings</span></a>
                        </li>
                        <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-home-circle fs-5"></i><span>Dashboard</span></a>
                        </li>
                        <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-dollar-circle fs-5"></i><span>Earnings</span></a>
                        </li>
                        <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-download fs-5"></i><span>Downloads</span></a>
                        </li>
                        <li>
                            <div className="dropdown-divider mb-0"></div>
                        </li>
                        <li><a className="dropdown-item d-flex align-items-center" href="javascript:;"><i className="bx bx-log-out-circle"></i><span>Logout</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
        </>

    )
}

export default Navbar