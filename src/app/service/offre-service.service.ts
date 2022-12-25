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
}
