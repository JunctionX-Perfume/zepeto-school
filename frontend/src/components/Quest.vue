<template>
<div class="quest">{{ content }}</div>
</template>

<script>
export default {
  name: 'Quest',
  props: {
    content: String
  }
}
</script>

<style scoped>
.quest{
  box-sizing: border-box;
  box-shadow: 0.5px 0.5px 0.5px rgb(131, 131, 131);
  border-radius: 3px;
  background-color:white;
  margin: 5px;
  padding: 5px;
  font-size: 0.8em;
  height: 2.5em;
}
</style>
