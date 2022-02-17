<template>

<div>
  <Navigation />
  
  <div class="container my-12 mx-auto px-4 md:px-12">
   
<section class="grid gap-6 my-6 md:grid-cols-3">
            <div class="p-6 bg-white shadow rounded-2xl">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-gray-500">Loans </dt>

                    <dd class="text-2xl font-light md:text-6xl">{{loans.length}} loans</dd>
                </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-gray-500">Awarded loans</dt>

                    <dd class="text-5xl font-light md:text-6xl">{{stats.total_awarded_loans}} loans </dd>
                </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-gray-500">Total customers</dt>

                    <dd class="text-5xl font-light md:text-6xl">{{stats.total_users}} users</dd>

                    
                </dl>
            </div>
            
        </section>
        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>
   
   <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 text-dark-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input type="text"  v-model="customer" name="search" placeholder="search by customer"
        class="w-1/2 py-2 border-b-2 border-blue-400 outline-none focus:border-green-400">
</div>
   <br>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white">
              <tr>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DATE REQUESTED
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CUSTOMER
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CUSTOMER STATUS
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  LOAN AMOUNT
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  LOAN DURATION
                </th>
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CONTENT
                </th> -->
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TOTAL INSTALLMENTS
                </th>
                 <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ASSIGNED TO
                </th> -->
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MONTHLY INSTALLMENT
                </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTION
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="loan of filteredLoans" :key="loan.id">
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> 
                    {{moment(loan.date_requested).format('DD.MM.YYYY')}}
                    </div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{loan.customer}}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div v-if="loan.customer_credit_worthiness==='Excellent'" class="text-sm  font-medium text-green-900">
                        {{loan.customer_credit_worthiness}}
                      </div>
                      <div v-if="loan.customer_credit_worthiness==='Good'" class="text-sm  font-medium text-green-600">
                        {{loan.customer_credit_worthiness}}
                      </div>
                      <div v-if="loan.customer_credit_worthiness==='Bad'" class="text-sm line-through font-medium text-gray-900">
                        {{loan.customer_credit_worthiness}}
                      </div>
                      <div v-if="loan.customer_credit_worthiness==='Defaulter'" class="text-sm line-through font-medium text-red-900">
                        {{loan.customer_credit_worthiness}}
                      </div>
                    </div>
                  </div>
                </td>
                 <!-- <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{loan.customer_credit_worthiness}}</div>
                </td> -->
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> KES {{loan.loan_amount}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900">  {{loan.repayment_period}} Months</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> KES  {{loan.total_to_pay}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> KES {{loan.monthly_installment}}</div>
                </td>
               
                
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a @click="awardLoan(loan.id)" class="text-green-600 hover:text-green-900">Approve Loan</a>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
</div>
<br>

</div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import axios from 'axios'
import moment from 'moment'
export default {
  components:{Navigation},
  data(){
    return{
      customer: '',
      user:null,
      loans:[],
      currentLoan:null,
      stats:{},
    }
  },
  computed: {
    filteredLoans() {
      return this.loans.filter((loan) => {
        return loan.customer.toLowerCase().includes(this.customer.toLowerCase());
      });
    },
  },
  methods:{
    getLoans(){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          return axios.get('http://localhost:8000/loans/', config).then(res=>{
        this.loans=res.data
      }).catch(error=>{
        console.log(error)
      })
    },
    awardLoan(id){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
      axios.patch(`http://localhost:8000/loans/${id}/`,
        {
    "is_approved": true
  }, config).then(res=>{
          this.getLoans()
        }).catch(error=>{
          console.log(error)
        })
    },
  },
  created(){
    this.user =JSON.parse(localStorage.getItem('loggedUser'))
    
    this.moment = moment;
    axios.get('http://localhost:8000/stats').then(res=>{
      this.stats = res.data
    }).catch(err=>{
      console.log(err)
    })
    this.getLoans()
  }
}
</script>