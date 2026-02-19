import axios from '../utils/axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';
import { ProductContent } from '../utils/Context';
import { toast } from 'react-toastify';

const Details = () => {
  const navigate = useNavigate();

  const [products ,setproducts] = useContext(ProductContent);
  
  const [product , setproduct]=useState(null);
  const {id} = useParams();
  // const getsingleproduct = async () => {
  //   try{
  //     const { data } = await axios.get(`/products/${id}`);
  //     setproduct(data);
  //     //console.log(data);
  //   } catch (error){
  //     console.log(error); 

  //   }
  // };

  useEffect(() =>{
    if(!product){
      setproduct(products.filter((p)=>p.id == id)[0]);
    } 
    //getsingleproduct();
  },[]);

  const ProductDeleteHandler = () =>{
    const filterProducts = products.filter(p => p.id !==id);
    setproducts(filterProducts);
    localStorage.setItem("products", JSON.stringify(filterProducts))
    toast.success("product Deleted  successfully")

    navigate("/")
  }

   return  product ?  (
    <div className='  w-[80%] h-full justify-between items-center m-auto flex p-[10%] '>
       <img 
            className=' object-contain h-[90%] w-[50%] mr-10 '
            src= {`${product.image}`}
            alt=""
             />
        <div className='content w-[80%] ml-9'>
                <h1 className='text-2xl text-wrap'>
                {product.title} 
                    
                </h1>
                <h2 className='text-zinc-400 my-2'>{product.category }</h2>
                <h2 className='text-red-300 mb-3'>$ {product.price}</h2>
                <p className='text-wrap mb-[5%]'>{product.description}</p>
                <Link to={`/edit/${product.id}`} className='bg-zinc-200 mr-4 px-5 rounded-xl py-1'>Edit</Link>

                <button onClick={()=> ProductDeleteHandler(product.id)} className='bg-red-200 rounded-xl px-5 py-1  '>Delete</button>
                
            </div>
    </div> ) : ( <Loading />);
  
};

export default Details;
