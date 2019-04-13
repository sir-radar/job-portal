<template>
  <main id="header">
		<div class="container d-flex justify-content-between p-4"> 
			<img src="/assets/logo.png">  
			<div class="d-flex justify-content-between align-items-center">
				<i class="fas fa-search mr-4"></i>  
				<router-link to="/#" class="mr-4">Browse</router-link>
				<router-link to="/#" class="mr-4">Help</router-link>
				<button>Post a Job </button>
			</div>
		</div>
	</main>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
	background-color:#fff; 
	border-bottom:2px solid #ccc;
	box-shadow: 1px 1px 20px 1px #888888;
}
#header button{
	border-radius:5px;
	color:#0B0298;
	border:1px solid #6C63FF; 
	font-size: 16px;  
	padding:5px 30px;
}
#header button:hover{ 
	border:2px solid #6C63FF;
}
#header img {
	height:40px; 
}
#header i {
	color: #AEB6BE;
}
#header i:hover {
	color: #6C63FF;
}
#header a {
	color: #0B0298;
	font-size:16px;
}
#header a:hover {
	text-decoration:none;
	font-weight:bold;
}
</style>
