<script>
import Lib from './components/Lib.vue';
import Text from './components/Text.vue';
import NavMenu from './components/NavMenu.vue';
import Header from './components/Header.vue';
export default({
  components:{
  Lib,
  Text,
  NavMenu,
  Header
  }
})

</script>
<style lang="sass">
.wrapper
 display: grid
 grid-template-columns: minmax(auto,25%) 1fr
.container
  width: 100%
  // max-width: 1330px

  
</style>
<template>
  
<NavMenu/>
 <div class="container">
    <Header/>
 </div>

 
</template>


