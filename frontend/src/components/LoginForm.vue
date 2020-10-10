<template>
  <v-sheet elevation="90" d-flex width="420" class="mx-auto">
    <v-card flat class="ma-4 px-4">
      <v-card-title primary-title>
        <h4>Login</h4>
      </v-card-title>
      <v-form>
        <v-text-field name="Username" label="Username"></v-text-field>
        <v-text-field name="Password" label="Password" type="password"></v-text-field>
        <v-card-actions class="d-inline-flex flex-nowrap">
          <v-btn primary block>Register</v-btn>
          <v-btn @click="login" primary block>Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: 'LoginForm',
  methods: {
    login () {
      this.$router.push('/mypage')
    }
  }
}
</script>
