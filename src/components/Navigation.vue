<template>
    <!-- Add this to your tailwind.config.js -->
    <header class="bg-white dark:bg-gray-800">
        <nav class="border-b dark:border-gray-700">
            <div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div class="flex items-center justify-between">
                    <div>
                         <router-link class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">DIGI-LEND WEB</router-link>
                    </div>
                    
                    <!-- Mobile menu button -->
                    <div class="lg:hidden">
                        <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="items-center lg:flex">
                    <div class="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:space-x-16">
                        <!-- <a class="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">MY TICKETS</a> -->
                        <router-link class="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" to="/apply-loan"> APPLY LOAN</router-link> 
                        
                        <router-link class="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" to="/">LOAN REQUESTS</router-link> 
                        <router-link class="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" to="/customers">CUSTOMERS</router-link> 
                        

<router-link class="font-medium text-gray-700 dark:text-gray-200 hover:underline" to="/new-loan"> 
 <button class="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                          ADD LOAN AMOUNT
                        </button>
</router-link> 
            
                       
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>