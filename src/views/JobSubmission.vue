<template>
  <div id="job-submission">
		<div class="col-6 offset-3 pt-5">
			<div class="checked d-flex justify-content-center align-items-center mt-5 mb-3">
				<i class="fas fa-check"></i>
			</div>
			<h1 class="pb-2">Job Offer Submitted!</h1>
			<p>Your offer will go live in few minutes. Further details about your offer can be found in your email.</p>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#job-submission {
	height:50vh;
	background: #F2F2F2;
}
#job-submission h1 {
	font-weight: bold;
	font-size: 28px;
	letter-spacing: -1px; 
	color: #020021;
}
#job-submission p {
	font-size: 18px; 
	color: #34334A;
	font-style: normal;
}
#job-submission .checked {
	background: #25AE88;
	height:50px;
	width:50px;
	margin:auto;
	border-radius:50%;
}
#job-submission {
	color:#fff;
	font-size:28px;
}
</style>
