import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidature } from 'app/models/candidature.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureServiceService {

  getcandidaturesUrl="/api/candidature/getAllCandidature";
  deletecanditatureUrl="/api/candidature/supprimer-candidature";
  ajoutcandidatureurl="/api/candidature/add-candidature";
  constructor(private http : HttpClient) { }

  getcandidatures():Observable<Candidature[]>{
    return this.http.get<Candidature[]>(`${this.getcandidaturesUrl}`);
  }
  deletecanditature(id:number): any{
    return this.http.delete(`${this.deletecanditatureUrl}/${id}`);
  }
  ajoutcanditature(candidature :Candidature): Observable<Candidature>{
    return this.http.post<Candidature>(`${this.ajoutcandidatureurl}`,candidature);
  }
}
