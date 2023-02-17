import { useState, useRef, useEffect } from 'react';
// import "rsuite/dist/rsuite.min.css";
import { Carousel, Button } from 'flowbite-react';
// import { Button, Carousel } from 'rsuite'
import CarouselImage from './caoursel'
import data from './data.json';
import data1 from "../conponents/room/data.json";




function Home() {

    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
    console.log(maxScrollWidth);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        console.log("test");
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
        else {
            setCurrentIndex(0)
        }

    };



    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            //   return (
            //     carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            //   );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);
    return (
        <div>
            <div className='relative'>
                <div >
                    <img className='h-[75vh] w-full' src='https://preview.colorlib.com/theme/rolax/assets/img/hero/h1_hero.jpg.webp' />
                </div>
                <div>
                    <h2 className='absolute text-3xl sm:text-6xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        Rest Journey in Single step, in the breathtaking
                    </h2>
                </div>
            </div>

            <div className='ml-16 mr-16'>
                <div className='flex md:flex-row mt-3 mb-3 md:h-[525px] h-auto  flex-col'>
                    <div  >
                        <img className='flex-initial w-[2000px] h-full' src='https://preview.colorlib.com/theme/rolax/assets/img/hero/h1_hero.jpg.webp' />
                    </div>
                    <div className='flex-col flex-initial font-serif  font-thin p-10 '>
                        <div className='w-full h-auto text-ellipsis overflow-hidden'>

                            <h1 className='mb-2 text-lg md:text-2xl lg:text-4xl' >Luxury & Comfort Our services and wonders of Prague</h1>

                            <p className='mb-16 text-xs md:text-xl'>
                                The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite.
                            </p>
                        </div>
                        <Button className='text-2xl' style={{ color: "rgb(239 68 68)" }}>Learn More</Button>
                    </div>
                    <div className='hidden md:block' >
                        <img className='flex-initial w-full h-full' src='https://preview.colorlib.com/theme/rolax/assets/img/hero/h1_hero.jpg.webp' />
                    </div>
                </div>

                <div >
                    <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">

                    </div>
                    <div className='flex flex-col mb-5 items-center md:flex-row'>

                        <div className='flex flex-col w-11/12 font-serif  font-thin text-justify  '>
                            <h3 className='text-4xl'>
                                Our Rooms
                            </h3>
                            <h6 className='text-xl'>
                                The concept and service of the best luxury hotels in Asturias in our sophisticated.
                            </h6>
                        </div>
                        <div className='flex flex-row'>

                            <div className='p-4'>

                                <button onClick={movePrev}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-10 -ml-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className='p-4'>

                                <button onClick={moveNext}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-10  -ml-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div >
                        <div className="carousel my-11 mr-11 mx-auto">

                            <div className="relative overflow-hidden">

                                <div
                                    ref={carousel}
                                    className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-"
                                >
                                    {data.resources.map((resource, index) => {
                                        return (

                                            <div
                                                key={index}
                                                className="carousel-item text-center relative snap-start"
                                            >
                                                <div className=' w-[16rem] md:w-[21rem]'>
                                                    <img className='rounded-lg block object-cover object-center w-auto h-auto' src={resource.imageUrl} />


                                                    <div

                                                        className='absolute text-xs md:text-xl font-serif  bg-slate-500/30 text-white top-2/3 left-[40%] -translate-x-1/2 -translate-y-1/2'
                                                    >
                                                        <h3 className="text-white py-2 px-3 mx-auto">
                                                            {resource.title}
                                                        </h3>
                                                        <p>{resource.para}</p>
                                                        <p>{resource.price}</p>

                                                    </div>
                                                </div>
                                            </div>

                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='text-center m-2 '>
                    <h1 className='mb-10 text-base md:text-xl'>
                        Surrounded by galleries, boutiques, restaurants and cafés, our Hotel is a hub of energy and style.
                    </h1>
                    <h6 className='font-extralight  text-base md:text-xl '>Find a Room For You</h6>
                </div>

                <div className='font-serif text-xl md:text-5xl font-thin text-center mb-5'>
                    <p>
                        We Offer to Our Guest
                    </p>
                </div>
                <div className=''>
                    <div className='flex mb-7 w-full flex-col md:flex-row justify-center'>
                        <div className='lg:w-full  pr-3 pb-2'>
                            <div className=" relative  bg-gray-900  block group">
                                <img className=' w-auto h-full absolute inset-0 object-cover group-hover:opacity-50' src='https://preview.colorlib.com/theme/rolax/assets/img/hero/h1_hero.jpg.webp' />
                                <div className="relative p-2">
                                    <div className="mt-40">
                                        <div
                                            className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                            <div className="p-2">
                                                <p className="text-sm text-white">
                                                    image hover in text using tailwind css
                                                </p>
                                                <button className="px-4 py-2 text-sm text-white bg-indigo-600">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-full pr-3 pb-2'>
                            <div className=" relative  bg-gray-900  block group">
                                <img className='flex-initial h-full absolute inset-0 object-cover group-hover:opacity-50' src='https://preview.colorlib.com/theme/rolax/assets/img/hero/h1_hero.jpg.webp' />
                                <div className="relative p-2">
                                    <div className="mt-40">
                                        <div
                                            className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                            <div className="p-2">
                                                <p className="text-sm text-white">
                                                    image hover in text using tailwind css
                                                </p>
                                                <button className="px-4 py-2 text-sm text-white bg-indigo-600">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-full pr-3 pb-2'>
                            <div className=" relative  bg-gray-900  block group">
                                <img className='flex-initial h-full absolute inset-0 object-cover group-hover:opacity-50' src='https://preview.colorlib.com/theme/rolax/assets/img/hero/h1_hero.jpg.webp' />
                                <div className="relative p-2">
                                    <div className="mt-40">
                                        <div
                                            className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                            <div className="p-2">
                                                <p className="text-sm text-white">
                                                    image hover in text using tailwind css
                                                </p>
                                                <button className="px-4 py-2 text-sm text-white bg-indigo-600">Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='largerScreen' className="hidden md:block h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <div className='flex flex-col md:flex-row items-center justify-center p-10'>
                                <div>
                                    <h3 className='pb-1'>
                                        Nice Accommodation
                                    </h3>
                                    <p className='text-base pb-1'>
                                        "Leather detail shoulder contrastic colour
                                        contour stunning silhouette working peplum.
                                        Statement buttons cover-up tweaks patch.
                                    </p>
                                    <h5 className='text-xl'>- Omeka Lotus</h5>
                                    </div>
                                    <div>
                                        <h3 className='pb-1'>
                                            Nice Accommodation
                                        </h3>
                                        <p className='text-base pb-1'>
                                            "Leather detail shoulder contrastic colour
                                            contour stunning silhouette working peplum.
                                            Statement buttons cover-up tweaks patch.
                                        </p>
                                        <h5 className='text-xl'>- Omeka Lotus</h5>
                                        <div />
                                    </div>
                                </div>
                                </div>
                                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className='flex flex-col md:flex-row items-center justify-center p-10'>
                                <div>
                                    <h3 className='pb-1'>
                                        Nice Accommodation
                                    </h3>
                                    <p className='text-base pb-1'>
                                        "Leather detail shoulder contrastic colour
                                        contour stunning silhouette working peplum.
                                        Statement buttons cover-up tweaks patch.
                                    </p>
                                    <h5 className='text-xl'>- Omeka Lotus</h5>
                                    </div>
                                    <div>
                                        <h3 className='pb-1'>
                                            Nice Accommodation
                                        </h3>
                                        <p className='text-base pb-1'>
                                            "Leather detail shoulder contrastic colour
                                            contour stunning silhouette working peplum.
                                            Statement buttons cover-up tweaks patch.
                                        </p>
                                        <h5 className='text-xl'>- Omeka Lotus</h5>
                                        <div />
                                    </div>
                                </div>
                                </div>
                                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                    <div className='flex flex-col md:flex-row items-center justify-center p-10'>
                                <div>
                                    <h3 className='pb-1'>
                                        Nice Accommodation
                                    </h3>
                                    <p className='text-base pb-1'>
                                        "Leather detail shoulder contrastic colour
                                        contour stunning silhouette working peplum.
                                        Statement buttons cover-up tweaks patch.
                                    </p>
                                    <h5 className='text-xl'>- Omeka Lotus</h5>
                                    </div>
                                    <div>
                                        <h3 className='pb-1'>
                                            Nice Accommodation
                                        </h3>
                                        <p className='text-base pb-1'>
                                            "Leather detail shoulder contrastic colour
                                            contour stunning silhouette working peplum.
                                            Statement buttons cover-up tweaks patch.
                                        </p>
                                        <h5 className='text-xl'>- Omeka Lotus</h5>
                                        <div />
                                    </div>
                                </div>
                                </div>
                                
                            
                            </Carousel>
                        </div>

                <div id="mobile" className=" md:hidden h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                            <div className='flex flex-col md:flex-row items-center justify-center p-10'>
                                <div>
                                    <h3 className='pb-1'>
                                        Nice Accommodation
                                    </h3>
                                    <p className='text-xs sm:text-base pb-1'>
                                        "Leather detail shoulder contrastic colour
                                        contour stunning silhouette working peplum.
                                        Statement buttons cover-up tweaks patch.
                                    </p>
                                    <h5 className='text-xs sm:text-xl'>- Omeka Lotus</h5>
                                    </div>
                                   
                                </div>
                                </div>
                                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className='flex flex-col md:flex-row items-center justify-center p-10'>
                                <div>
                                    <h3 className='pb-1'>
                                        Nice Accommodation
                                    </h3>
                                    <p className='text-xs sm:text-base pb-1'>
                                        "Leather detail shoulder contrastic colour
                                        contour stunning silhouette working peplum.
                                        Statement buttons cover-up tweaks patch.
                                    </p>
                                    <h5 className='text-xs sm:text-xl'>- Omeka Lotus</h5>
                                    </div>
                                   
                                </div>
                                </div>
                                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className='flex flex-col md:flex-row items-center justify-center p-10'>
                                <div>
                                    <h3 className='pb-1'>
                                        Nice Accommodation
                                    </h3>
                                    <p className='text-xs sm:text-base pb-1'>
                                        "Leather detail shoulder contrastic colour
                                        contour stunning silhouette working peplum.
                                        Statement buttons cover-up tweaks patch.
                                    </p>
                                    <h5 className='text-xs sm:text-xl'>- Omeka Lotus</h5>
                                    </div>
                                   
                                </div>
                                </div>
                                
                            
                            </Carousel>
                        </div>
                </div>




                {/* <div >
                <Carousel autoplay className="custom-slider" >
                    <div className='flex'    >
                        <p className='m-20 justify-center font-serif pr-20 text-cyan-50 font-thin'>
                            <h3 className='pb-5'>
                                Nice Accommodation
                            </h3>
                            <p className='text-xl pb-5'>
                                "Leather detail shoulder contrastic colour
                                contour stunning silhouette working peplum.
                                Statement buttons cover-up tweaks patch.
                            </p>
                            <h5 className='text-xl'>- Omeka Lotus</h5>
                        </p>
                        <p className='m-20 justify-center font-serif pr-20 text-cyan-50 font-thin'>
                            <h3 className='pb-5'>
                                Nice Accommodationdfdf
                            </h3>
                            <p className='text-xl pb-5'>
                                "Leather detail shoulder contrastic colour
                                contour stunning silhouette working peplum.
                                Statement buttons cover-up tweaks patch.
                            </p>
                            <h5 className='text-xl'>- Omeka Lotus</h5>
                        </p>
                    </div>
                    <div className='flex  bg-red-400'>
                        <p className='m-20 justify-center font-serif pr-20 text-cyan-50 font-thin'>
                            <h3 className='pb-5'>
                                Nice test
                            </h3>
                            <p className='text-xl pb-5'>
                                "Leather detail shoulder contrastic colour
                                contour stunning silhouette working peplum.
                                Statement buttons cover-up tweaks patch.
                            </p>
                            <h5 className='text-xl'>- Omeka Lotus</h5>
                        </p>
                        <p className='m-20 justify-center font-serif pr-20 text-cyan-50 font-thin'>
                            <h3 className='pb-5'>
                                Nice test 2
                            </h3>
                            <p className='text-xl pb-5'>
                                "Leather detail shoulder contrastic colour
                                contour stunning silhouette working peplum.
                                Statement buttons cover-up tweaks patch.
                            </p>
                            <h5 className='text-xl'>- Omeka Lotus</h5>
                        </p>
                    </div>

                </Carousel>

            </div> */}
            </div>
            )
}

            export default Home