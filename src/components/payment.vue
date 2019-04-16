<template>
 <div class="col-md-10 offset-md-1 p-3 ">
    <div class="d-flex justify-content-center align-items-start"> 
     <div class="col-md-3 b p-3">
         <i class="far fa-check-circle checker"></i>
         <p>Basic</p>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 1</span></div>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 2</span></div>
         <div class="text-left disabled"><i class="fas fa-check"></i> <span class="ml-2">Point 3</span></div>
         <div class="text-left disabled"><i class="fas fa-check"></i> <span class="ml-2">Point 4</span></div>
         <div class="d-flex justify-content-between mt-4">
             <span class="save">Save 10%</span>
             <span class="price">$100</span>
         </div>
     </div>
     <div class="col-md-3 b p-3">
         <i class="far fa-check-circle checker"></i>
         <p>Standard</p>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 1</span></div>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 2</span></div>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 3</span></div>
         <div class="text-left disabled"><i class="fas fa-check"></i> <span class="ml-2">Point 4</span></div>
         <div class="d-flex justify-content-between b2">
             <span class="save">Save 25%</span>
             <span class="price">$150</span>
         </div>
     </div>
     <div class="col-md-3 b p-3">
         <i class="far fa-check-circle checker"></i>
         <p>Standard</p>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 1</span></div>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 2</span></div>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 3</span></div>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 4</span></div>
         <div class="text-left"><i class="fas fa-check"></i> <span class="ml-2">Point 5</span></div>
         <div class="d-flex justify-content-between mt-4 b3">
             <span class="save">Save 25%</span>
             <span class="price">$150</span>
         </div>
     </div>
    </div>

     <div class="d-flex col-md-10 offset-md-1 mt-4 justify-content-between ">
         <div class="form-group">
            <input type="text" class="form-control" aria-describedby="" placeholder="Coupon code">
         </div>

         <div class="text-right">
             <h2>Total Payment Due</h2>
             <p>$123.99</p>
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
      selected: "",
      selectedArray:[]
    }
  },
  mounted(){ 
    var btns = document.getElementsByClassName("b"); 
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        var current2 = document.getElementsByClassName("showed");
        // If there's no active class
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" active", "");
        }
        if (current2.length > 0) { 
          current2[0].className = current2[0].className.replace(" showed", "");
        }
        // Add the active class to the current/clicked button
        this.className += " active";
        this.childNodes[0].className += " showed";
      });
    }
  }

 };
 </script>
 <style scoped>
 .b{
    position: relative;
    height: auto;
    width: 35px;
    margin: 10px;
    border: 1px solid #D9D6FF;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
 }
 .active{
  border: 1px solid #6C63FF;
 }
 .b2{
    margin-top: 4rem !important;
 }
 .b3{
    margin-top: 6rem !important;
 }
 .disabled{
    color: #DBDAE9;
 }
 .save{
    font-size: 13px;
    color: #09A378;
 }
 .price{
    font-size: 16px;
    color: #020021;
 }
 h2{
    font-weight: bold;
    font-size: 28px;
 }
 .checker{
    position:absolute;
    color: #09A378;
    right: 2rem;
    top: 1.3rem;
    display: none;
 }
 .showed{
     display: block !important;
 }
 </style>