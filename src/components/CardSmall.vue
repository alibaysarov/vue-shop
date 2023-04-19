<script>
import Text from './Text.vue';

export default({
    
    name: "CardSmall",
    components:{
        Text
    },
    props: {
        title:{
            type:String,
            default:'Title'
        },
        text:{
            type:String,
            default:''
        },
        img:{
            type:String,
            default:''
        },
        layout: {
            type: String,
            default: "vertical"
        }
    },
    computed: {
        classObj() {
            return {
                card: "card",
                vertical: this.layout == "vertical",
                horizontal: this.layout == "horizontal",
            };
        }
    },
    components: { Text }
})
</script>
<style lang="sass">
.card
    background-color: $white
    border-radius: 10px
    padding: 26px 20px
.horizontal
    width: 100%
    max-width: 244px
    display: flex
    align-items: center
    gap:10px
    

.vertical
    width: 100%
    max-width: 244px
    display: flex
    flex-direction: column
    align-items: center
    gap:10px
.horizontal
    .textContent
        display: flex
        flex-direction: column
        gap:10px
.vertical
    .textContent
        display: flex
        flex-direction: column
        align-items: center         
</style>
<template >
    <div :class="classObj">
        <img :src="img" width="64" height="64" alt="">
        <div class="textContent">
            <Text type="h4">{{ title }}</Text>
            <Text v-if="this.text.length" type="span" color="secondary">{{ text }}</Text>
        </div>
    </div>
</template>