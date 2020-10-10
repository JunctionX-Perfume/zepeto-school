<template>
    <v-card elevation="2" outlined shaped>
        <v-text class="card" v-html="html"></v-text>
    </v-card>
</template>

<script>
export default {
  name: 'Posting',
  props: {
    html: String
  },
  mounted () {
    const img = this.img
    console.log(img)
  }
}
</script>

<style lang="postcss" scoped>
.card {
    border-radius: 16px;
}
</style>
