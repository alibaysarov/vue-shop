<script>
export default({
    props:{
        arrow:{
            type:Boolean,
            default:false
        },
        variant:{
            type:String,
            default:'fill'
        },
        size:{
            type:String,
            default:'medium'
        },
    },
    computed:{
        classObj(){
            return {
                btn:'btn',
                fill:this.variant=='fill',
                stroke:this.variant=='stroke',
                small:this.size=='small',
                medium:this.size=='medium',
                large:this.size=='large',

            }
        }
    }
})
</script>
<style lang="sass">
.btn
    font-family: $text-Bold
    outline: none
    border:0px
    padding: 6px 16px
    font-size: 14px
    border-radius: 5px
    cursor: pointer
    transition: all .15s ease
    line-height: 1.7
    
    .arrow
        transition: all .25s ease
        position: relative
        top: 50%
        transform: translateY(13%)
    &:hover
        .arrow
            transform: translateY(13%) translateX(4px)
    &:active
        transform: scale(0.95)
    
.fill
    color: $white
    background-color: $lightBlue
    &:hover
        opacity: 0.95
    .arrow
        path
            stroke: white
.stroke
    color: $lightBlue
    border:1px solid $lightBlue
        background-color: transparent
    .arrow
        path
            stroke:$lightBlue
.medium
    padding: 6px 24px
</style>

<template >
    <button :class="classObj">
        <slot/>
        <svg v-if="this.arrow=='true'" width="16" height="16" class="arrow" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33301 9H12.6663"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 4.33398L12.6667 9.00065L8 13.6673"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</template>