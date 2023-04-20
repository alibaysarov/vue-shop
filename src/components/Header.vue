<script>
import Stack from './Stack.vue';
import Text from './Text.vue';
export default({
    name:'Header',
    components:{
        Stack,
        Text
    }
})
</script>

<style lang="sass">
.Header
    padding: 16px 35px 10px
    background-color: $white
    .liked
        position: relative
        cursor: pointer
        .num
            position: absolute
            top: -10px
            right: -10px
            background-color: $lightBlue
            padding: 3px 5px
            line-height: 1
            font-family: $text-Bold
            font-size: 11px
            color: $white
            border-radius:10px 
    .search
        display: flex
        align-items: stretch
        border:1px solid $grey
        border-radius: 4px
        padding: 8px 14px
        max-width: 514px
        &:active
            outline-width: 2px
            outline-color: $lightBlue
        &__btn
            background-color: transparent
            border:0px
        &__input
            border:0px
            outline: none
            left: 0px
            color: $txt
            font-size: 14px
            font-family: $text-Medium
    .tabRow
        margin-top: 30px
    .tab
        color: $lightBlue
        cursor: pointer
        position: relative
        +trns 
        &::after
            content: ''
            bottom: -4px
            left: 0px
            position: absolute
            width: 0%
            height: 2px
            background-color: $green
            +trns
        &.active:after
            width: 100%
        &:hover
            &::after
                width: 100%
        &:hover
            color:$green

</style>
<template >
    <div class="Header">
        <Stack dir="row" justifyContent="space-between" alignItems="center">
            <div class="search">
                <button class="search__btn">
                    <img src="/public/icons/Search.svg" width="24" height="24" alt="Поиск">
                </button>
                <input class="search__input" type="text" placeholder="Поиск">
            </div>
            <div class="profile">
                <Stack dir="row" justifyContent="space-between" alignItems="center" spacing="16px">
                    <div class="liked">
                        <div class="num">3</div>
                        <img src="/public/icons/Heart.svg" width="24" height="24" alt="Понравившиеся">
                    </div>
                    <div class="settings">
                        <img src="/public/icons/Settings.svg" width="40" height="40" alt="Понравившиеся">
                    </div>
                    <Text type="h4" color="text">Привет Елена</Text>
                </Stack>
            </div>
        </Stack>
        <Stack dir="row" spacing="45px" class="tabRow">
            <Text class="tab" type="span">Вторичная недвижимость</Text>
            <Text class="tab" type="span">Первичная недвижимость</Text>
            <Text class="tab" type="span">Арендная недвижимость</Text>
        </Stack>
    </div>
</template>