<template>
  <div id="app">
    <NavBar/>
    <Home/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    NavBar,
    Home
  }
}
</script>
<style>
</style>
