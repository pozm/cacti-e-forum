// declaration.d.ts

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $mq: 'sm' | 'md' | 'lg' // Or keyof BreakpointRecord
    }
}
