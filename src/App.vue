<script>
import Lib from './components/Lib.vue';
import Text from './components/Text.vue';
import NavMenu from './components/NavMenu.vue';
export default({
  components:{
  Lib,
  Text,
  NavMenu
  }
})

</script>
<style lang="sass">
.wrapper
  display: flex

.container
  width: 100%
  
  max-width: 1640px
  margin: 0 auto
  
</style>
<template>
  <div class="wrapper">
    <NavMenu/>
 <div class="container">
  <Text type="h2" color="primary">Пакеты</Text>
 </div>


  </div>
 
</template>


