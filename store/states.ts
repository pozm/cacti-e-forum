import vuex from 'vuex'

import { Module, VuexModule } from 'vuex-module-decorators'
import Vue from 'vue'
// import { AxiosError } from 'axios'
import { StateData } from '~/types'
export const user = () => ({})

Vue.use(vuex)

@Module({
    name: 'State',
    stateFactory: true,
    namespaced: true
})
export default class StateModule extends VuexModule implements StateData.State {
    ThreadName :string = 'The quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dogThe quick brown fox jumps over the lazy dog ';
}
