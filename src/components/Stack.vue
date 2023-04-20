<script>
export default({
    name:"Stack",
    props:{
        dir:{
            type:String,
            default:'row'
        },
        spacing:{
            type:String,
            default:'0px'
        },
        alignItems:{
            type:String,
            default:'start'
        },
        justifyContent:{
            type:String,
            default:'start'
        },
        wrap:{
            type:String,
            default:'noWrap'
        }
    },
    data(){
        return{
            styles:{
                gap:this.spacing
            }
        }
    },
    computed:{
        classObj(){
            return{
                row:this.dir=='row',
                column:this.dir=='column',
                noWrap:this.wrap=='noWrap',
                wrap:this.wrap=='wrap',
                aic:this.alignItems=='center',
                ais:this.alignItems=='start',
                aie:this.alignItems=='end',
                jcc:this.justifyContent=='center',
                jcs:this.justifyContent=='start',
                jcsb:this.justifyContent=='space-between',
                jce:this.justifyContent=='end',
            }
        }
    }
})

</script>

<style lang="sass">
.Stack
    display: flex
.row
    flex-direction: row
.column
    flex-direction: column
.wrap
    flex-wrap: wrap
.noWrap
    flex-wrap: nowrap
.aic
    align-items: center
.ais
    align-items: start
.aie
    align-items: flex-end
.jcs
    justify-content: start
.jcc
    justify-content: center
.jce
    justify-content: flex-end
.jcsb
    justify-content: space-between
.jcsa
    justify-content: space-around
</style>
<template>
    <div :class="['Stack',this.classObj]" :style="styles">
        <slot/>
    </div>
</template>