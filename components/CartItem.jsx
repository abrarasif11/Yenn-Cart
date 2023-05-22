import Image from 'next/image';
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import img1 from '../components/assests/product-1.webp'
const CartItem = () => {
    return (
        <div className='flex py-5 gap-3 md:gap-5 border-b'>
            {/* Image Start */}
            <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
                <Image src={img1} />
            </div>
            {/* Image End */}
            <div className='w-full flex flex-col'>
                <div className='flex flex-col md:flex-row justify-between'>
                    {/* Product Title */}
                    <div className='text-lg md:text-2xl font-s
                 text-black '>
                        Jordan Retro G6
                    </div>
                    {/* Product SubTitle */}
                    <div className='text-md md:text-md font-medium text-black block md:hidden'>
                        Men&apos;s Golf Shoes
                    </div>
                     {/* Product Price */}
                     <div className='text-sm md:text-md font-bold text-black mt-2'>
                         MRP : $19.50
                     </div>
                </div>
                
                {/* Product SubTitle */}
                <div className='text-md  font-medium text-black hidden md:block'>
                        Men&apos;s Golf Shoes
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                            <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select
                                className="hover:text-black">
                                    <option value="1">UK 6</option>
                                    <option value="2">UK 9</option>
                                    <option value="3">UK 12</option>
                                    <option value="4">UK 15</option>
                                    <option value="5">UK 18</option>
                                    <option value="6">UK 21</option>
                                    <option value="7">UK 24</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="hover:text-black">
                                    <option value="1">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">4</option>
                                    <option value="1">5</option>
                                    <option value="1">6</option>
                                    <option value="1">7</option>
                                </select>
                            </div>
                        </div>
                        <RiDeleteBin6Line  className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"></RiDeleteBin6Line>
                    </div>
            </div>
        </div>
    )
}

export default CartItem;