<script>
import List from './List.vue'
const data1=[
  {
    text:'Баланс:',
    icon:'/public/icons/Ruble.svg',
    smallNum:'1000'
  },
  {
    text:'Корзина',
    icon:'/public/icons/Cart.svg',
    bigNum:'3'
  },
  {
    text:'Мои объекты',
    icon:'/public/icons/Location.svg'
  },
  {
    text:'Заказы в процессе',
    icon:'/public/icons/Gear.svg'
  },
  {
    text:'Исполненные заказы',
    icon:'/public/icons/Iconex.svg'
  },
]
const data2=[
  {
    text:'Пакеты:',
    icon:'/public/icons/Fire.svg',
    multiple:[1]

  },
  {
    text:'Фото',
    icon:'/public/icons/CameraSm.svg',
    multiple:[1]
  },
  {
    text:'Видео',
    icon:'/public/icons/Video.svg',
    multiple:[1]
  },
  {
    text:'Видео в аренду',
    icon:'/public/icons/Tape.svg',
    multiple:[1]
  },
  {
    text:'Стейджинг',
    icon:'/public/icons/Flower.svg',
    multiple:[1]
  },
  {
    text:'Дроны',
    icon:'/public/icons/Drone.svg',
    multiple:[1]
  },
  {
    text:'Планы',
    icon:'/public/icons/Plan.svg',
    multiple:[1]
  },
  {
    text:'Туры',
    icon:'/public/icons/Panorama.svg',
    multiple:[1]
  },
  {
    text:'Постпродакшн',
    icon:'/public/icons/Magic.svg',
    multiple:[1]
  },
  {
    text:'Контент',
    icon:'/public/icons/Start.svg',
    multiple:[1]
  },
  {
    text:'Визуализация',
    icon:'/public/icons/Visual.svg',
    multiple:[1]
  },
  {
    text:'Евент',
    icon:'/public/icons/Event.svg',
    multiple:[1]
  },
  {
    text:'Дистрибуция',
    icon:'/public/icons/Volume.svg',
    multiple:[1]
  },
]
export default({
    name:'NavMenu',
    components:{
      List
    },
    data(){
      return{
        data1,
        data2,
      }
    }
})

</script>
<style lang="sass">
.navMenu
  background-color: $violet
  width: 100%
  min-width: 280px
  max-width: 280px
  height: 100%
  min-height: 1200px
  padding: 16px
  overflow: auto
  .logo
    padding-top: 12px
    padding-bottom: 22px
    border-bottom: 1px solid $grey
.listContent
  padding: 24px 8px 12px
.list
  margin-top: 8px
</style>
<template>

<div class="navMenu">
    <div class="logo">
        <img src="/public/images/Logo.svg" width="152" height="36" alt="Логотип">
    </div>
  <div class="cnt">
    <List title="заказы" :list="data1"/>
    <List title="услуги" :list="data2"/>
    
  </div>
 </div>

</template>
