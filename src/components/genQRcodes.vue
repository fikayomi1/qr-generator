<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();


const userLink = ref("");
//computed helps to watch the state's value and helps to update it
const buttonCount = computed(() => store.state.qrCodes.buttonCount);
const qrCodeLink = computed(() => store.state.qrCodes.qrCodeLink);
const buttonDisabled = computed(() => store.state.qrCodes.buttonDisabled);



//Handles the button Click
const handleButtonClick = () => { 
  store.dispatch("generateQRCode", userLink.value)
  console.log(buttonCount.value)
}

</script>

<template>

  <div id="app">
    <div id = "input-container">
      <span><img src = "../assets/qr.png" width = "20px" height = "20px"><h1 id="heading">QR CODE Generator</h1></span>
      <input placeholder="https://www.example.com" type="text" v-model="userLink" /> <br/>
      <button id = "input-button" :disabled = "buttonDisabled" @click="handleButtonClick">Generate QR Code</button>
    </div>
      
    <div id = "scan-container">
        <img v-if = "buttonCount > 0" :src="qrCodeLink" alt="" width="180px" height="180px" id ="Image">
        <p id = "scan-head">Scan QR Code</p>
        <p id = "scan-text">You can use your phone camera to scan this code to access your link</p>
        <button id = "routeButton"><router-link to="/history" id = "routLink">QR Code History</router-link></button>
        
    </div>
    
  </div>

</template>

<style scoped>
#app{
  font-family: "Outfit", sans-serif; 
  display: flex;
  height: 100vh;
}
#input-container, #scan-container{
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: slideUp 1s ease forwards;
}
#input-container{
  background-color: #f0f9ff;
}
#scan-container{
  background-color: #fff;
}
#heading{
  color: #000000;
  margin: 30px 15px;
  font-size: 24px;
  font-weight: bolder;
  display: inline-block;
}
#input-button:disabled {
  background-color: #ccc;
  color: #888; 
  cursor: not-allowed;
}
input{
  
  color: #373b43;
  width: 300px;
  padding: 10px 10px;
  font-size: 14px;
  font-style: italic;
  border-radius: 5px;
  outline: none;
  border: none;

}
input::placeholder{
  font-style: italic;
}
#Image{
  margin-bottom: 20px;
}
button{
  color: #1b1c1e;
  background-color: #b9e5fe;
  padding: 10px 28px;
  font-weight: bold;
  border-radius: 30px;
  font-size: 14px;
  outline: none;
  border: none;
  margin: 25px 0px;
  cursor: pointer;
}

#routLink{
  color: black;
  text-decoration: none;
}
#scan-head{
  margin-bottom: 12px;
}

@keyframes slideUp {
  from {
    top: 100px; /* Start position */
  }
  to {
    top: 0; /* End position */
  }
}

@media (max-width: 600px) {
  #app{
    flex-direction: column; 

  }
  #input-container, #scan-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f9ff;
    height: 100vh;
    max-height: fit-content;
    width: 100%;
    
  }
  input{
    margin-top: 15px;
  }
  #scan-container{
    text-align: center;
  }
}

</style>







