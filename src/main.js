import {createApp} from 'vue'
import  vAxios  from  'v-axios' ; 
import App from './App.vue'
import router from './routes'; //설정 라우터 호출

const app = createApp(App)
app.use(router)
app.use(vAxios)
app.mount('#app')
