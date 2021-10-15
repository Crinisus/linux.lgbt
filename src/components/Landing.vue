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
        <v-btn href="https://ubuntu.com/download/iot" target="_black" block large light class="my-1 font-weight-black" color="purple">I</v-btn>
        <v-btn href="https://archlinuxarm.org/" target="_black" block large light class="my-1 font-weight-black" color="deep-purple darken-2">A</v-btn>
        <v-btn @click="iterCount" block large light class="my-1 font-weight-black" color="brown">
          <span v-if="count > 0">{{ count }}</span>
          +
        </v-btn>
        <v-btn @click="generateUserAgent" block large light class="my-1 font-weight-black" color="brown">Arch</v-btn>
      </v-card-text>
    </v-card>


  
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
        {{ link }}
      </v-btn>
    </v-row>
  </v-footer>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="justify-center">
          :)
        </v-card-title>
        <v-card-text>
          Your User Agent: {{ this.$Platform.userAgent }}
        </v-card-text>
        <v-card-text>
          Reported OS: {{ getOSInfo() }}
          </v-card-text>
      </v-card>
    </v-dialog>
  </div>
  

</v-container>
  
</template>


<script>
  export default {
    name: 'Landing',

    data: () => ({
      count: 0,
      return: {
        dialog: false,
      },
      links: [
        'Your User Agent',
      ],
    }),
    methods: {
      iterCount() {
        this.count++
      },
      systemArch() {
        console.log(this.$Platform.architecture);
      },
      getOSInfo() {
        let wVersions = {
          "10.0": "Windows 10 or 11"
        }
        let arch = ` (${this.$Platform.architecture})`
        switch (this.$Platform.osPlatform) {
          case 'windows':
            return wVersions[this.$Platform.getOSVersion()] + arch;
        }
      }
    },
  }
</script>
