<script>
export default({
    props:{
        type:{
            type:String,
            default:'h1'
        },
        color:{
            type:String,
            default:'#212b36'
        }
    },
    data(){
        return{
            styles:{
                color:this.color
            }
        }
    }
})
</script>
<style lang="sass">
.title
    font-family: "Onest",sans-serif
    line-height: 1.3
    color: $txt
h1
    font-size: 48px
h2
    font-size: 36px
h3
    font-size: 24px
h4
    font-size: 18px

</style>
<template>
    <component :is="this.type" :class="'title'" :style="styles">
        <slot/>
    </component>
</template>