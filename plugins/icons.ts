import Vue from 'vue'
// @ts-ignore
import ico from 'oh-vue-icons'

import { IoHome, BiPinAngleFill, MdEmail, FaUser } from 'oh-vue-icons/icons';
ico.add(IoHome, BiPinAngleFill, MdEmail, FaUser)

export default () => {
    // eslint-disable-next-line
    Vue.component('v-icon', ico)
}
