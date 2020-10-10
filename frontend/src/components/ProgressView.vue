<template>
  <div>
    <h2>Progress</h2>
    <v-progress-linear
      v-for="(progress, idx) in progresses"
      :key="idx"
      :value="progress.value"
      height="20"
      color="#88DEC9"
      rounded
    >
      <strong> {{ Math.ceil(progress.value) }} %</strong>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: 'ProgressView',
  components: {
  },
  props: {
    progresses: Array
  },
  mounted () {
    console.log(this.progresses)
  }
}
</script>
