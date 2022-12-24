import { User } from "./user.model";

export class FileDB {
    id:number;
    name:String;
    type:String;
    data:Int32Array[];
    user:User;
}
