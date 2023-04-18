<script>
export default({
    props:{
        type:{
            type:String,
            default:'p'
        },
        weight:{
            type:String,
            default:'regular'
        },
        color:{
            type:String,
            default:'#212B36'
        },
        color:{
            type:String,
            default:'14px'
        },
        mx:{
            type:String,
            default:''
        },
        my:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            styles:{
                color:this.color,
                fontSize:this.size,
                marginLeft:this.mx,
                marginRight:this.mx,
                marginTop:this.my,
                marginBottom:this.my
            }
        }
    }
})
</script>

<style lang="sass">
.text
    display: block
    font-size: 14px
    color: $txt
    
.regular
    font-family: $text-Regular
.medium
    font-family: $text-Medium
strong,b
    font-family: $text-Bold
</style>

<template>
    <component :is="this.type" :class="['text',this.weight]" style="{{this.styles}}">
    <slot/>
    </component>
   
</template>