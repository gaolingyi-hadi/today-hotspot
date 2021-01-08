import Vue from 'vue'
import Vuex from 'vuex'

// import sotspot from 'src\assets\data.json'
import sotspot from '@/assets/data.json';

Vue.use(Vuex)
export default new Vuex.Store({
    state: { sotspot: sotspot.data },
    mutations: {},
    actions: {},
    // modules: {}
})