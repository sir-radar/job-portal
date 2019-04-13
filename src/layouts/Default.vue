<template>
	<main id="default-layout">
		<default-header/>
		<router-view />
		<default-footer />
	</main>
</template>

<script>
import DefaultFooter from "@/components/Footer.vue"
import DefaultHeader from "@/components/Header.vue"

export default {
  name: "default-layout",
  components: { DefaultFooter, DefaultHeader }
}
</script>

<style scoped>
#default-layout {
	width: 100%;
	min-height: auto;
}
</style>

