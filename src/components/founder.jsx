import React from 'react'
import { Desmon, Dyz, Jopan, Sheren, Willy } from '../assets'

const Founder = () => {
  return (
    <div class="container justify-center ml-7">
    <div>
      <div class="max-w-xl mx-auto text-center mb-16">
        <h4 class="font-semibold text-lg text-primary mb-2">Founder</h4>
        <h2 class="font-bold text-dark text-3xl mb-2 sm:text-4xl lg:text-5xl dark:text-white">Our Company Founder</h2>
      </div>
    </div>
    <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
    {/* image 1 */}
      <div class="mb-12 p-4 md:w-1/2">
        <div class="rounded-md shadow-md overflow-hidden" >
            <a href="https://instagram.com/sherenmsianggara?igshid=MzRlODBiNWFlZA">
          <img src= {Sheren} alt="landing page" width="w-full" className="hover:opacity-60 hover:shadow-lg transition duration-500" />
          </a>
        </div>
        <h3 class="font-semibold text-xl text-dark mt-5 ml-8 mb-1 text-center dark:text-white">Sheren Ming Sianggara</h3>
        <p class="font-medium text-center ml-8 text-lg text-secondary">CEO</p>
      </div>
     {/* role nya 2 */}
      <div class="mb-12 p-4 md:w-1/2">
        <div class="rounded-md shadow-md overflow-hidden">
            <a href="https://instagram.com/desmondorix?igshid=MzRlODBiNWFlZA">
          <img src= {Desmon} alt="landing page" width="w-full" className="hover:opacity-60 hover:shadow-lg transition duration-500" />
          </a>
        </div>
        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 text-center dark:text-white">Desmon Orix Koermala</h3>
        <p class="font-medium text-center text-lg text-secondary"> COO </p>
      </div>
    {/* role nya 3 */}
      <div class="mb-12 p-4 md:w-1/2">
        <div class="rounded-md shadow-md overflow-hidden">
            <a href="https://instagram.com/jovan_nihh?igshid=MzRlODBiNWFlZA">
          <img src={Jopan} alt="landing page" width="w-full" className="hover:opacity-60 hover:shadow-lg transition duration-500"  />
          </a>
        </div>
        <h3 class="font-semibold text-center text-xl text-dark mt-5 ml-20 mb-3 dark:text-white">Jovanca Morris</h3>
        <p class="font-medium text-center ml-20 text-lg text-secondary">CFO</p>
      </div>
  {/* role nya 4  */}
      <div class="mb-12 p-4 md:w-1/2">
        <div class="rounded-md shadow-md overflow-hidden">
            <a href="https://instagram.com/willyho76?igshid=MzNlNGNkZWQ4Mg">
          <img src= {Willy} alt="landing page" width="w-full" className="hover:opacity-60 hover:shadow-lg transition duration-500" />
          </a>
        </div>
        <h3 class="font-semibold text-xl text-center text-dark mt-5 mb-3 dark:text-white">Willy ho</h3>
        <p class="font-medium text-lg text-center text-secondary">CMO</p>
      </div>
      {/* role nya 5 */}
      <div class="mb-12 p-4 md:w-1/2">
        <div class="rounded-md shadow-md overflow-hidden" >
            <a href="https://instagram.com/dyzfrst?igshid=MzRlODBiNWFlZA==">
          <img src= {Dyz} alt="landing page" width="w-full" className="hover:opacity-60 hover:shadow-lg transition duration-500"/>
          </a>
        </div>
        <h3 class="font-semibold text-center text-xl text-dark mt-5 mb-3 dark:text-white">Reflyn Andyaz</h3>
        <p class="font-medium text-lg text-center text-secondary">CTO</p>
      </div>
    </div>
  </div>
  )
}

export default Founder