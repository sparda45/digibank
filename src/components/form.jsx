import React from 'react'

const Form = () => {
  return (
    <div>
    <div>
      <div class="max-w-xl mx-auto text-center mb-160">
        <h4 class="font-semibold text-lg text-primary mb-2">
          contact
        </h4>
        <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
          Contact US
        </h2>
        <p class="font-medium text-md text-secondary md:text-lg">
          Isi form di bawah ini untuk menghubungi customer service DigiBank
        </p>
      </div>
    </div>
    <form>
      <div class="w-full lg:w-2/3 lg:mx-auto">
        <div class="w-full px-4 mb-8">
          <label for="name" class="text-base font-bold uppercase text-blue">Name</label>
          <input type="text" id="name" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-blue focus:ring-1 focus:border-blue" />
        </div>
        <div class="w-full px-4 mb-8">
          <label for="Email" class="text-base font-bold uppercase text-blue">Email</label>
          <input type="Email" id="Email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-blue focus:ring-1 focus:border-blue"/>

        </div>
        <div class="w-full px-4 mb-8">
          <label for="Message" class="text-base font-bold uppercase text-blue">Message</label>
          <textarea type="Email" id="Email" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-blue focus:ring-1 focus:border-blue h-32"></textarea>
        </div>
        <div class="w-full px-4">
          <button class="text-base font-semibold text-white bg-blue py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500 shadow-sm ">Send!!</button>
        </div>
      </div>
      </form>
 </div>
  )
}

export default Form