<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
        <img :src="data.image" class="img-fluid">
         <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
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
  },
  methods:{
  goTodetail(prodId) {
    let proId=prodId
    this.$router.push({name:'details',params:{Pid:proId}})
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 100%;

}
.row h3{
  cursor:pointer;
}
</style>
