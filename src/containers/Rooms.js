import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import data from "../conponents/room/data.json";
function Rooms() {
  let navigate = useNavigate(); 

  const [photos , setPhotos] = useState();
  
  const handleID = (ids) =>{
    navigate('/room',{state:{ids}})
  }

  return (
    <div>
      <div className='relative'>
        <div >
          <img className='h-[50vh] w-full' src='https://preview.colorlib.com/theme/rolax/assets/img/hero/h1_hero.jpg.webp' />
        </div>
        <div>
          <h2 className='absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            Our Rooms
          </h2>
        </div>

      </div>
      <div className=' md:w-1/3 mb-9 ml-28 mr-20  pt-4 '>
        <h1 className='text-5xl pb-4'>Our Rooms</h1>
        <p className='text-xl'>
          The concept and service of the best luxury hotels in Asturias in our sophisticated.
        </p>
      </div>

      <div>
        <section className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-2">
            <div className="flex flex-col md:flex-row flex-wrap -m-1 md:-m-2">
              {data.resources.map((resource, index) => {
                return (
                  <div key={index} onClick={() => handleID(resource)} className="flex h-96  md:w-1/3">
                    <div className="w-full ">
                      <div className='relative '>
                        <img alt="gallery" className="block object-fit w-full h-96 p-1 md:p-2 rounded-lg"
                          src={resource.imageUrl[0]} />
                        <div className='absolute text-xl font-serif p-2 bg-slate-500/30 text-white top-2/3 left-[30%] -translate-x-1/2 -translate-y-1/2'>
                          <h4 className='stroke-cyan-500'>{resource.title}</h4>
                          <p>{resource.details}</p>
                          <p>Started from test ${resource.basicPrice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default Rooms