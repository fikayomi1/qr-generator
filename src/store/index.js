import {createStore} from "vuex";
import qrCodeModule from "./modules/qrCodeModule.js"
const store = createStore({
    modules:{
        qrCodes : qrCodeModule
    }
})

export default store;