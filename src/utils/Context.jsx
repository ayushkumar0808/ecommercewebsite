////This is the data till we were improting the data from the fake store API 

import axios from "./axios"
import React, { createContext, useEffect, useState } from 'react'


export const ProductContent = createContext();



const Context = (props) => {

    const [products , setproducts] = useState(null);

     ///////here we are importing the data from api and make it available through out the program
    const getproducts = async () => {
        try{
            const {data} = await axios ("/products");
            setproducts(data);
            //console.log(data);
        } catch(error){
            console.log(error);
        }
    };
    useEffect (() => {
        getproducts();
    }, []);
    return (
        <ProductContent.Provider value ={[products,setproducts]}>
            {props.children}
        </ProductContent.Provider> 

    

  );
};

export default Context



/////This is the part where we are creating our own dataBases



// import axios from "./axios"
// import React, { createContext, useEffect, useState } from 'react'



// export const ProductContent = createContext();



// const Context = (props) => {

//     const [products , setproducts] = useState(JSON.parse(localStorage.getItem("products")) ||null);

//      ///////here we are importing the data from api and make it available through out the program
//     // const getproducts = async () => {
//     //     try{
//     //         const {data} = await axios ("/products");
//     //         setproducts(data);
//     //         //console.log(data);
//     //     } catch(error){
//     //         console.log(error);
//     //     }
//     // };
//     // console.log(products);
//     // useEffect (() => {
//     //     getproducts();
//     // }, []);

//     return (
//         <ProductContent.Provider value ={[products,setproducts]}>
//             {props.children}
//         </ProductContent.Provider> 

    

//   );
// };

// export default Context
