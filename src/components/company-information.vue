<template>
 <div class="row1 col-md-10 offset-md-1 p-3 d-flex flex-column justify-content-between">
    <div class="col-md-6 text-left">
        <div class="col-md-8 p-0 i-title">
            <span class="one">Year Founded</span>
        </div>
        <div>
            <b-form-select class="col-md-4" v-model="selected" :options="years"></b-form-select>
            <span id="emailHelp" class="form-text form-error">This field is required</span>
        </div>

        <div class="col-md-4 p-0 d-flex justify-content-between i-title mt-3">
            <span class="one">Logo</span>
            <span class="two">Required</span>
        </div>
        <div class="form-group">
        
            <input style="display:none" type="file" @change="onFileSelected" ref="fileInput">
            <div class="d-flex">
                <div @click="$refs.fileInput.click()" class="file-div d-flex justify-content-center align-items-center">
                    <i style="font-size: 40px;" class="far fa-images"></i>
                </div>

                <div class="upload-note ml-3 d-flex justify-content-center flex-column">
                    <p class="content m-0">Recommended Size: (216x216)</p>
                    <p class="content m-0">PNG, JPG, GIF.</p>
                    <p class="size mt-1">MAX: 2MB</p>
                </div>
            </div>
            <span id="emailHelp" class="form-text form-error">This field is required</span>
        </div>

        <div class="col-md-8 p-0 i-title mt-3">
            <span class="one">Location</span>
        </div>
        <div class="mb-3">
            <b-form-select v-model="selected" :options="countries"></b-form-select>
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
      years:["2019","2018","2017","2016","2015"],
      countries:["Nigeria","USA","ANGOLA"],
      selected: ""
    }
  },
  methods:{
    onFileSelected(event){
        console.log(event)
    }
  }

 }
 </script>
 <style scoped>
 .row1{
    border: 1px solid #D9D6FF;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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
  .file-div{
     height: 100px;
     width: 100px;
     background: #f2f4f6;
     border-radius: 50%;
  }
  .upload-note .content{
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
  }
  .upload-note .size{
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
  }
 </style>