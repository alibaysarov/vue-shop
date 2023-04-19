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
        fontSize:{
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
    },
    computed:{
        classObj(){
            return{
                text:this.type.includes('h')!=true,
                secondary:this.color=='secondary',
                white:this.color=='white',
                voilet:this.color=='voilet',
                primary:this.color=='primary',
                regular:this.weight=='regular',
                medium:this.weight=='medium',
                bold:this.weight=='bold'
            }
        }
    }
})
</script>

<style lang="sass">
.text
    display: block
    font-size: 14px
.primary
    color: $txt
.white
    color:$white
.violet
    color: $violet
.secondary
    color: $grey
.regular
    font-family: $text-Regular
.medium
    font-family: $text-Medium
.bold
    font-family: $text-Bold
strong,b
    font-family: $text-Bold
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
h5
    font-size: 16px
</style>

<template>
    <component :is="this.type" :class="classObj" style="{{this.styles}}">
    <slot/>
    </component>
   
</template>