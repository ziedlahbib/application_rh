import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from 'app/models/candidature.model';
import { FileDB } from 'app/models/file-db.model';
import { CandidatureServiceService } from 'app/service/candidature-service.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajout-canditature',
  templateUrl: './ajout-canditature.component.html',
  styleUrls: ['./ajout-canditature.component.scss']
})
export class AjoutCanditatureComponent implements OnInit {

  public CAnditatureform: FormGroup;
  canditature:Candidature;
  selectedFiles: FileList;
  listfile:FileDB[];
  currentFile: any;
  fileInfos: Observable<any>;
  file: FileDB;
  constructor(private toastr : ToastrService,private cs:CandidatureServiceService,private router:ActivatedRoute,
    private route :Router,private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.initFormCanditature();
  }
  initFormCanditature() {
    this.CAnditatureform = this.formBuilder.group({
        file: [null, Validators.required],
  });
  this.CAnditatureform.valueChanges.subscribe(
    data=>{console.log(this.CAnditatureform)}
  )
  }
  selectFile(event:any) {
    this.selectedFiles = event.target.files;
    }
    upload() :FileDB{
      this.currentFile = this.selectedFiles.item(0);
      console.log(this.selectedFiles)
      console.log(this.currentFile)
      this.cs.upload(this.currentFile).subscribe(
      
        event => {
            this.cs.getFilesdetail(event).subscribe(
              data=>{
                this.file=data;
                console.log('file',this.file)
                       
                
              }
            );
      
          
        }
       );
      return this.file;
  }
  ajouter(){
    this.cs.ajoutcanditature(this.CAnditatureform.value).subscribe(
    data=>{
      console.log('ssss',data)
      this.canditature=data;
      this.cs.affecterfileauuser(data.candidatureId,this.file.id,this.canditature).subscribe(
        res=>{
         //this.listfile=res;
         this.toastr.success('user added Successfully ','user added Successfully');
         let audio = new Audio()
         audio.src= "../assets/alert.mp3"
         audio.src= "../assets/confirm2.mp3"
         audio.load();
         audio.play();
        }
     
    );
   }
  );
    
}
}
