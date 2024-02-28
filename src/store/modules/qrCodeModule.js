import { ref } from "vue"


// I've defined the state of the qr code geneating module which includes th history of the qr codes (Link and qr code link) and also the limit to //which the qr codes can be generated per session
const state = {
    qrCodeLink: "",
    qrCodeHistory: [],
    userLinkHistory: [],
    qrCodeLimit: 10,
    buttonCount: 0,
    buttonDisabled: false
}


//Mutations are functions to change the state of the module
const mutations = {
    ADD_QR_CODE(state, { userLink, qrCodeLink }) {
        state.qrCodeHistory.push(qrCodeLink)
        state.userLinkHistory.push(userLink)
    },
    ADD_BUTTON_COUNT(state) {
        state.buttonCount++
    },
    UPDATE_CODE_LINK(state, userLink) {
        state.qrCodeLink = "https://www.qrtag.net/api/qr.png?url=" + userLink;
    },
    DISABLE_BUTTON(state) {
        state.buttonDisabled = true;
    }
}



//!userLink.startsWith("https:")
const isValidUrl = ref(true);
// Regex expression where only WWW is optional
const urlRegex = /^https?:\/\/(www\.)?([a-zA-Z0-9]+\.[a-zA-Z]{2,})(\/.*)?$/;
//Regex expression where both Https and WWW are optional
const urlRegex1 = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+\.[a-zA-Z]{2,})(\/.*)?$/;


//action functions, just like in REACT
const actions = {
    generateQRCode({ state, commit }, userLink) {
        isValidUrl.value = urlRegex.test(userLink)
        
        if(state.userLinkHistory.includes(userLink)){
            alert("User Input already used!");
        }
        else{
            if (state.buttonCount < state.qrCodeLimit) {
                if (userLink == "" || !isValidUrl.value) {
                    alert("Please enter a valid link!")
                }
                else {
                    commit("UPDATE_CODE_LINK", userLink)
                    commit('ADD_QR_CODE', { userLink, qrCodeLink: state.qrCodeLink })
                    commit("ADD_BUTTON_COUNT")
                }
            }
            else {
                alert("Maximum Limit reached")
                commit("DISABLE_BUTTON");
            }

        }
        
    }

}


export default {
    state,
    mutations,
    actions,
}