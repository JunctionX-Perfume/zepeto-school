<template>
  <v-container>

      <iframe id="css-filter-blur" width="980" height="528" src="https://www.youtube.com/embed/0mEmmuhzx_s?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <svg id="svg-image-blur">
        <filter id="blur-effect-1">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </svg>

      <LoginForm />

  </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style>
#css-filter-blur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: url(#blur-effect-1);
}
</style>
