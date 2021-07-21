import vuex from 'vuex'

import { Module, VuexModule, Action, MutationAction } from 'vuex-module-decorators'
import Vue from 'vue'
// import { AxiosError } from 'axios'
import { $axios } from '~/utils/api'
import { userData } from '~/types'
export const user = () => ({})

Vue.use(vuex)

@Module({
    name: 'user',
    stateFactory: true,
    namespaced: true
})
export default class UserModule extends VuexModule {
    User: userData.User | { [x:string]:any } = {}
    LoggedIn = true

    @MutationAction
    async UpdateData () {
        const f = (await $axios.get('/api/user/Current'))
        console.log('data', f)
        // fetch user data and return it to update the class.
        return f.data
    }

    @Action
    async Get() {
        console.log(!this.User?.Id)
        if (!this.User?.Id)
            await this.UpdateData();
        else
            return this.User
    }

    // @Action
    // async UpdateSettings (Set:UserData.settings) {
    //     const Worked = await ($axios.post('/api/Account/Settings', {
    //         Theme: Set.Theme,
    //         Bio: Set.Bio
    //     }).catch((err : AxiosError) => (err.response!)))
    //
    //     const Updated = !Worked.data.error
    //
    //     if (!Updated) {
    //         return Worked.data
    //     }
    //     await this.UpdateData()
    //
    //     return Worked.data
    // }

    @Action
    async logout () {
        if (!this.LoggedIn) { return false }
        await $axios.delete('/api/Account/Session').catch(() => ({}))
        await this.UpdateData()
    }

    // @Action({ rawError: true })
    // async login (data : UserData.login) : Promise<API.Response> {
    //     const Worked = await ($axios.post('/api/Account/Login', {
    //         Email: data.Username,
    //         Username: data.Username,
    //         Password: data.Password,
    //         Recaptcha: data.Recaptcha
    //     }).catch((err : AxiosError) => (err.response!)))
    //     const LoggedIn = !Worked.data.error
    //
    //     // ok now we get the user
    //     if (!LoggedIn) { return Worked.data }
    //
    //     await this.UpdateData()
    //
    //     return Worked.data
    // }
    //
    // @Action({ rawError: true })
    // async singup (data : UserData.signup) : Promise<API.Response> {
    //     const Worked = await ($axios.post('/api/Account/Create', {
    //         Email: data.Email,
    //         UserName: data.Username,
    //         Key: data.Key,
    //         Password: data.Password,
    //         Recaptcha: data.Recaptcha
    //     }).catch((err : AxiosError) => (err.response!)))
    //     const LoggedIn = !Worked.data.error
    //
    //     // ok now we get the user
    //     if (!LoggedIn) { return Worked.data }
    //
    //     await this.UpdateData()
    //
    //     return Worked.data
    // }
}
