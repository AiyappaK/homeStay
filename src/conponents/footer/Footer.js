import React from 'react'

function Footer() {
  return (
    <div>
        <div className="footer-2 bg-gray-800 pt-6 md:pt-12">
    <div className="container px-4 mx-auto">
  
      <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
  
        <div className="footer-info lg:w-1/3 md:px-4">
          <h4 className="text-white text-3xl mb-4">HomeStay Name</h4>
          <p className="text-gray-400 text-xl">Leather detail contrastic colour contour stunning silhouette working peplum. Statement buttons patch.</p>
          <div className="mt-4">
            <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
              <span className="fab fa-facebook-f mr-2"></span> Follow
            </button>
            <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
              <span className="fab fa-twitter mr-2"></span> Follow @facebook
            </button>
          </div>
        </div>
  
        <div className="md:w-2/3 lg:w-1/3 md:text-center md:px-4 xl:pl-16 mt-12 lg:mt-0">
          <div className="sm:flex">
            <div className="sm:flex-1">
              <h6 className="text-base font-medium text-white uppercase mb-2">About</h6>
              <div>
                <div className="text-gray-400 py-1 block hover:underline">Our Rooms</div>
                <div className="text-gray-400 py-1 block hover:underline">Culture</div>
                <div className="text-gray-400 py-1 block hover:underline">Team</div>
                <div className="text-gray-400 py-1 block hover:underline">Contact</div>
              </div>
            </div>
            
          </div>
        </div>
  
        <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
        <div className="sm:flex-1 mt-4  text-white sm:mt-0">
              <h6 className="text-base font-medium uppercase mb-2">Contact</h6>
            
              <p className="text-gray-400 mb-2 text-xl">76/A, Green Lane, Dhanmondi, NYC</p>
              <p className="fab fa-facebook-f   underline underline-offset-1"></p> 
              10 (87) 738-3940
            <h6 className=" text-2xl"></h6> 
                contact@carwash.com
            
              
            </div>
          </div>
      </div>
  
    </div>
  
    <div className="border-t border-solid border-gray-900 mt-4 py-4">
      <div className="container px-4 mx-auto">
  
        <div className="md:flex md:-mx-4 md:items-center">
          <div className="md:flex-1 md:px-4 text-center md:text-left">
            <p className="text-white">&copy; <strong>FWR</strong></p>
          </div>
          <div className="md:flex-1 md:px-4 text-center md:text-right">
            <div className="py-2 px-4 text-white inline-block hover:underline">Terms of Service</div>
            <div className="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</div>
          </div>
        </div>
  
      </div>
    </div>
  
  </div>
  </div>
  )
}

export default Footer