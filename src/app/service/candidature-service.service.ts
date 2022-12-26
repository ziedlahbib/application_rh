import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidature } from 'app/models/candidature.model';
import { FileDB } from 'app/models/file-db.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureServiceService {

  getcandidaturesUrl="/api/candidature/getAllCandidature";
  deletecanditatureUrl="/api/candidature/supprimer-candidature";
  ajoutcandidatureurl="/api/candidature/add-candidature";
  uploadfilef="/api/File/uploadf";
  getfiledetail="/api/File/filesdetail";
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
  upload(file :File): Observable<Number>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<Number>(`${this.uploadfilef}`,formData,{
      headers : { 'Content-Type':'multipart/form-data' },
    });
  }
  getFilesdetail(id:Number): Observable<FileDB> {
    return this.http.get<FileDB>(`${this.getfiledetail}/${id}`);
  }
  affecterfileauuser(id:Number,idf:Number,canditature :Candidature):Observable<Candidature>{
    return this.http.put<Candidature>("api\\candidature\\affecter-file-vehicule\\"+id+"\\"+idf,canditature);
  }
}
