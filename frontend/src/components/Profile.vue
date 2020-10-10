<template>
  <v-row justify="space-around">

    <v-row class="text-center" align-content="center">
      <v-avatar size="110" class="mx-auto">
        <img
          :src="url"
          :alt="name"
        >
      </v-avatar>
    </v-row>

    <h2>{{ name }}</h2>
    <p>{{ msg }}</p>
  </v-row>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    name: String,
    hash: String,
    pose: String,
    msg: String,
    url: String
  },
  mounted () {
    console.log(name)
  }
}
</script>

<style scoped>
.img {
  display: block;
}
</style>
