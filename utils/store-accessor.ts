import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import user from '~/store/user'
import state from '~/store/states'

let userStore: user
let stateStore: state

function initialiseStores (store: Store<any>): void {
    userStore = getModule(user, store)
    stateStore = getModule(state, store)
}

export { initialiseStores, userStore, stateStore }
