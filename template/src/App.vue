<template>
  <div id="app">
    <hello></hello>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    Value: {{ count }}
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
  computed: mapGetters([
    'count',
  ]),
  methods: mapActions([
    'increment',
    'decrement',
  ])
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
