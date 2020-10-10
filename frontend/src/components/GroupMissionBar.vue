<template>
  <v-sheet elevation="3">
    <v-row>
      <v-checkbox
        v-for="(mission, idx) in missions"
        :key="idx"
        :value="mission.title"
        :label="mission.name + mission.progress"
        color="error"
        value="error"
        hide-details
      ></v-checkbox>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'GroupMissionBar',
  props: {
    missions: Array
  },
  mounted () {
    console.log('missions', this.missions)
  }
}
</script>
