import vuex from 'vuex'

import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import Vue from 'vue'
// import { AxiosError } from 'axios'
import { StateData } from '~/types'
export const user = () => ({})

Vue.use(vuex)

@Module({
    name: 'states',
    stateFactory: true,
    namespaced: true
})
export default class StateModule extends VuexModule implements StateData.State {
    ThreadName :string = 'The quick brown fox jumps over the lazy doggs ovdog ';

    @Mutation
    UpdateThread(Thread : string) {
        this.ThreadName = Thread
    }
}
