// import React from 'react'
// import productsService from '../../services/products.service';
// import { useState, useEffect } from 'react';
import arrow from '../../assets/svg/arrow.svg';
import logo from '../../assets/image/logo.png';
import './homePage.scss'
function HomePage() {


    // useEffect(() => {
      
    //     // getData()
    //   return () => {
        
    //   }
    // }, [])


    // const getData : void = () => {
    //     productsService.getAll()
    //       .then((response) => {
    //         console.log(response);
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   };
    
  return (
    < header className='flex flex-row w-[100vw] sticky top-[0px] items-center h-[107px] justify-between bg-white'>
            <img className='logo' src={logo}></img>
            <div className='flex flex-row justify-center ml-[100px]'>
                <div className='mx-9'>خانه</div>
                <div className='mx-9'>فروشگاه</div>
                <div className='mx-9'>وبلاگ</div>
                <div className='mx-9'>درباره ما</div>
                <div className='mx-9'>تماس با ما</div>
            </div>
            <div className='flex flex-row justify-center'>
                <div>
                   <img className='logo' src={arrow}></img> 
                   <div>asd</div> 
                </div>
                <p>asdasd</p>
            </div>
        </header>
  )
}

export default HomePage