import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vuetextareaAutoSize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(vuetextareaAutoSize);
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAL9NPXq24SCNyc2lOKlnc-Ai6Eb1nMV9o",
  authDomain: "vue-calendar-f44a5.firebaseapp.com",
  databaseURL: "https://vue-calendar-f44a5.firebaseio.com",
  projectId: "vue-calendar-f44a5",
  storageBucket: "vue-calendar-f44a5.appspot.com",
  messagingSenderId: "968716465285",
  appId: "1:968716465285:web:95015ef2e8f65c76b7a5ec"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
