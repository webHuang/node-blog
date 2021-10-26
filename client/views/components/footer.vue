<template>
  <footer>
    <p @click="gotoLogin">Copyright ©{{ new Date().getFullYear() }} daniel</p>
  </footer>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'footer',
  methods: {
    gotoLogin() {
      this.$router.push('manage')
    },
  }
}
</script>

<style scoped>
footer {
  background: #333;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 18px;
}
</style>