/**
 * Created by ghy on 16/6/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);
Vue.config.debug = true;

const state = {
  count: 0
}

export default new Vuex.Store({
	getters,
	actions,
	state,
	mutations
})