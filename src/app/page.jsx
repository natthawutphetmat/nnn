import Image from 'next/image';
import React from 'react';
import Main from './Home/main';
import Header from './Home/header';
import Head from 'next/head';
import { getData } from './data';
import Link from 'next/link';


export default async function HomePage() {
  const data = await getData()

  return (
    
   <>

<Head>
         <title>PG Games สล็อตpg สล็อตเว็บตรง สล็อตแตกง่าย</title>
        <meta name="description" content="ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย" />
       
         <meta name="og:title"  content="PG Games สล็อตpg สล็อตเว็บตรง สล็อตแตกง่าย"/>
         <meta name="og:description"  content="ความแตกต่างที่เป็นตัวตัดสิน pg slot game และยังมีโปรโมชั่นแจกให้กับสมาชิกทุกท่านอีกด้วย"/>
         <meta name="image" content="https://www.chaiyoloan.com/img/logo.jpg"/>
         <meta name="og:image" content="https://www.chaiyoloan.com/img/logo.jpg"/>


       </Head>
    <header>
            <div className="box">
              {data.map(item => (
                <div key={item.id}>
                 <div className="item">
                 <div className="image-slide">
                  <Link href="https://lin.ee/g1H4k9G" target='bank'>    
                <Image src={`/imgs/${item.img}`} width={400} height={400} className='img' alt="item" />

                </Link>
                 </div>
                 </div>
                </div>
              ))}
             
             
            </div>
       

<main>
<div className="boxs">
              {data.map(imgs => (
                <div key={imgs.id}>
                 <div className="item">
                 <div className="image-slide">
                <Image src={`/img/${imgs.img}`} width={400} height={400} className='img' alt="item" />
                 </div>
                 </div>
                </div>
              ))}
             
             
            </div>

</main>


</header>













<Main />
   
   </>
  );
};
