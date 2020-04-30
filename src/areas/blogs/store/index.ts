import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import { IRootState } from '@/store';

import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { IBlogsState, state } from './state';

Vue.use(Vuex);

const namespaced: boolean = true;

export const store: Module<IBlogsState, IRootState> = {
    actions,
    getters,
    modules: {},
    mutations,
    namespaced,
    state
};

export default store;
