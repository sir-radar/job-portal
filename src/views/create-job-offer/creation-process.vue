  <template>
   <main id="create-jobs">
    <b-container>

        <h1 class="text-center">Create Job Offer</h1>
        <div class="d-flex col-md-10 offset-md-1 justify-content-center">
          <div class="d-flex ml-5 mr-5 mb-1" v-for="(tab,i ) in tabs" v-bind:key="tab">
            <button
              v-bind:class="['tab-button', { active: currentTab === tab }]"
              v-on:click="currentTab = tab; currentTab == 'Company Information'? step = 1:  currentTab == 'Job Information'? step = 0: step = step;"
              >{{ i + 1 }}
              </button>
            <span class="m-1 stepper-title">{{tab}}</span>
          </div>
        </div>
        <div class="row">
          
            <component
              v-bind:is="currentTabComponent"
              class="tab"
            >
             <div class="row">
              <div style="margin-left: 60%;" class="offset-md-7" v-if="currentTabComponent == 'payment'">
                <button @click.prevent="next()" class="btn stepper-btn-next px-5">COMPLETE PAYMENT</button>
              </div>
              <div v-else class="stepper-btns d-flex justify-content-around col-md-5 offset-md-3">
                  <button @click.prevent="cancel()" class="btn stepper-btn-cancel px-5">CANCEL</button>
                  <button @click.prevent="next()" class="btn stepper-btn-next px-5">NEXT</button>
              </div>
            </div>
            </component>

           
        </div>
          
        
    </b-container>
   </main>
 </template>
 
 <script>
 import jobInformation from "@/components/job-information.vue";
 import companyInformation from "@/components/company-information.vue";
 import payment from "@/components/payment.vue";
 export default {
  components:{
    "job-information":jobInformation,
    "company-information":companyInformation,
    "payment":payment,
  },
  data(){
    return{
      step: 0,
      currentTab: "Job Information",
      tabs:["Job Information","Company Information","Payment"]
    }
  },
  methods:{
    next(){
      this.step++
      this.currentTab = this.tabs[this.step]
    },
    cancel(){
      this.step = 0;
      this.currentTab = this.tabs[this.step]
    }
  },
  computed: {
    currentTabComponent() {
      return this.currentTab.split(' ').join('-').toLowerCase()
    }
  }

 }
 </script>
 
 <style scoped>
 #create-jobs{
     margin-bottom: 50px;
     margin-top: 50px;
 }
  h1 {
    font-weight: bold;
    font-size: 36px;
    color:#22262B; 
  }
  label{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #AEB6BE;
  }
  .i-title .one{
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
  .i-title .two{
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #AEB6BE;
  }
  .form-error{
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FF324B;
  }
  .btn-next{
    background: #6C63FF;
    border-radius: 4px;
    color: #fff;
    outline: none;
    padding: 7px 35px;
  }
  .tab-button{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    color: #fff;
    background: #b5b0ff;
    outline: none;
  }
  .stepper-title{
    line-height: 21px;
  }
  .active{
    background: #6C63FF;
  }
  .col-form-label{
      font-weight:600;
      text-align:right;
  }
  select{
    outline: none;
  }
  .stepper-btn-cancel{
    background: #f0efff;
    mix-blend-mode: normal;
    border-radius: 4px;
    color: #8481B4;
  }
  .stepper-btn-next{
    background: #6C63FF;
    border-radius: 4px;
    color: #fff;
  }
 </style>
 