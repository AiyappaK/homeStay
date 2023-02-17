import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Carousel } from 'flowbite-react';

import data from './data.json'

function Room(props) {
    const location = useLocation();
    const [photos, setPhotos] = useState([]);
    const [photo, setPhoto] = useState([]);

    useEffect(() => {

        setPhotos(location.state.ids);
        setPhoto(photos.imageUrl);

    }, [])
    console.log("test", location.state.ids.imageUrl)
    useEffect(() => {

        setPhoto(photos.imageUrl);
    }, [photos])
    console.log("photo", photo);

    location.state.ids.imageUrl.map((i, index) => {
        console.log("1", i, index)

    })


    return (
        <div className=''>
            <div className=''>
                <div className='font-sans text-center font-bold text-5xl'>{photos.title}</div>
            </div>

            <div className='flex'>
                <div className='w-1/2'>

                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel slideInterval={5000}>
                            {
                                location.state.ids.imageUrl.map((i, index) => {
                                    return (
                                        <div key={index} >
                                            <img src={i} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                        </div>
                                    )
                                })
                            }

                        </Carousel>
                    </div>
                </div>
                <div className='w-1/2'>

                    <div>
                        <p className='text-3xl'>{photos.details}</p>
                        <div>
                            <table className=''>
                                <tr>
                                    <td className='p-2'>Standard Occupancy</td>
                                    <td className='p-2'>Maximum Occupancy</td>
                                    <td className='p-2'>Total No. of Rooms of this Kind</td>
                                    <td className='p-2'>Cost/night</td>
                                    <td className='p-2'>Extra Guest</td>
                                    <td className='p-2'>Kids (Above 6 Years)</td>
                                </tr>
                                <tr>
                                    <td className='p-2'>{photos.sMember}</td>
                                    <td className='p-2'>{photos.mMember}</td>
                                    <td className='p-2'>{photos.numberOfRoom}</td>
                                    <td className='p-2'>{photos.basicPrice}</td>
                                    <td className='p-2'>Rs. {photos.extraPrice}/Person</td>
                                    <td className='p-2'>Rs.{photos.KidsPrice}/Kid/Night </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Room