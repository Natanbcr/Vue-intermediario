<template>
	<v-app>
      <Menu></Menu>

		<Toolbar></Toolbar>
		
		<v-content>
			<Carousel></Carousel>
		</v-content>

		<Footer></Footer>
	</v-app>
</template>

<script>
import Footer from '@/components/template/Footer.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'

export default {
	components: {Footer, Carousel, Toolbar, Menu }	
}
</script>
