import React from 'react'
import Pixel from './Pixel'
import Image from 'next/image';
import Header from './Home/header';
import Main from './Home/main';
import Footer from './Home/footer';
import Head from 'next/head';
import Link from 'next/link';


export default function Fb() {

  const data = [
    {
      "id": 1,
      "imgs": "1.jpg"
    },
    {
      "id": 2,
      "imgs": "btn1.gif"
    },
    {
      "id": 3,
      "imgs": "2.jpg"
    },
    {
      "id": 4,
      "imgs": "btn2.gif"
    },
    {
      "id": 5,
      "imgs": "3.jpg"
    },
    {
      "id": 6,
      "imgs": "btn3.gif"
    },
    {
      "id": 7,
      "img": "4.jpg"
    },
    {
      "id": 8,
      "imgs": "5.jpg"
       },
    {
      "id": 9,
      "imgs": "6.jpg"
    }
  ];
// ******************************************************************************************************************************************************
  const nopage = () => {
    window.location.href="/";
  }
  const goto = () => {
  
    window.location.href="http://account.45796687.com/register?lg=th";   //ใส่ url


  }


  return (
    <>
 

      <div>
    <Pixel name='FACEBOOK_PIXEL_1' />
  </div>

<header> 

<div className="boxs">
<div className="image-slide">
<p onClick={nopage}> 
      <Image src={`/imgs/${data[0].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[1].img}`} width={400} height={80} alt="img" />
      <Image src={`/imgs/${data[2].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[3].img}`} width={400} height={80} alt="img" />
      <Image src={`/imgs/${data[4].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[5].img}`} width={400} height={80} alt="img" />
      <Image src={`/imgs/${data[6].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[7].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[8].img}`} width={400} height={400} alt="img" />
      </p>
      </div>   </div>

      <div className="box">
<div className="image-slide">
<p onClick={goto}> 
      <Image src={`/imgs/${data[0].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[1].img}`} width={400} height={80} alt="img" />
      <Image src={`/imgs/${data[2].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[3].img}`} width={400} height={80} alt="img" />
      <Image src={`/imgs/${data[4].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[5].img}`} width={400} height={80} alt="img" />
      <Image src={`/imgs/${data[6].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[7].img}`} width={400} height={400} alt="img" />
      <Image src={`/imgs/${data[8].img}`} width={400} height={400} alt="img" />
      </p> </div>   </div>

      <button className='btns btn btn-danger' onClick={goto}>สมัครสมาชิด</button>

      </header>

     <Header/>
     <Main/>
     <Footer/>
    </>
  )
}
