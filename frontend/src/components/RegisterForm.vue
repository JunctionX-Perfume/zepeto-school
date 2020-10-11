<template>
  <v-sheet elevation="90" class="d-flex">
    <v-card flat width="420" class="login-card px-4">
      <v-card-title primary-title>
        <h4>Register</h4>
      </v-card-title>
      <v-form>
        <v-text-field v-model="name" name="Name" label="Name"></v-text-field>
        <v-text-field v-model="email" name="Email" label="Email"></v-text-field>
        <v-text-field v-model="hash" name="Hash" label="Hash"></v-text-field>
        <v-text-field v-model="password" name="Password" label="Password" type="password"></v-text-field>
        <v-card-actions class="card-actions d-flex justify-space-around">
          <v-btn @click="register">Register</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: 'RegisterForm',
  data: () => ({
    name: '',
    email: '',
    hash: '',
    password: ''
  }),
  methods: {
    register () {
      console.log(this.email)
      console.log(this.password)
      this.$http.post('http://172.17.10.137:3000/api/register', {
        email: this.email,
        password: this.password,
        name: this.name,
        hash: this.hash
      })
        .then(res => {
          if (res.status === 200) {
            alert(res.data.message)
            console.log('success!')
            this.$router.push('/login')
          } else {
            console.log('failed!')
            alert(res.data.message)
            this.password = ''
          }
        })
    }
  }
}
</script>

<style scoped>
.card-actions {
  justify-content: flex-end;
}

.card-actions > button {
  margin-left: 12px;
}

.login-card {
  margin: auto;
  padding: 12px;
}
</style>
