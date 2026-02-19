import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import Details from './Details'
import { ProductContent } from "../utils/Context"
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {
  const [products] = useContext ( ProductContent );
  const { search } = useLocation();
  const category =  decodeURIComponent(search.split("=")[1]);

  const [filterProducts, setfilteredProducts]= useState(null);
  
  const getproductscategory = async () => {
    try{
        const {data} = await axios.get(`/products/category/${category}`);
        setfilteredProducts(data);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //console.log(category);
    if (!filterProducts || category == "undefined" ) setfilteredProducts(products);
    if(category != "undefined" ) {
    //  getproductscategory();   /////////removing the api 
    setfilteredProducts(products.filter(p => p.category == category));
    
    }

  } , [category ,products]);

  //console.log(filterProducts)
  //console.log(products) ;

  return products ? (
    <>
        <Nav />

        <div className='w-[85%] pl-10 pt-[5%] bg-zinc-200 flex flex-wrap overflow-x-hidden overflow-y-auto gap-4'>

          
            {filterProducts && filterProducts.map((p,i ) => (
            <Link key={p.id}
            to={`/details/${p.id}`}
            className='w-[20%] h-[40vh] flex flex-col bg-zinc-100 rounded-xl shadow border p-1 mr-4 mb-5 card  justify-center items-center '
             >

              <div 
                className=' w-full h-[80%] bg-contain bg-no-repeat bg-center mb-2 hover:scale-110'
                   style={{backgroundImage:`url(${p.image})`}}>
              </div>
              <h1 className='hover:text-blue-300 text-sm '>{p.title}</h1>
          </Link>
        ))}

          </div>
    </> ) : (
      <Loading />
    );
    
  
};

export default Home
