<script>
import Title  from './Title/index.vue';
import Text from './Text.vue';
import Button from './Button.vue';
export default({
    components:{
    Title,
    Text,
    Button,
    }
})

</script>

<template>
<Title type="h1">
Lorem, ipsum dolor.
</Title>
<Title type="h2">
Lorem, ipsum dolor.
</Title>
 <Text type="span" my="10px">
  Lorem ipsum dolor sit amet.
 </Text>
 <Text size="16px" type="strong">
    this is strong text 
 </Text>
 <div style="display: flex; align-items: center; gap: 10px;">
        <Button>press me</Button>
        <Button variant="stroke">press me</Button>
 </div>
</template>