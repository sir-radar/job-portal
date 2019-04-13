<template>
  <main id="job-details">
		<b-container class="py-5">
			<div class="row">
				<div class="offset-md-1 col-md-10">
					<div class="d-flex justify-content-between border-bottom mb-4 pb-4">
						<div class=" details">
							<h2 class="pb-4">Front-end Design</h2> 
							<p><i class="fas fa-suitcase mr-3"></i>Contract Job</p>
							<p><i class="fas fa-globe mr-3"></i> <a class="anchor1" href="#">paystack.com</a></p>
							<p><i class="fas fa-map-marker-alt mr-3"></i>Lagos, Nigeria</p>
							<p><i class="fas fa-dollar-sign mr-3"></i> $20,000 - $30,000 <span><i>Not available</i></span></p>
							<p><i class="fas fa-history mr-3"></i>Expires in 10 days</p> 
						</div>
						<div class="">
							<img src="/assets/img3.jpg">
						</div>
					</div> 
					<div class="d-flex justify-content-between align-items-left">
						<div class="details m-0 p-0 col-md-8">
							<h3 class="mb-4">About Job Offer</h3> 
							<p class="mr-4 pr-3 pb-4 border-bottom">Review and filter candidates, take notes, and reach out – all on LinkedIn – using our integrated 
								applicant management tools.Review and filter candidates, take notes, and reach out all on LinkedIn – using our integrated 
								applicant management toolsReview and filter candidates, take notes, and reach out all on LinkedIn – using our integrated 
								applicant management toolsReview and filter candidates, take notes, and reach out all on LinkedIn – using our integrated 
								applicant management tools.Review and filter candidates, take notes, and reach out – all on LinkedIn – using our integrated 
								applicant management tools.Review and filter candidates, take notes, and reach out – all on LinkedIn – using our integrated 
								applicant management tools. </p>
							<h3 class="mb-4">Responsibilities</h3> 
							<p class="mr-4 pr-3 pb-4 border-bottom">Review and filter candidates, take notes, and reach out – all on LinkedIn – using our integrated 
								applicant management tools.Review and filter candidates, take notes, and reach out all on LinkedIn – using our integrated 
								applicant management toolsReview and filter candidates, take notes, and reach out all on LinkedIn – using our integrated 
								applicant management toolsReview and filter candidates, take notes, and reach out all on LinkedIn – using our integrated 
								applicant management tools.Review and filter candidates, take notes, and reach out – all on LinkedIn – using our integrated 
								applicant management tools.Review and filter candidates, take notes, and reach out – all on LinkedIn – using our integrated 
								applicant management tools. </p>
							<h3 class="mb-4">Requirements</h3> 
							<p class="">Review and filter candidates, take notes.</p>
							<ul style="list-style-type:circle;margin-bottom:10rem;">
								<li>Review and filter candidates</li>
								<li>Review and filter candidates</li>
							</ul>
						</div>
						<div class="col-md-4 tags m-0 p-0">
							<button v-for="(tag, index) in tags" :key="index" class="mr-2 mb-2">{{tag}}</button>
							<p class="border-bottom pt-5 pb-3 pl-3 socials">
								<i class="far fa-envelope mr-3 icon1"></i><a class="anchor2" href="mailto:webmaster@example.com">Share Via Email</a>
							</p>
							<p class="border-bottom pb-3 socials pl-3">
								<i class="fab fa-twitter mr-3 icon2"></i><a class="anchor2" href="#">Share on Twitter</a>
							</p>
							<p class="border-bottom pb-3 socials pl-3">
								<i class="fab fa-linkedin mr-3 icon3"></i><a class="anchor2" href="#">Share on LinkedIn</a>
							</p>
							<button class="btn3 col-md-12">Apply</button>
						</div>
					</div>
				</div>
			</div>
		</b-container>
	</main>
</template>

<script> 

export default {
	name: "job-details", 
	data() {
    return { 
			tags:["Frontend", "vue", "React", "Backend", "Node.js", "PHP"]
    }
	} 
}
</script>

<style scoped>
#job-details { 
	background:#F2F2F2;
}  
#job-details h2 {
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 34px; 
	color: #020021; 
} 
#job-details h3 { 
	color: #22262B;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
} 
#job-details img {
	height:154px;
	width:174px;
}
#job-details .details, .tags {
	text-align:left;
}
#job-details button {
  background-color:#fff;
  border-radius:5px;
  font-size:16px;
  color: #878F97;
}
#job-details .socials {
	text-align:left;
}
#job-details .btn3 { 
	background: #6C63FF;
	font-weight:lighter;
	border-radius:4px;
	padding:.5rem 2rem;
	font-size: 18px;  
	color: #F9FAFB;
}
#job-details p i{
	color: #878F97;
	font-size:12px
}
#job-details p>i{
	color: #5E5D6B;
	font-size:20px
}
#job-details p {
	font-size: 16px;
	line-height: 22px; 
	color: #5E5D6B;
}
#job-details .anchor1{
	color: #6C63FF;
}
.anchor1:hover {
	text-decoration:none;
}
#job-details .anchor2 {
	font-size: 18px;
	line-height: 22px; 
	color: #5E5D6B;
}
#job-details .icon1 {
	color: #878F97;
}
#job-details .icon2 {
	color: #38A1F3;
}
#job-details .icon3 {
	color:  #0077B5;
} 
</style>
  