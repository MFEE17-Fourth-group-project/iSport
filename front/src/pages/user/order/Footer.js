import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footer-1 bg-gray-900 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 mt-4 sm:w-full xl:w-full sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-white text-xl font-bold mb-6 text-center">
                Stay connected  xl:text-left sm:text-center
              </h5>
              <div className="flex justify-center">
              {/* TODO-DELETE: sm:justify-center xl:justify-center */}
                <Link to=""
                  className=" w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  <i className="fab fa-facebook"></i>
                  
                </Link>
                <Link to=""
                  className=" w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to=""
                  className=" w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
                >
                  <i className="fab fa-google-plus-g"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
