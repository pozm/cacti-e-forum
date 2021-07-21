export namespace userData {
    export enum Rank {
        User,
        Donator,
        Moderator,
        Admin,
        Sex,
    }
    export interface Reputation {
        Id:number,
        User:userData.User;
        UserId:number,
        Type:boolean;
        Amount:number;
        Message:string;
    }
    export interface User {
        Username :string;
        Password :string; // hashed only there for the sakes of being fully populated.
        Ips:string[]; // hashed
        CreatedAt:Date;
        LastLogin:Date;
        Avatar:string // url
        Id:number,
        Reputation:number;
        Rank:Rank;
        Bio:string
        Badge:number; // bitfield
    }
    export interface ExtraUser extends User {
        Posts:number
        LastOnline: Date;
        LastViewing :string;
        Bio : string,
        Gender? : string,
        DiscordTag? : string
    }
    export enum Badges {
        bang=0x01,
        oka=0x02,
        liker=0x4,
        liked=0x8
    }
}
