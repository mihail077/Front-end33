import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from "../../model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users!: IUser[];
    constructor(
        private http:HttpClient
    ) {};

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    }
}