<template>
  <div class="btn" :href="path">
    <span>
      <a :href="path">
        {{ name }}
      </a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NavBtn',
  props: {
    name: String,
    path: String
  },
  mounted () {
    console.log(this.name)
    console.log(this.path)
  }
}
</script>

<style scoped>
.btn {
  background: #C8E7FF;
  width: 120px;
  height: 20px;
}

.btn span {
  font-size: 8px;
}

.btn:hover {
}

.btn:active {
  background: #C8E7FF;
}
</style>
