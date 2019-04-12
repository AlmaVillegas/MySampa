<template>
	<div class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(product,index) in products" :key="index"> 
					<div v-if="proId == product.productId">
						<h1>{{product.productTitle}}</h1>
						<img :src="product.image" class="img-fluid">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
				products:[
				{
				productTitle:"Mazatlan",
				image       : require('../assets/images/maz.jpg'),
				productId:1
				},
				{
				productTitle:"XV",
				image       : require('../assets/images/xv.jpg'),
				productId:2
				},
				{
				productTitle:"Posada",
				image       : require('../assets/images/dic1.jpg'),
				productId:3
				},
				{
				productTitle:"Navidad",
				image       : require('../assets/images/nav.jpg'),
				productId:4
				},
				{
				productTitle:"Hidalgo(Vacaciones)",
				image       : require('../assets/images/hid.jpg'),
				productId:5
				},
				{
				productTitle:"Tequila",
				image       : require('../assets/images/teq.jpg'),
				productId:6
				}
				]
				 
			}
		}
		
	}
</script>