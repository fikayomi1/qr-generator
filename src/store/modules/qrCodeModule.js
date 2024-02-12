
// I've defined the state of the qr code geneating module which includes th history of the qr codes (Link and qr code link) and also the limit to //which the qr codes can be generated per session
const state = {
    qrCodeLink : "",
    qrCodeHistory: [],
    qrCodeLimit: 10,
    buttonCount: 0,
    buttonDisabled : false
}


//Mutations are functions to change the state of the module
const mutations = {
    ADD_QR_CODE(state, {userLink, qrCodeLink}) {
        
        state.qrCodeHistory.push({userLink, qrCodeLink})
    },
    ADD_BUTTON_COUNT(state){
        state.buttonCount++
    },
    UPDATE_CODE_LINK(state, userLink){
        state.qrCodeLink = "https://www.qrtag.net/api/qr.png?url=" + userLink;
    },
    DISABLE_BUTTON(state){
        state.buttonDisabled =  true;
    }
}

//action functions, just like in REACT
const actions = {
    generateQRCode({ state, commit }, userLink) {

        if (state.buttonCount < state.qrCodeLimit) {
            if (userLink == "" || !userLink.startsWith("https:")) {
                alert("Please enter a valid link!")
            }
            
            else {
                commit("UPDATE_CODE_LINK", userLink)
                commit ('ADD_QR_CODE', {userLink, qrCodeLink: state.qrCodeLink})
                console.log(state.qrCodeHistory);
                commit("ADD_BUTTON_COUNT")
            }    
        }
        
        else {
            alert("Maximum Limit reached")
            commit("DISABLE_BUTTON");

        }


    }
}

export default {
    state,
    mutations,
    actions,
}