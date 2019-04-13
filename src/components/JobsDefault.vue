<template>
  <main id="jobs-default">
    <div class="container"> 
      <div class="d-flex justify-content-left align-content-baseline pt-3">
        <img :src="job_default.img_url">
        <div class="ml-3">
          <h2>{{job_default.title}}</h2>
          <p>{{job_default.category}}
            <span class="bg-warning ml-3" 
              v-show="job_default.promo">
              Promoted
            </span> <br>
            <span>
              {{job_default.date}}
            </span>
          </p>
        </div> 
      </div>  
    </div> 
  </main>
</template>
 
 <script>
export default {
  props: { 
    job_default: Object
  } 
}
 </script>
 
 <style scoped>
#jobs-default img {
  height: 3.5rem;
  width: 3.5rem;
}
#jobs-default h2 {
  font-weight: bold;
  font-size: 20px;
  color:#22262B;
  text-align:left;
}
#jobs-default p { 
  font-size: 16px;
  color:#4A5158;
  text-align:left;
}
#jobs-default p span {  
  color:#CDD3D9;
  font-size: 14px;
}
#jobs-default button {
  background-color:#fff;
  border-radius:5px;
  font-size:16px;
  color: #878F97;
}
#jobs-default .apply-button {
  background-color: #E0DFFF;
  color: #0B0298;
  padding:.5rem 2rem;
}
#jobs-default .bg-warning{ 
  color: #4A5158;
  font-size:12px;
  background-color:#ffdb63 !important;
  padding:2px 5px;
}
 </style>
 