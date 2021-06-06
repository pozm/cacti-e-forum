export namespace userData {
    export interface Rank {
        RankId :number;
        RankName:string;
        RankPermissions:number; // bitfield
    }
    export interface User {
        Username :string;
        Password :string; // hashed only there for the sakes of being fully populated.
        Ips:string[]; // hashed
        CreatedAt:Date;
        LastLogin:Date;
        Avatar:string // url
        RankId:number,
        Reputation:number;
        Rank:Rank;
        Badge:number; // bitfield
    }
    export enum Badges {
        GAMER=0x01,
        oka=0x02
    }
}
