import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from 'app/models/offre.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {
  getoffresUrl="/api/offre/getAllOffre";
  deleteoffreUrl="/api/offre/supprimer-offre";
  ajoutoffreurl="/api/offre/add-offre";
  updateoffreurl="/api/offre/";
  getoffrebyIdurl="/api/offre/get-offre"

  constructor(private http : HttpClient) { }

  getoffres():Observable<Offre[]>{
    return this.http.get<Offre[]>(`${this.getoffresUrl}`);
  }
  deleteoffre(id:number): any{
    return this.http.delete(`${this.deleteoffreUrl}/${id}`);
  }
  ajoutoffre(offre :Offre): Observable<Offre>{
    return this.http.post<Offre>(`${this.ajoutoffreurl}`,offre);
  }
  getoffrebyid(id:number): Observable<Offre>{
    return this.http.get<Offre>(`${this.getoffrebyIdurl}/${id}`);

  }
  updateoffre(id:Number,offre:Offre): Observable<Offre>{
    return this.http.put<Offre>(`${this.updateoffreurl}/${id}`,offre);
  }
}
