import {Document,Schema,model} from "mongoose";

export interface IUser extends Document{
    id:string;
    name:string;
    address:string;
    salary:number;
}