import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  registartionurlUrl="/api/registration";
  getbyusernameurl="/api/user/get-userbyusername";
  updateuserUrl="/api/user/update-utilisateur";
  uploadfilef="/api/File/uploadf";
  getfiledetail="/api/File/filesdetail";
  getusersUrl="/api/user/get-users";
  getuserbyidUrl="/api/user/get-user";
  deleteuserUrl="/api/user/delete-user";
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
}
