<template>
  <div>
    <br>
    <div class="w-full max-w-md p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <!-- <img style="margin-right:auto; margin-left:auto;" src="../assets/weza.jpeg" alt=""> -->
        <h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">DIGI-LEND</h1>
        
        <form  class="mt-6">
              <div>
                <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                <input
                  name="email"
                  v-model="user.email"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>

               <div>
                <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">First name</label>
                <input
                  name="first_name"
                  v-model="user.first_name"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>

               <div>
                <label for="last_name" class="block text-sm text-gray-800 dark:text-gray-200">Last name</label>
                <input
                  name="last_name"
                  v-model="user.middle_name"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>

              <div>
                <label for="last_name" class="block text-sm text-gray-800 dark:text-gray-200">Last name</label>
                <input
                  name="last_name"
                  v-model="user.last_name"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>

               <div>
                <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                <input
                  name="password"
                  v-model="user.password"
                  type="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>

              <div>
                <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Confirm Password</label>
                <input
                  name="password"
                  v-model="user.confirm_password"
                  type="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>

            <div class="mt-6">
                <button
                @click="registerUser" 
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Register
                </button>
            </div>
        </form>
     

        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or</a>

            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <p class="mt-8 text-xs font-light text-center text-gray-400"> Have an account? 
          <router-link class="font-medium text-gray-700 dark:text-gray-200 hover:underline" to="/login">Log In</router-link> 
        </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      submitted: false,
      message: '',
      user:{
        email:'',
        first_name:'',
        last_name:'',
        password:'',
        confirm_password: ''
      }
  }
  },

  methods: {
      registerUser(e){
          const data={
                email: this.user.email,
                first_name:this.user.first_name,
                first_name:this.user.middle_name,
                last_name:this.user.last_name,
                password:this.user.password,
                password:this.user.confirm_password,
          }
          e.preventDefault();
          console.log(data)
          return axios.post('http://localhost:8000/accounts/register/',data).then(res=>{
              console.log(res)
              this.$router.push({ name: "Login"})
          }).catch(error=>{
              console.log(error)
          })
      },
  }


}
</script>