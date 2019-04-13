<template>
  <main id="all-jobs">
		<b-container class="py-5">
			<div class="row">
				<div class="offset-md-1 col-md-10">
					<h1 class="pt-3">Front-end design Jobs</h1>
					<p class="pb-3">22 jobs from some of the best companies hiring now</p>  
					<div class="border px-3 mt-5">  
						<div class="mt-3 mb-5 d-flex justify-content-between align-items-center">
							<router-link to="/#" class="router-link"><i class="fas fa-chevron-left ml-3 mr-2"></i>Back to Homepage</router-link>
							<b-dropdown 
								text="Sort by "
								class="m-2 dropdown"
								variant="none"
							>
								<b-dropdown-item href="#">Action</b-dropdown-item>
								<b-dropdown-item href="#">Another action</b-dropdown-item>
								<b-dropdown-item href="#">Something else here...</b-dropdown-item>
							</b-dropdown>
						</div>
						<JobsWithTag class="jobs border-none" v-for="(job, i) in JobsWithTag" :key="i" :job="job"/> 
						<b-pagination class="my-4 d-flex justify-content-center" v-model="currentPage"></b-pagination> 
					</div>  
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
	name: "all-jobs",
  components: { JobsWithTag, JobsDefault },
	data() {
    return {
			selected: null,
      JobsWithTag: [
        {
					title: "Product Designer",
					img_url: "/assets/img3.jpg",
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
					img_url: "/assets/img4.jpeg",
          category: "forLoop Africa",
					date: "30mins ago",
					jobTags: [
					'Front-end',
					'Back-end',
					'Design',
					'UX/UI' 
					],
					count: '+3' 
				},
				{
					title: "Digital Marketer",
					img_url: "/assets/img5.jpeg",
          category: "forLoop Africa",
					date: "30mins ago",
					jobTags: [
					'Front-end',
					'Back-end',
					'Design',
					'UX/UI' 
					],
					count: '+3' 
				},
				{
					title: "Digital Marketer",
					img_url: "/assets/img6.jpg",
          category: "forLoop Africa",
					date: "30mins ago",
					jobTags: [
					'Front-end',
					'Back-end',
					'Design',
					'UX/UI' 
					],
					count: '+3' 
				},
			  {
					title: "Digital Marketer",
					img_url: "/assets/img7.jpeg",
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
			interest:["Front-end", "Back-end", "vue.js", "React.js", "PHP", "Node.js"]
    }
	} 
}
</script>

<style scoped>
#all-jobs { 
	background:#F2F2F2;
}  
#all-jobs  .btn3 { 
	background: #6C63FF;
	font-weight:lighter;
	border-radius:4px;
	padding:.5rem 2rem;
	font-size: 14px;  
	color: #F9FAFB;
}
#all-jobs input, #all-jobs  .select{
	background: #FFFFFF;
	border: 1px solid #D9D7FF;
	font-weight: normal;
	font-size: 18px; 
	color: #878F97;
}
#all-jobs input::placeholder { 
	font-size: 18px; 
	color: #AEB6BE;
}
#all-jobs  .border {
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
} 
#all-jobs .jobs:not(:last-child){
  border-bottom: 1px solid #ccc
}
#all-jobs h1 {
	font-weight: 800;
	font-size: 36px;
	line-height: 44px;
	letter-spacing: -1px; 
	color: #020021;
}
#all-jobs p {
	font-size: 18px;
	line-height: 22px; 
	color: #34334A;
	font-style: normal;
} 
#all-jobs .router-link {
	color: #0B0298;
	font-weight: lighter;
}
#all-jobs .router-link:hover {
	text-decoration:none;
	font-weight: normal; 
}
#all-jobs  i {
	color: #020021;
}  
#all-jobs h2 {
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 34px; 
color: #020021;
}
</style>
  