import { userData } from '~/types'

export namespace forumData {
    export interface Reply {
        ReplyId:number
        AuthorId:number;
        Author:userData.User;
        ThreadId:number
        Likes:number;
        Dislikes:number;
        QuoteId:number | undefined; // reply id which the user is quoting
        Content:string;
    }
    export interface Thread {
        ThreadName: string;
        ThreadId:number
        AuthorId:number;
        Author: userData.User;
        TetherId:number; // the main reply
    }
}
