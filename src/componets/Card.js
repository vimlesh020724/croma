import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Card = ({id,img,priceSell,priceDis,title}) => {
    
  return (
    <div className='bg-[#121212] p-5 min-w-[280px]  rounded-lg'>
      <div className=''>
        <img src={img}  />
      </div>
      <div className='font-medium text-lg my-1'>
        {title}
      </div>
      <div className='text-lg font-medium gap-2 flex items-center '>
        <div>{priceSell}</div>
        <detete className='font-normal text-sm line-through text-gray-500'>{priceDis}</detete>
      </div>
      <div className='text-gray-500 flex text-lg my-1'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
      </div>
    </div>
  )
}

export default Card
