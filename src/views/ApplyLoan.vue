<template>
<div>
    <Navigation />
    <br>
    
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white"> NEW LOAN REQUEST</h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">Fill the form below.</p>
        
        <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                       </div>
            </div>
<br>
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Loan Amount</label>
                    <select v-model="application.loan_amount" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option>Select amount</option>
        <option v-for="amt of loans" :key="amt.id" :value="amt.id">
            {{amt.currency}}-{{amt.loan_value}}
        </option>
        </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
                    </div>

                

                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Loan Duration</label>
                    <select v-model="application.repayment_period" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option>Select months</option>
        <option>1</option>
         <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
                    <!-- <input class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email"> -->
                </div>
            </div>

            


            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Reason</label>

                <textarea v-model="application.content" class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <div class="flex justify-center mt-6">
                <button @click="sendApplication" class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save ticket</button>
            </div>
        </div>
    </section>
</div>

</template>
<script>
import Navigation from '@/components/Navigation.vue'
import axios from 'axios'
export default {
  components:{Navigation},
  data(){
    return{
        user:null,
        loans:[],
        application:{
            loan_amount:'',
            repayment_period:'',
            customer:null,
            content:''
        }

    }
  },
  methods:{
      getLoans(){
          const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          return axios.get('http://localhost:8000/loan/amount/', config).then(res=>{
              this.loans=res.data;
          })
      },
      sendApplication(){
             const data ={
                 customer:this.user.user.id,
                loan_amount:this.application.loan_amount,
                repayment_period:this.application.repayment_period,
                
            }
            const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          axios.post('http://localhost:8000/loans/', data, config).then(res=>{
              this.$router.push({ name: "Home"})
          }).catch(error=>{
              console.log(error)
          })
      }
  },
  created(){
      this.user =JSON.parse(localStorage.getItem('loggedUser'))
      this.getLoans()
  }
}
</script>