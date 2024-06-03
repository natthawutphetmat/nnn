import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

function header() {
  return (
    <div>
          <Head>
    <title>PG Slot เว็บตรง สล็อต Pg เว็บตรง ปลอดภัย 100% ใหม่ล่าสุด</title>
    <meta name="description" content="สล็อตเว็บตรง แตกหนัก ไม่มีขั้นต่ำ ไม่ผ่านเอเย่นต์ เว็บสล็อต PG SLOT สล็อต PG ทดลองเล่นฟรี คาสิโอออนไลน์และแทงบอล สล็อต PG"/>
    <meta property="og:title" content="PG Slot เว็บตรง สล็อต Pg เว็บตรง ปลอดภัย 100% ใหม่ล่าสุด"/>  
    <meta property="og:description" content="สล็อตเว็บตรง แตกหนัก ไม่มีขั้นต่ำ ไม่ผ่านเอเย่นต์ เว็บสล็อต PG SLOT สล็อต PG ทดลองเล่นฟรี คาสิโอออนไลน์และแทงบอล สล็อต PG"/> 
    <meta name="twitter:image" content="/img/logo.png"/>
    <meta property="og:image" content="/img/logo.png"/>  
    </Head>
      
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><Image src="/img/logo.png" width={50} height={50} className='logo' alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
     
           
      

    </div>
  )
}

export default header
