import { userData } from '~/types'

export namespace Badge {
    export function has (n:number) {
        const arr = []
        for (const [idx] of Object.entries(userData.Badges)) {
            if (+idx & n)
                arr.push(+idx)
        }
        return arr
    }
}
