
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';

const Products = () => {

  const dispatch = useDispatch();

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function ProductsData() {
      let { data: response } = await axios.get("https://fakestoreapiserver.reactbd.com/amazonproducts");
      setProductData(response);
      console.log(response);

      // const productData=data.data;
      // console.log(productData);  
    }
    ProductsData()
  }, [])

  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 px-4'>
      {productData.map((item) => (
        <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 
        relative flex flex-col gap-4'>
           <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>{item.category}</span>
           
          <div className='w-full h-auto flex items-center justify-center relative group '>
           
            <img className='w-52 h-64 object-contain'
              src={item.image}
              alt=" ProductImg" 
              />

          <ul className="absolute w-full h-36 bg-gray-100 -bottom-[170px] group-hover:bottom-0 duration-700 flex flex-col justify-center items-end gap-2 ">

              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>


          <div className='px-4 z-10 bg-white'>
            <div className='flex items-center justify-between '>
              <h2 className='font-titeleFont tracking-wide text-lg text-amazon_blue font-medium'>{item.title.substring(0, 20)}</h2>
              <p className='text-sm text-gray-600 font-semibold'>
                ${item.price}
              </p>
            </div>
            <div>
              <p className='text-sm'>{item.description.substring(0, 100)}...</p>
              <div className='text-yellow-500'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
              id:item.id,
              title:item.title,
              description:item.description,
              price:item.price,
              category:item.category,
              image:item.image,
              quantity:1,
            },
            // alert("Click Ok To Add Product")
            
            ))} className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yello-300 hover:to-yellow-500 border-yello-500 hover:border-yellow-700 active:bg-gradient-to-bl activer:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3' >Add to Cart</button>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default Products

