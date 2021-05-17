export namespace userData {
    export interface User {
        Username :string;
        Password :string; // hashed.
        Ips:string[];
        CreatedAt:Date;
        LastLogin:Date;
    }
}
