////This is the data till we were improting the data from the fake store API 

import React, { useState } from 'react'

const Create = () => {
  
    const [title ,settitle] =useState("");
    const [image , setimage] =useState("");
    const [category , setcategory] = useState("");
    const [description, setdescription] = useState("");
    const [price, setprice] = useState("");
    
    ////to prevent the page from refreasing again and again
    const AddProductHandler = (e) => {
        e.preventDefault();
        const product ={
            title,
            image,
            category,
            description,
            price
        }
        console.log(product);
    }

    return (
        <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen '>
            <h1 className='mb-5 w-1/2 text-3xl'>Add new products</h1>
            <input 
                type="url"
                placeholder='image link' 
                className='text-1xl bg-zinc-100 rounded p-1 w-1/2 mb-3'
                onChange={(e)=> setimage(e.target.value)}
                value={image}
             />
            <input  
                type="text"
                placeholder='title'
                className='text-1xl bg-zinc-100 p-1 w-1/2 mb-3'
                onChange={(e)=>settitle(e.target.value)}
                value={title}
            />

            <div className='w-1/2 flex justify-between'>
            <input 
                type="text"
                placeholder='Category' 
                className='text-1xl bg-zinc-100 rounded p-1 w-[48%] mb-3'
                onChange={(e)=> setcategory(e.target.value)}
                value={category}
             />
            <input  
                type="number"
                placeholder='price'
                className='text-1xl bg-zinc-100 p-1 w-[48%] mb-3'
                onChange={(e)=>setprice(e.target.value)}
                value={price}
            />
            </div>
            <textarea 
                onChange={(e) => setdescription(e.target.value)}
                placeholder='Enter product description'
                value={ description}
                className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                rows="10"
            ></textarea>

            <div className='w-1/2 '>
                  <button className=' mt-2 py-1 px-2 border border-blue-800  text-blue-300 rounded-lg text-sm ' href="/create">
                        Add a new Product
                  </button>

            </div>



        </form>
    )
  
}

export default Create



/////////program after create my own database


// import React, { useContext, useState } from 'react'
// import { ProductContent } from '../utils/Context';
// import { nanoid } from 'nanoid';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Create = () => {
//     const navigate = useNavigate()
//     const [products ,setproducts] = useContext(ProductContent);
//     const [title ,settitle] =useState("");
//     const [image , setimage] =useState("");
//     const [category , setcategory] = useState("");
//     const [description, setdescription] = useState("");
//     const [price, setprice] = useState("");
    
//     ////to prevent the page from refreasing again and again
//     const AddProductHandler = (e) => {
//         e.preventDefault();

//         if(
//             title.trim().length <5 || 
//             image.trim().length <5 || 
//             category.trim().length <5|| 
//             price.trim().length <1|| 
//             description.trim().length <5 ) {
//                 alert("Each and every filed must have 4 characters");
//                 return;
//             }


//         const product ={
//             id: nanoid(),
//             title,
//             image,
//             category,
//             description,
//             price
//         }
//         setproducts([...products , product])
//         localStorage.setItem("products",
//             JSON.stringify([...products , product]));
//         navigate("/");
//         toast.success("product added successfully")
//         console.log(product);
//     }

//     return (
//         <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen '>
//             <h1 className='mb-5 w-1/2 text-3xl'>Add new products</h1>
//             <input 
//                 type="url"
//                 placeholder='image link' 
//                 className='text-1xl bg-zinc-100 rounded p-1 w-1/2 mb-3'
//                 onChange={(e)=> setimage(e.target.value)}
//                 value={image}
//              />
//             <input  
//                 type="text"
//                 placeholder='title'
//                 className='text-1xl bg-zinc-100 p-1 w-1/2 mb-3'
//                 onChange={(e)=>settitle(e.target.value)}
//                 value={title}
//             />

//             <div className='w-1/2 flex justify-between'>
//             <input 
//                 type="text"
//                 placeholder='Category' 
//                 className='text-1xl bg-zinc-100 rounded p-1 w-[48%] mb-3'
//                 onChange={(e)=> setcategory(e.target.value)}
//                 value={category}
//              />
//             <input  
//                 type="number"
//                 placeholder='price'
//                 className='text-1xl bg-zinc-100 p-1 w-[48%] mb-3'
//                 onChange={(e)=>setprice(e.target.value)}
//                 value={price}
//             />
//             </div>
//             <textarea 
//                 onChange={(e) => setdescription(e.target.value)}
//                 placeholder='Enter product description'
//                 value={ description}
//                 className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
//                 rows="10"
//             ></textarea>

//             <div className='w-1/2 '>
//                   <button className=' mt-2 py-1 px-2 border border-blue-800  text-blue-300 rounded-lg text-sm ' href="/create">
//                         Add a new Product
//                   </button>

//             </div>



//         </form>
//     )
  
// }

// export default Create
