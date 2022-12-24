import { FileDB } from "./file-db.model";

export class User {
    userId:Number;
    userName:String;
    role:String;
    tel:String;
    email:String;
    password:String;
    files:FileDB[];
  
}
