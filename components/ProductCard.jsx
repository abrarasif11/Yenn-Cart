import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import shoe from '../components/assests/product-1.webp'

const ProductCard = ({data: {attributes: p, id}}) => {
  return (
    <Link href={`/products/${p.slug}`} 
    className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
       {/* <Image className='w-full'  src={p.thumbnail.data.attributes.url}/> */}
       <div className='p-4 text-black'>
         <h2 className="text-lg font-medium">{p.name}</h2>
         <div  className="flex items-center text-black">
            <p className="mr-2 text-lg font-semibold">{p.price}</p>
            <p className="text-base  font-medium line-through">$25.00</p>
            <p className="ml-auto text-base font-medium text-green-500">20% off</p>
         </div>
       </div>
    </Link>
  )
}

export default ProductCard