  <template>
   <main id="create-jobs">
    <b-container>
        <h1 class="text-center">Create Job Offer</h1>
        <div class="row">
            <div class="row1 col-md-10 offset-md-1 p-3 d-flex justify-content-between">
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
                    <button type="button" class="btn btn-next float-md-right">NEXT</button>
                </div>
               
            </div>
        </div>
    </b-container>
   </main>
 </template>
 
 <script>
 export default {
 
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
  .btn-next{
    background: #6C63FF;
    border-radius: 4px;
    color: #fff;
    outline: none;
    padding: 7px 35px;
  }
 </style>
 