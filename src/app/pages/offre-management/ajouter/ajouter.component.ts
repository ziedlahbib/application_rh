import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Offre } from 'app/models/offre.model';
import { TypeOffre } from 'app/models/type-offre';
import { OffreServiceService } from 'app/service/offre-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  public offreform: FormGroup;
  offre:Offre;
  typeOffre=TypeOffre;
  constructor(private os:OffreServiceService,
    private formBuilder: FormBuilder,private route:Router,private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  initForm() {
    this.offreform = this.formBuilder.group({
      adresse: [''],
      salaire: [''],
      datePublication: [''],
      description: [''],
      typeOffre: [''],


      
  });

  this.offreform.valueChanges.subscribe(
    data=>{console.log(this.offreform)}
  )
}
ajouter(){
  console.log(this.offreform.value);
  this.os.ajoutoffre(this.offreform.value).subscribe(
  data=>{
    console.log('ssss',data)
    this.offre=data; 
    this.toastr.success('offre added Successfully ','offre added Successfully');
    let audio = new Audio()
    audio.src= "../assets/alert.mp3"
    audio.src= "../assets/confirm2.mp3"
    audio.load();
    audio.play();
    this.route.navigate(["/gestion-des-offre"])

  } 
  );  
}
}
