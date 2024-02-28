<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// Computed property to retrieve QR code history from Vuex store
const qrCodeHistory = computed(() => store.state.qrCodes.qrCodeHistory);
const userLinkHistory = computed(() => store.state.qrCodes.userLinkHistory)
</script>
  


<template>
  <div id="app">
    <div>
      <h1>QR Code History</h1>
    </div>
    <div id="list">
      <div v-for="(userLink, index) in userLinkHistory" :key="index">

        <img :src="qrCodeHistory[index]" width="180px" height="180px">
        <br />
        <a :href = "userLink" >{{ userLink }}</a>

      </div>
    </div>
    <div id="buttonDiv">
      <button id="routeButton"><router-link to="/" id="routeLink">QR Code Generator</router-link></button>
    </div>
  </div>
</template>
  
  
<style scoped>
#app {
  font-family: "Outfit", sans-serif;
  height: auto;
  min-height: 100vh;
  background-color: #f0f9ff;
  padding: 40px 0;

}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

#list {

  display: grid;
  place-items: center;

}

#list li {
  display: grid;
  place-items: center;

}

#routeLink {
  color: black;
  text-decoration: none;
}

#routeButton {

  color: #1b1c1e;
  background-color: #b9e5fe;
  padding: 13px 28px;
  font-weight: bold;
  border-radius: 30px;
  font-size: 14px;
  outline: none;
  border: none;
  margin: 25px 0px;
  cursor: pointer;
}

#buttonDiv {
  display: grid;
  place-items: center;
  margin-top: 40px;
}

p {
  text-decoration: underline;
}
</style>
  