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
  ajoutuserUrl="/api/user/inscription";
  uploadfilef="/api/File/uploadf";
  getfiledetail="/api/File/filesdetail";
  getusersUrl="/api/user/get-users";
  getuserbyidUrl="/api/user/get-user"
  constructor(private http : HttpClient) { }
  registration(user :User): Observable<User>{
    return this.http.post<User>(`${this.registartionurlUrl}`,user);
  }
}
