import React from 'react'
import { IoPencil } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
import headerImage from "../assets/headerImage.png"
import headerImageMobile from '../assets/headerImageMobile.png'
import offer1Image from '../assets/offer1.png'
import zipcare from '../assets/zipcare.png'
import Box from '../componets/Box'
import Slider from '../componets/Slider'
import { Link } from 'react-router-dom'
import {DealOfTheDay,kitchen_appliances,Accessories_Deal,Audio_Deal,Television,wearable_Deal,laptop_deal,tablet} from '../data'
import Card from '../componets/Card'


//Top Trending Deals
import T_T_1 from "../assets/T_T_1.png"
import T_T_2 from '../assets/T_T_2.png'
import T_T_3 from '../assets/T_T_3.png'
import T_T_4 from '../assets/T_T_4.png'
import T_T_5 from '../assets/T_T_5.png'
import T_T_6 from '../assets/T_T_6.png'
import T_T_7 from '../assets/T_T_7.png'
import T_T_8 from '../assets/T_T_8.png'
import T_T_9 from '../assets/T_T_9.png'
import T_T_10 from '../assets/T_T_10.png'
import T_T_11 from '../assets/T_T_11.png'
import T_T_12 from '../assets/T_T_12.png'
// import T_T_13 from '../assets/T_T_13.png'


import s1 from "../assets/toptrend.png"
import s2 from "../assets/mobile.png"
import s3 from "../assets/television.png"
import s4 from "../assets/laptop.png"
import s5 from "../assets/headphone.png"
import s6 from "../assets/refrigerator.png"
import s7 from "../assets/homeTheaters.png"
import s8 from "../assets/AC.png"
import s9 from "../assets/speaker.png"
import s10 from "../assets/washingmachine.png"
import s11 from "../assets/kitchenappliances.png"
import s12 from "../assets/grooming.png"
import s13 from "../assets/tablet.png"
import s14 from "../assets/wearable.png"
import s15 from "../assets/waterPurifiers.png"
import s16 from "../assets/camera.png"
import s17 from "../assets/Accessories.png"
import s18 from "../assets/gaming.png"


// Highlights Image
import highlight1 from '../assets/Highlights1.png'
import highlight2 from '../assets/Highlights2.png'
import highlight3 from '../assets/Highlights3.png'
import highlight4 from '../assets/Highlights4.png'
import highlight5 from '../assets/Highlights5.png'
import highlight6 from '../assets/Highlights6.png'
import highlight7 from '../assets/Highlights7.png'
import highlight8 from '../assets/Highlights8.png'
import highlight9 from '../assets/Highlights9.png'
import highlight10 from '../assets/Highlights10.png'

// New At Croma
import new1 from '../assets/new1.png'
import new2 from '../assets/new2.png'

import n1 from '../assets/n1.png'
import n2 from '../assets/n2.png'
import n3 from '../assets/n3.png'
import n4 from '../assets/n4.png'

//Mansoon Deal
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import m4 from '../assets/m4.png'
import m5 from '../assets/m5.png'
import m6 from '../assets/m6.png'
import m7 from '../assets/m7.png'
import m8 from '../assets/m8.png'

//Kitchen appliances
import kitchen1 from '../assets/kitchen1.png'
import kitchen2 from '../assets/kitchen2.png'
import kitchen3 from '../assets/kitchen3.png'
import kitchen4 from '../assets/kitchen4.png'

//Accessories
import Accessories1 from '../assets/Accessories1.png'
import Accessories2 from '../assets/Accessories2.png'
import Accessories3 from '../assets/Accessories3.png'
import Accessories4 from '../assets/Accessories4.png'

//Audio
import Audio1 from '../assets/Audio1.png'
import Audio2 from '../assets/Audio2.png'
import Audio3 from '../assets/Audio3.png'
import Audio4 from '../assets/Audio4.png'
import Audio5 from '../assets/Audio5.png'

//Apple At croma
import Apple1 from '../assets/Apple1.png'
import Apple2 from '../assets/Apple2.png'
import Apple3 from '../assets/Apple3.png'
import Apple4 from '../assets/Apple4.png'
import Apple5 from '../assets/Apple5.png'

//Croma Exclusive
import Croma_Exclusive1 from '../assets/Croma_Exclusive1.png'
import Croma_Exclusive2 from '../assets/Croma_Exclusive2.png'
import Croma_Exclusive3 from '../assets/Croma_Exclusive3.png'
import Croma_Exclusive4 from '../assets/Croma_Exclusive4.png'
import Croma_Exclusive5 from '../assets/Croma_Exclusive5.png'
import Croma_Exclusive6 from '../assets/Croma_Exclusive6.png'
import Croma_Exclusive7 from '../assets/Croma_Exclusive7.png'
import Croma_Exclusive8 from '../assets/Croma_Exclusive8.png'

//Laptop Deal
import laptop1 from '../assets/laptop1.png'
import laptop2 from '../assets/laptop2.png'
import laptop3 from '../assets/laptop3.png'
import laptop4 from '../assets/laptop4.png'

//know more
import km1 from '../assets/km1.png'
import km2 from '../assets/km2.png'
import km3 from '../assets/km3.png'
import km4 from '../assets/km4.png'

//Top Brand
import brand1 from '../assets/apple.png'
import brand2 from '../assets/samsung.png'
import brand3 from '../assets/philips.png'
import brand4 from '../assets/HP_CromaLogo.png'
import brand5 from '../assets/hp.png'
import brand6 from '../assets/sony.png'
import brand7 from '../assets/Lg.png'
import brand8 from '../assets/dell.png'
import brand9 from '../assets/vivo.png'
import brand10 from '../assets/oppo.png'
import brand11 from '../assets/jbl.png'
import brand12 from '../assets/Lenovo.png'
import brand13 from '../assets/amazon.png'
import brand14 from '../assets/panasonic.png'
import brand15 from '../assets/realme.png'
import brand16 from '../assets/mi.png'

//Featured brands
import feature1 from '../assets/feature_brand1.png'
import feature2 from '../assets/feature_brand2.png'
import feature3 from '../assets/feature_brand3.png'

//TATA advantage
import tata1 from '../assets/tata1.png'
import tata2 from '../assets/tata2.png'
import tata3 from '../assets/tata3.png'

const Home = () => {
    return (
        <div className='text-white'>
            <div className="flex items-center gap-2 md:hidden 10 bg-black text-white">
                <MdLocationOn className="text-xl" />
                <p className="whitespace-nowrap text-sm">Bhopal 462003</p>
                <IoPencil className="text-xs" />
            </div>

            <div>
                <Link to=""><img src={headerImage} className='hidden md:block' /></Link>
                <Link to=""><img src={headerImageMobile} className='block md:hidden' /></Link>
            </div>

            <Box>
                <div className='p-5 flex gap-4 '>
                    <Link to=""><img src={offer1Image} className='rounded-md overflow-hidden' /></Link>
                    <Link to=""><img src={zipcare} className='rounded-md overflow-hidden ' /></Link>
                </div>

                <Slider width={125}>

                    <div className='flex gap-3 md:gap-6 '>
                        <Link to=""><img src={s1} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s2} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s3} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s4} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s5} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s6} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s7} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s8} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s9} className='w-14 md:min-w-[125px]' /></Link>
                    </div>

                    <div className='flex '>
                        <Link to=""><img src={s10} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s11} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s12} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s13} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s14} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s15} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s16} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s17} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={s18} className='w-14 md:min-w-[125px]' /></Link>


                    </div>

                </Slider>

                <h2 className='font-medium text-2xl mx-5'>Top Trending Deals</h2>
                <Slider width={280} isflex="flex">
                    <img src={T_T_1} className='h-44 md:h-80 rounded-lg ' />
                    <img src={T_T_2} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_3} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_4} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_5} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_6} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_7} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_8} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_9} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_10} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={T_T_11} className='h-44 md:h-80 rounded-lg ' />
                    <img src={T_T_12} className='h-44 md:h-80 rounded-lg  ' />
                </Slider>

                {/* Highlights */}
                <h2 className='font-medium text-2xl mx-5'>Highlights</h2>
                <div className='md:px-5 flex justify-between my-5 gap-3  overflow-scroll scrollbar-none'>
                    <img src={highlight1} className='h-44 md:h-60 rounded-lg' />
                    <img src={highlight2} className='h-44 md:h-60 rounded-lg' />
                    <img src={highlight3} className='h-44 md:h-60 rounded-lg' />
                </div>

                <Slider width={388} isflex="flex" >
                    <img src={highlight4} className='h-44 md:h-60 rounded-lg' />
                    <img src={highlight5} className='h-44 md:h-60 rounded-lg' />
                    <img src={highlight6} className='h-44 md:h-60 rounded-lg' />
                    <img src={highlight7} className='h-44 md:h-60 rounded-lg' />
                    <img src={highlight8} className='h-44 md:h-60 rounded-lg' />
                    <img src={highlight9} className='h-44 md:h-60 rounded-lg' />
                    <img src={highlight10} className='h-44 md:h-60 rounded-lg' />
                </Slider>

                {/* Deal of the day */}
                <h2 className='font-medium text-2xl my-5 mx-5'>Deal Of The Day</h2>
                <div >
                    <Slider width={290} isflex="flex">
                        {
                            DealOfTheDay.map(el =>{
                                return(
                                    <Card
                                        key = {el.id}
                                        id = {el.id}
                                        title = {el.title}
                                        img = {el.img}
                                        priceSell = {el.priceSell}
                                        priceDis = {el.priceDis}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* New at chroma */}
                <h2 className='font-medium text-2xl my-5 mx-5'>New at Croma</h2>

                <div className='flex gap-3 p-5'>
                    <img src={new1} className='w-1/2 rounded-lg' />
                    <img src={new2} className='w-1/2 rounded-lg' />
                </div>

                <Slider width={200} isflex="flex">
                    <img src={n1} className='w-1/4 rounded-lg ' />
                    <img src={n2} className='w-1/4 rounded-lg ' />
                    <img src={n3} className='w-1/4 rounded-lg ' />
                    <img src={n4} className='w-1/4 rounded-lg ' />

                </Slider>

                {/* Mansoon Deal */}
                <h2 className='font-medium text-2xl my-5 mx-5'>Mansoon Deal</h2>
                <div className='md:px-5 flex justify-between my-5 gap-3  overflow-scroll scrollbar-none'>
                    <img src={m1} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={m2} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={m3} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={m4} className='h-44 md:h-80 rounded-lg  ' />
                </div>

                <div className='md:px-5 flex justify-between my-5  gap-3  overflow-scroll scrollbar-none'>
                    <img src={m5} className='h-44 md:h-80 rounded-lg ' />
                    <img src={m6} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={m7} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={m8} className='h-44 md:h-80 rounded-lg  ' />
                </div>

                {/* Kitchen Appliance */}
                <h2 className='font-medium text-2xl my-5 mx-5'>Kitchen Appliance</h2>
                <div className='md:px-5 flex justify-between my-5  gap-3  overflow-scroll scrollbar-none'>
                    <img src={kitchen1} className='h-44 md:h-80 rounded-lg ' />
                    <img src={kitchen2} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={kitchen3} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={kitchen4} className='h-44 md:h-80 rounded-lg  ' />
                </div>

                {/* Kitchen Appliances */}
                <h2 className='font-medium text-2xl my-5 mx-5'>Kitchen Appliances</h2>
                <div >
                    <Slider width={290} isflex="flex">
                        {
                            kitchen_appliances.map(el =>{
                                return(
                                    <Card
                                        key = {el.id}
                                        id = {el.id}
                                        title = {el.title}
                                        img = {el.img}
                                        priceSell = {el.priceSell}
                                        priceDis = {el.priceDis}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* Accessories */}
                <h2 className='font-medium text-2xl my-5 mx-5'>Accessories</h2>
                <div className='md:px-5 flex justify-between my-5  gap-3  overflow-scroll scrollbar-none'>
                    <img src={Accessories1} className='h-44 md:h-80 rounded-lg ' />
                    <img src={Accessories2} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={Accessories3} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={Accessories4} className='h-44 md:h-80 rounded-lg  ' />
                </div>
                
                {/* Accessories Deal */}
                <h2 className='font-medium text-2xl my-5 mx-5'>Accessories Deal</h2>
                <div >
                    <Slider width={290} isflex="flex">
                        {
                            Accessories_Deal.map(el =>{
                                return(
                                    <Card
                                        key = {el.id}
                                        id = {el.id}
                                        title = {el.title}
                                        img = {el.img}
                                        priceSell = {el.priceSell}
                                        priceDis = {el.priceDis}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* Audio */}
                <h2 className='font-medium text-2xl mx-5'>Audio</h2>
                <Slider width={280} isflex="flex">
                    <img src={Audio1} className='h-44 md:h-80 rounded-lg ' />
                    <img src={Audio2} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={Audio3} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={Audio4} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={Audio5} className='h-44 md:h-80 rounded-lg  ' />
                </Slider>

                {/* Deal On Audio */}
                <h2 className='font-medium text-2xl mx-5'>Deal On Audio</h2>
                <div >
                    <Slider width={290} isflex="flex">
                        {
                            Audio_Deal.map(el =>{
                                return(
                                    <Card
                                        key = {el.id}
                                        id = {el.id}
                                        title = {el.title}
                                        img = {el.img}
                                        priceSell = {el.priceSell}
                                        priceDis = {el.priceDis}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* Apple At Croma */}
                <h2 className='font-medium text-2xl mx-5'>Apple At Croma</h2>
                <div className='flex gap-3 p-5'>
                    <img src={Apple1} className='w-1/2 rounded-lg' />
                    <img src={Apple2} className='w-1/2 rounded-lg' />
                </div>

                <div className='flex gap-3 p-5'>
                    <img src={Apple3} className='w-1/3 rounded-lg' />
                    <img src={Apple4} className='w-1/3 rounded-lg' />
                    <img src={Apple5} alt=""  className='w-1/3 rounded-lg'/>
                </div>

                {/* Croma Exclusive */}
                <h2 className='font-medium text-2xl mx-5'>Croma Exclusive</h2>
                <div className='flex gap-3 p-5'>
                    <img src={Croma_Exclusive1} className='w-1/3 rounded-lg' />
                    <img src={Croma_Exclusive2} className='w-1/3 rounded-lg' />
                    <img src={Croma_Exclusive3} alt=""  className='w-1/3 rounded-lg'/>
                </div>

                <Slider width={280} isflex="flex">
                    <img src={Croma_Exclusive4} className='h-44 md:h-80 rounded-lg ' />
                    <img src={Croma_Exclusive5} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={Croma_Exclusive6} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={Croma_Exclusive7} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={Croma_Exclusive8} className='h-44 md:h-80 rounded-lg  ' />
                </Slider>
                
                {/* Television */}
                <h2 className='font-medium text-2xl mx-5'>Television</h2>
                <div >
                    <Slider width={290} isflex="flex">
                        {
                            Television.map(el =>{
                                return(
                                    <Card
                                        key = {el.id}
                                        id = {el.id}
                                        title = {el.title}
                                        img = {el.img}
                                        priceSell = {el.priceSell}
                                        priceDis = {el.priceDis}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* Watch */}
                <h2 className='font-medium text-2xl mx-5'>Deal On Wearables</h2>
                <div >
                    <Slider width={290} isflex="flex">
                        {
                            wearable_Deal.map(el =>{
                                return(
                                    <Card
                                        key = {el.id}
                                        id = {el.id}
                                        title = {el.title}
                                        img = {el.img}
                                        priceSell = {el.priceSell}
                                        priceDis = {el.priceDis}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* Laptop */}
                <h2 className='font-medium text-2xl my-5 mx-5'>Deal On Laptops</h2>
                <div className='md:px-5 flex justify-between my-5  gap-3  overflow-scroll scrollbar-none'>
                    <img src={laptop1} className='h-44 md:h-80 rounded-lg ' />
                    <img src={laptop2} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={laptop3} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={laptop4} className='h-44 md:h-80 rounded-lg  ' />
                </div>
                <div >
                    <Slider width={290} isflex="flex">
                        {
                            laptop_deal.map(el =>{
                                return(
                                    <Card
                                        key = {el.id}
                                        id = {el.id}
                                        title = {el.title}
                                        img = {el.img}
                                        priceSell = {el.priceSell}
                                        priceDis = {el.priceDis}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>
                    
                {/* Tablet */}
                <h2 className='font-medium text-2xl mx-5'>Tablet</h2>
                <div >
                    <Slider width={290} isflex="flex">
                        {
                            tablet.map(el =>{
                                return(
                                    <Card
                                        key = {el.id}
                                        id = {el.id}
                                        title = {el.title}
                                        img = {el.img}
                                        priceSell = {el.priceSell}
                                        priceDis = {el.priceDis}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>



                <div className='md:px-5 flex justify-between my-5  gap-3  overflow-scroll scrollbar-none'>
                    <img src={km1} className='h-44 md:h-80 rounded-lg ' />
                    <img src={km2} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={km3} className='h-44 md:h-80 rounded-lg  ' />
                    <img src={km4} className='h-44 md:h-80 rounded-lg  ' />
                </div>

                {/* topbrand */}
                <h2 className='font-medium text-2xl mx-5'>Top Brand</h2>
                <Slider width={125}>

                    <div className='flex gap-3 md:gap-6 '>
                        <Link to=""><img src={brand1} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand2} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand3} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand4} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand5} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand6} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand7} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand8} className='w-14 md:min-w-[125px]' /></Link>
                    </div>

                    <div className='flex '>
                        <Link to=""><img src={brand9} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand10} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand11} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand12} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand13} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand14} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand15} className='w-14 md:min-w-[125px]' /></Link>
                        <Link to=""><img src={brand16} className='w-14 md:min-w-[125px]' /></Link>

                    </div>

                </Slider>

                {/* Featured Brands */}
                <h2 className='font-medium text-2xl mx-5'>Featured Brands</h2>
                <div className='flex gap-3 p-5'>
                    <img src={feature1} className='w-1/3 rounded-lg' />
                    <img src={feature2} className='w-1/3 rounded-lg' />
                    <img src={feature3} alt=""  className='w-1/3 rounded-lg'/>
                </div>
            </Box >

            <div className='bg-[#0a49ac] py-5 '>
                <h2 className='font-medium text-2xl mx-8 my-5 py-5'>The TATA Advantage</h2>
                <div className='flex mx-5 '>
                    <img src={tata1} className='w-1/3 rounded-lg' />
                    <img src={tata2} className='w-1/3 rounded-lg' />
                    <img src={tata3} alt=""  className='w-1/3 rounded-lg'/>
                </div>
            </div>
                
        </div >
    )
}

export default Home
