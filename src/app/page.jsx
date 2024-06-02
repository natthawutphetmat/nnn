"use client"
import React, { useEffect, useState } from 'react';
import { getData } from './data';
import Footer from './Home/footer';
import Header from './Home/header';
import Main from './Home/main';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

     <Header/>


     <header>

            <div className="box">
            <div className="image-slide">
            {data.map(item => (
          <div key={item.id}>
            <img src={`/imgs/${item.img}`} width={400} height={400} className='img' alt='item'/>
            </div>
        ))}
            </div>
            </div>

            <div className="boxs">
            <div className="image-slide">
            {data.map(item => (
          <div key={item.id}>
            <img src={`/img/${item.img}`} width={400} height={400} className='img' alt='item'/>
            </div>
            
        ))}
            </div>
            </div>





        </header>


     
       
      


      
      <Main/>
      <Footer /> 
    </div>
  );
};

export default Home;
