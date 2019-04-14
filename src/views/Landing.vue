<template>
  <main id="landing">
		<b-container class="py-5">
			<div class="row">
				<div class="offset-md-1 col-md-10">
					<h1 class="pt-3">The best place to find jobs on the internet</h1>
					<p>Browse from jobs provided by the best companies in the world</p>
					<button class="btn1">Post a job - $199</button>

					<h2 class="pt-5 my-4">Featured Offers</h2>
					<div class="border px-3"> 
						<JobsWithTag class="jobs" v-for="(job, i) in JobsWithTag" :key="i" :job="job"/> 
					</div>
 
					<h2 class="mt-5 py-4">Design Jobs</h2>
					<div class="d-flex justify-content-between">
						<div class="col-md-5">
							<JobsDefault v-for="(job, i) in JobsDefault" :key="i" :job_default="job"/>
						</div> 
						<div class="border-left col-md-1 offset-md-1 mb-5"></div>
						<div class="col-md-5">
							<JobsDefault v-for="(job, i) in JobsDefault" :key="i" :job_default="job"/>
						</div> 
					</div>
					<router-link to="/all-jobs"><button class="btn2 my-3">View More</button></router-link>
					<h2 class="pt-5 mt-3">Looking for a job?</h2>
					<p>Subscribe below to be among the first to receive Job offers</p>
					<div class="col-md-8 offset-md-2 d-flex">
						<input
							type="text" 
							placeholder="johnsmith@gmail.com"
							class="col-5"
							required 
						>  
						<b-form-select 
							v-model="selected"
							:options="interest"
							class="col-4 mx-2 select"> 
							<option :value="null">Choose Interest<i class="fas fa-chevron-down"></i></option>
						</b-form-select>  
						<button class="btn3 col-3">SUBSCRIBE</button>
					</div>
				</div>
			</div>
		</b-container>
	</main>
</template>

<script>
import JobsWithTag from "@/components/JobsWithTag.vue"
import JobsDefault from "@/components/JobsDefault.vue"

export default {
	name: "landing",
  components: { JobsWithTag, JobsDefault },
	data() {
    return {
			selected: null,
      JobsWithTag: [
        {
					title: "Product Designer",
					img_url: "/assets/img7.jpeg",
          category: "Paystack",
					date: "2hrs ago",
					jobTags: [
						'Front-end',
						'Back-end',
						'Design',
						'UX/UI' 
					],
					count: '+4' 
        },
        {
					title: "Digital Marketer",
					img_url: "/assets/img2.jpg",
          category: "forLoop Africa",
					date: "30mins ago",
					jobTags: [
					'Front-end',
					'Back-end',
					'Design',
					'UX/UI' 
					],
					count: '+3' 
        }
			],
			JobsDefault: [
        {
					title: "Marketing Manager",
					img_url: "/assets/img3.jpg",
          category: "Paystack",
					date: "2hrs ago",  
					promo: true
        },
        {
					title: "Quality Assurance",
					img_url: "/assets/img4.jpeg",
          category: "forLoop Africa",
					date: "30mins ago", 
					promo: false
				},
				{
					title: "Frontend Web Developer",
					img_url: "/assets/img5.jpeg",
          category: "forLoop Africa",
					date: "30mins ago", 
					promo: true
				},
				{
					title: "Quality Assurance",
					img_url: "/assets/img6.jpg",
          category: "forLoop Africa",
					date: "30mins ago", 
					promo: false
        }
			],
			interest:["Front-end", "Back-end", "vue.js", "React.js", "PHP", "Node.js"]
    }
	} 
}
</script>

<style scoped>
#landing { 
	background:#F2F2F2;
} 
#landing .btn1 {
	background-color:#6C63FF; 
	font-weight:bold;
	border-radius:12px;
	padding:.5rem 2rem;
	font-size: 20px;  
	color: #F9FAFB;
}
#landing .btn2{
	background: #F7F6FF; 
	color: #251BC8; 
	padding:.5rem 8rem;
	font-size: 16px;
	border:none; 
	font-weight:lighter;  
}
#landing .btn3 { 
	background: #6C63FF;
	font-weight:lighter;
	border-radius:4px;
	padding:.5rem 2rem;
	font-size: 14px;  
	color: #F9FAFB;
}
#landing input, #landing .select{
	background: #FFFFFF;
	border: 1px solid #D9D7FF;
	font-weight: normal;
	font-size: 18px; 
	color: #878F97;
}
#landing input::placeholder { 
	font-size: 18px; 
	color: #AEB6BE;
}
#landing .border {
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
}

#landing .jobs:not(:last-child){
  border-bottom: 1px solid #ccc
}
#landing h1 {
	font-weight: 800;
	font-size: 36px;
	line-height: 44px;
	letter-spacing: -1px; 
	color: #020021;
}
#landing p {
	font-size: 18px;
	line-height: 22px; 
	color: #34334A;
	font-style: normal;
}
#landing h2 {
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 34px; 
color: #020021;
}
</style>
 