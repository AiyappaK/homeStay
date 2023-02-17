import React from 'react'
import { Carousel } from 'rsuite'
import MyComponent from '../conponents/map/map'

function About() {
  return (
    <div>

        <div className='relative'>
                <div >
                    <img className='h-[50vh] w-full' src='https://preview.colorlib.com/theme/rolax/assets/img/hero/h1_hero.jpg.webp' />
                </div>
                <div>
                    <h2 className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            About Us
                    </h2>
                </div>
               
            </div>
            <div className=' w-2/3 mb-9 ml-10 mr-10 text-3xl pt-4 '>
                   <p>
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                   </p>
                </div>
                <div className="flex flex-row items-center align-middle content-center justify-center">

                  <div className=" w-3/4">
                <Carousel autoplay className='' style={{backgroundColor:"white"}} >

    <img src="https://images.unsplash.com/photo-1665689285334-b0044b6d2dc7?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0NjAxMTY&ixlib=rb-4.0.3&q=80"  height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"  height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"  height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"  height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"  height="250" />
  </Carousel>
                </div>
                  </div>
  
    </div>
  )
}

export default About