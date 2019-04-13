<template>
  <footer id="footer">
		<div class="container">
			<div class="row footer-wrap px-5">
				<div  class="col-md-4 col-xs-12 col-sm-4 ">
					<img src="/assets/logo2.svg"><br><br>
					<p>Copyright 2019. All rights reserved.</p>
					<div class="newsletter-social-links"> 
						<a href="" target="_blank"><i class="fab fa-slack"></i></a>
						<a href="" target="_blank"><i class="fab fa-twitter"></i></a>
						<a href="" target="_blank"><i class="fab fa-linkedin-in"></i></a>
						<a href="" target="_blank"><i class="fab fa-facebook-square"></i></a> 
						<a href="" target="_blank"><i class="fab fa-medium"></i></a> 
					</div>
				</div>
				<div  class="col-md-4 col-xs-12 col-sm-4 columns">
					<p class="font-weight-bold pb-3">RESOURCES</p>
					<p>Lopsum Ipsum Ropsum Musuem</p>
					<p>Lopsum Ipsum Ropsum Musuem</p>
					<p>Lopsum Ipsum Ropsum Musuem</p> 
				</div> 
				<div class="col-md-4 col-xs-12 col-sm-4 job-post">  
					<p><span>3,456</span> Jobs Posted</p>
					<p><span>169,456</span>Subscribers</p>
					<button>Post a Job</button><br><br>
					<a><p>Or Subscribe</p></a>
				</div>
			</div>
		</div>		
  </footer>
</template> 

<style scoped>
#footer {
	background: #302C6E;
	color: #DBDAE9;
	padding:4rem; 
} 
#footer .job-post button{
	border-radius:5px;
	color:#6C63FF;
	font-weight: bold;
	font-size: 14px; 
	text-transform: uppercase;
	padding:5px 30px;
}
#footer .newsletter-social-links a{
	color:#fff;
	font-size:30px;
	margin-right:2rem;
	float:left;
}
#footer img {
	height:30px;
	float:left;
}
#footer .footer-wrap {
	font-size:14px;
} 
#footer p {
	text-align:left;
} 
#footer button {
	float:left;
} 
</style>