<script>
    import ListItem from './ListItem.vue'
    import Text from './Text.vue'
    export default {
        name:'List',
        components:{
            ListItem,
            Text
        },
        props:{
            title:{
                type:String,
                default:''
            },
            list:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style lang="sass">

</style>
<template>
    <div class="listContent">
      <Text type="p" color="white" weight="bold" style="text-transform: uppercase;">{{title}}</Text>
    <ul class="list">
        <ListItem v-bind="item" :key="id+1" v-for="(item,id) in list"/>
    </ul>
    </div>
</template>