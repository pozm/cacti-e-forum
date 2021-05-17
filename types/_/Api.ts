export namespace API {
    export interface Response<T={[x:string]:any}> {
        Ok:boolean,
        Body:T,
        Error:number
    }
}
