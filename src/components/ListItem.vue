<script>
import Text from './Text.vue'
export default({
    name:'ListItem',
    components:{
        Text
    },
    props:{
        text:{
            type:String,
            default:''
        },
        icon:{
            type:String,
            default:'' 
        },
        smallNum:{
            type:String,
            default:'' 
        },
        bigNum:{
            type:String,
            default:'' 
        },
        multiple:{
            type:Array,
            default:[]
        }
    },
    computed:{
        showSmNum(){
            return this.smallNum.length==0?false:true
        },
        showBigNum(){
            return this.bigNum.length==0?false:true
        },
        showMult(){
            return this.multiple.length==0?false:true
        }
    }
})
</script>
<style lang="sass">
.listItem
    display: flex
    align-items: center
    padding: 12px 8px 12px 0px
    cursor: pointer
    transition: all .15s ease
    &__arrow
        display: flex
        flex-grow: 1
        justify-content: flex-end
    &__bigNum
        display: flex
        flex-grow: 1
        justify-content: flex-end
        .bigNum__circle
            border-radius: 50%
            background-color: $white
            padding: 5px 6px
            width: 20px
            height: 20px
            display: flex
            align-items: center
            justify-content: center
    &__number
        margin-left: 10px
        background-color: #2E2571
        border-radius: 62px
        padding: 4px 9px
    &:hover
        background-color: rgba(255, 255, 255, 0.1)
    &:last-of-type
        margin-bottom: 0px
    &__icon
        margin-right: 16px
</style>

<template>
<li :class="['listItem',showBigNum&&'spb']">
    <img :src="icon" width="24" height="24" alt="" class="listItem__icon">
    <Text type="span" color="white" weight="regular" fontSize="14px">{{text}}</Text>
    <div class="listItem__number" v-if="showSmNum">
        <Text  type="span" color="white" weight="bold">{{smallNum}}</Text>
    </div>
    <div class="listItem__bigNum" v-if="showBigNum">
        <div class="bigNum__circle">
            <Text  type="span" color="violet" weight="bold">{{bigNum}}</Text>
        </div>
    </div>
    <div class="listItem__arrow" v-if="showMult">
        <img src="/public/icons/chevron_right.svg" width="16" height="16" alt="Больше">
    </div>
</li>
</template>