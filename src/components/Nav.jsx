import React, { useContext } from 'react'
import { ProductContent } from '../utils/Context'
import { Link } from 'react-router-dom';
import Create from './Create';

const Nav = () => {
  const [products] = useContext(ProductContent);
  let distinct_category = 
  products && products.reduce((acc ,cv ) =>[...acc ,cv.category] ,[]);
  distinct_category = [...new Set(distinct_category)];
  //console.log(distinct_category);


  //for random color change
  const color =  () => {
    return `rgba(${(Math.random()* 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`
  };
  //console.log(color());

  return (
    <>
        <nav className='w-[15%] h-full  flex flex-col items-center  bg-zinc-100'>
        <Link to="./Create" className=' mt-2 py-1 px-2 border border-zinc-800 rounded-lg text-sm ' href="/create">Add a new Product</Link>
        <hr className='my-3 w-[80%]' />
        <h1 className='text-2xl '>Category Filter</h1>
        <div className='w-[80%] '>
          {distinct_category.map((c,i)=> (
          <Link
            key={i}
            to={`/?category=${c}`}
            className=' rounded-xl  mt-3 flex items-center '
            >
              <span style={{backgroundColor: color()}}  className=' rounded-full mr-4  w-[15px] h-[15px]'></span>{" "}
              {c}
            </Link>
            ))}       
        </div>



      </nav>
    </>
   
  );
};

export default Nav
