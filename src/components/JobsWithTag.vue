<template>
  <main id="jobs-with-tag">
    <b-container> 
      <div 
        class="d-flex justify-content-between align-items-center my-3 jobs">
        <div class="d-flex justify-content-left align-content-baseline">
          <img :src="job.img_url">
          <div class="ml-3">
            <h2>{{job.title}}</h2>
            <p>{{job.category}}<span class="ml-2">{{job.date}}</span></p>
            <div >
              <button v-for="(tag, index) in job.jobTags" :key="index" class="mr-2">{{tag}}</button>
              <button>{{job.count}}</button>  
            </div>
          </div> 
        </div>
        <router-link to="/job-details"><button class="apply-button">APPLY NOW</button></router-link>
      </div> 
    </b-container> 
  </main>
</template>
 
<script>
export default {
  props: { 
    job: Object
  } 
}
</script>
 
<style scoped>
#jobs-with-tag img {
  height: 3.5rem;
  width: 3.5rem;
  background-size: cover;
  object-fit: cover;
  }
#jobs-with-tag h2 {
  font-weight: bold;
  font-size: 20px;
  color:#22262B;
  text-align:left;
  }
#jobs-with-tag p { 
  font-size: 16px;
  color:#4A5158;
  text-align:left;
  }
#jobs-with-tag p span {  
  color:#CDD3D9;
  }
#jobs-with-tag  button {
  background-color:#fff;
  border-radius:5px;
  font-size:16px;
  color: #878F97;
}
#jobs-with-tag .apply-button {
  background-color: #E0DFFF;
  color: #0B0298;
  padding:.5rem 2rem;
  border:none;
}
 </style>
 