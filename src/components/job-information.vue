<template> 
  <div class="job-information col-md-10 offset-md-1 p-3 d-flex flex-column justify-content-between">
    <div class="col-md-6 text-left">
      <div class="col-md-8 p-0 d-flex justify-content-between i-title">
        <span class="one">Job Title</span>
        <span class="two">Required</span>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">e.g Product Designer etc</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Product Designer">
        <span id="emailHelp" class="form-text form-error">This field is required</span>
      </div> 
      <div class="col-md-8 p-0 i-title mt-3">
        <span class="one">Category</span>
      </div>
      <b-form-group label="">
        <b-form-radio v-model="selected" name="some-radios" value="A">Radio Label One</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="B">Radio Label Two</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="C">Radio Label Three</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="D">Radio Label Four</b-form-radio>
      </b-form-group> 
      <div class="col-md-8 p-0 i-title mt-3">
        <span class="one">Job Type</span>
      </div>
      <b-form-group label="">
        <b-form-radio v-model="selected" name="some-radios" value="A">Full Time</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="B">Contract Job</b-form-radio>
      </b-form-group> 
      <div class="col-md-8 p-0 i-title mt-3">
        <span class="one">Location</span>
      </div>
      <div>
        <b-form-select v-model="selected" :options="countries"></b-form-select>
        <span id="emailHelp" class="form-text form-error">This field is required</span>
      </div> 
      <div class="col-md-8 p-0 i-title mt-3">
        <span class="one">City</span>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">leave city blank if none.</label>
        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="City">
        <span id="emailHelp" class="form-text form-error">This field is required</span>
      </div> 
    </div>
    <div class="form-group m-3">
      <div class="col-md-8 p-0 i-title mt-3 text-left">
        <span class="one">Job Description</span>
      </div>
      <label for="exampleInputEmail1" class="float-md-left">provide a short description about the job you offer</label>
      <VueTrix class="float-md-left text-left col-md-8 p-0" v-model="editorContent"/>
    </div> 
    <div style="flex: none;" class="col-md-6 text-left mt-3 float-md-left">
      <div class="col-md-8 p-0 d-flex justify-content-between i-title">
        <span class="one">Categories</span>
        <span class="two">Required</span>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Description</label>
        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="e.g: Payments, Blockchain">
        <span id="emailHelp" class="form-text form-error">This field is required</span>
      </div>
    </div> 
  <slot></slot> 
  </div>  
</template>
<script>
import VueTrix from 'vue-trix'
export default {
components: {
  VueTrix
},
data(){
  return{
    countries:["Nigeria","USA","ANGOLA"],
    editorContent: "",
    selected: ""
  }
},

}
</script>
<style scoped>
.job-information {
  border: 1px solid #D9D6FF;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
.job-information label{
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #AEB6BE;
}
.job-information .i-title .one{
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}
.job-information .i-title .two{
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: #AEB6BE;
}
.job-information .form-error{
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #FF324B;
}
.job-information .btn-next{
  background: #6C63FF;
  border-radius: 4px;
  color: #fff;
  outline: none;
  padding: 7px 35px;
}
.job-information .tab-button{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #fff;
  background: #b5b0ff;
  outline: none;
}
.job-information .stepper-title{
  line-height: 21px;
}
.job-information .active{
  background: #6C63FF;
}
.job-information .col-form-label{
  font-weight:600;
  text-align:right;
}
.job-information select{
  outline: none;
}
 </style>