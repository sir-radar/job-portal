 <template>
   <main id="jobs-with-tag">
     <div class="container">
       <div class="d-flex justify-content-between align-items-center p-3">
        <div class="d-flex justify-content-left align-content-baseline">
          <img src="/assets/img.jpg">
          <div class="ml-3">
            <h2>Product Designer</h2>
            <p>Paystack <span class="ml-2">2hrs ago</span></p>
            <div>
              <button class="mr-2">Front-end</button>
              <button class="mr-2">Back-end</button>
              <button>+2</button>
            </div>
          </div> 
        </div>
        <button class="apply-button">APPLY NOW</button>
       </div>
     </div>
     
   </main>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style scoped>
  img {
    height: 3.5rem;
    width: 3.5rem;
  }
  h2 {
    font-weight: bold;
    font-size: 20px;
    color:#22262B;
    text-align:left;
  }
  p { 
    font-size: 16px;
    color:#4A5158;
    text-align:left;
  }
  p span {  
    color:#CDD3D9;
  }
  button {
    background-color:#fff;
    border-radius:5px;
    font-size:16px;
    color: #878F97;
  }
  .apply-button {
    background-color: #E0DFFF;
    color: #0B0298;
    padding:.5rem 2rem;
  }
 </style>
 