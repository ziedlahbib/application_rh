import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  registartionurlUrl="/api/registration";
  updateuserUrl="/api/user/update-utilisateur";
  getusersUrl="/api/user/get-users";
  getuserbyidUrl="/api/user/get-user";
  deleteuserUrl="/api/user/delete-user";
  getuserurl="/api/user/get-user";
  getbyusernameurl="/api/user/get-userbyusername";
  constructor(private http : HttpClient) { }
  registration(user :User): Observable<User>{
    return this.http.post<User>(`${this.registartionurlUrl}`,user);
  }
  getuser():Observable<User[]>{
    return this.http.get<User[]>(`${this.getusersUrl}`);
  }
  deleteuser(id:number): any{
    return this.http.delete(`${this.deleteuserUrl}/${id}`);
  }
  getuserbyid(id:number): Observable<User>{
    return this.http.get<User>(`${this.getuserurl}/${id}`);

  }
  updateuser(id:Number,user:User): Observable<User>{
    return this.http.put<User>(`${this.updateuserUrl}/${id}`,user);
  }
  getuserbyusername(username:String): Observable<User>{
    return this.http.get<User>(`${this.getbyusernameurl}/${username}`);

  }
}
