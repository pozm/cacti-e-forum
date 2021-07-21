import { userData } from '~/types'

export namespace forumData {
    export interface Reply {
        Id:number
        AuthorId:number;
        Author:userData.User;
        Thread:forumData.Thread;
        ThreadId:number
        Likes:number;
        Dislikes:number;
        QuoteId?:number | undefined; // reply id which the user is quoting
        Quote?:forumData.Reply;
        Quotes:forumData.Reply[]
        Content:string;
        TimeMade:Date
    }
    export interface Thread {
        Name: string;
        Id:number
        AuthorId:number;
        Author: userData.User;
        Reply:forumData.Reply
        ReplyId:number; // the main reply
    }
}
