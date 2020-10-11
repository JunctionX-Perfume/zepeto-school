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
  background: #c8e7ff;
  width: 20%;
  height: 20px;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0.3px 0.3px 0.3px rgb(214, 214, 214);
  margin-bottom: 0px;
}

.btn span {
  font-size: 8px;
}

.btn:hover {
}

a{
  text-decoration: none;
  color: black;
}

.btn:active {
  background: #c8e7ff;
}
</style>
