import { SafeResourceUrl } from "@angular/platform-browser";

export default interface IUser{
    name:string;
    email:string;
    age:number;
    phoneNumber:string;
    password?:string;
}