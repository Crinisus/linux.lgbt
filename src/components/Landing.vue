<template>
  <v-container>

    <v-card class="mx-auto my-9" max-width="800">
      <v-card-title class="text-h4 justify-center mb-3">Welcome to the Gay Zone</v-card-title>
      <v-card-text class="text-body-1">
    <v-img :src="require('../assets/TuxRainbow.png')" height="600" contain></v-img>
      </v-card-text>
      <v-card-text class="text-body-1">
        <v-btn href="https://www.linuxfoundation.org/" target="_black" block large light class="my-1 font-weight-black" color="red">L</v-btn>
        <v-btn href="https://github.com/torvalds/linux" target="_black" block large light class="my-1 font-weight-black" color="orange">G</v-btn>
        <v-btn href="https://bedrocklinux.org/" target="_black" block large light class="my-1 font-weight-black" color="yellow">B</v-btn>
        <v-btn href="https://en.wikipedia.org/wiki/Linus_Torvalds" target="_black" block large light class="my-1 font-weight-black" color="green">T</v-btn>
        <v-btn href="https://archlinux.org/" target="_black" block large light class="my-1 font-weight-black" color="blue darken-2">Q</v-btn>
        <v-btn href="https://developer.microsoft.com/en-us/windows/iot/" target="_black" block large light class="my-1 font-weight-black" color="purple">I</v-btn>
        <v-btn href="https://archlinuxarm.org/" target="_black" block large light class="my-1 font-weight-black" color="deep-purple darken-2">A</v-btn>
        <v-btn @click="iterCount" block large light class="my-1 font-weight-black" color="brown">
          <span v-if="count > 0">{{ count }}</span>
          +
        </v-btn>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
  export default {
    name: 'Landing',

    data: () => ({
      count: 0,
    }),
    methods: {
      iterCount() {
        this.count++
      }
    }
  }
</script>
