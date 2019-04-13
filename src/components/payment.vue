<template>
 <div class="row1 col-md-10 offset-md-1 p-3 d-flex justify-content-center">
     <div class="col-md-3 b"></div>
     <div class="col-md-3 b"></div>
     <div class="col-md-3 b"></div>

        <!-- <slot></slot> -->
        
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
 .b{
    height: 20px;
    width: 35px;
    background: red;
    margin: 10px;
 }
 </style>