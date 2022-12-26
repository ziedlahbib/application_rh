import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'app/models/offre.model';
import { TypeOffre } from 'app/models/type-offre';
import { OffreServiceService } from 'app/service/offre-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifieroffre',
  templateUrl: './modifieroffre.component.html',
  styleUrls: ['./modifieroffre.component.scss']
})
export class ModifieroffreComponent implements OnInit,AfterContentInit {

  offre:Offre;
  public offreform: FormGroup;
  typeOffre=TypeOffre;
  constructor(private toastr : ToastrService,private os:OffreServiceService,private router:ActivatedRoute,
    private route :Router,private formBuilder: FormBuilder) { }
  ngAfterContentInit(): void {
    this.get(this.router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.initForm(this.offre)
  }
  initForm(data:any) {
    this.offreform = this.formBuilder.group({
      adresse: [data?.adresse],
      salaire: [data?.salaire,[Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      datePublication: [data?.datePublication],
      description: [data?.description],
      typeOffre: [data?.typeOffre],

  })
  this.offreform.valueChanges.subscribe(
    data=>{
      console.log(this.offreform.value)
    }
   
  )
}
get(id:number){
  this.os.getoffrebyid(id ).subscribe(
    data => {

      this.offre = data;
    this.initForm(data);

    }
  );
}
modifier(){

  this.os.updateoffre(this.router.snapshot.params.id,this.offreform.value).subscribe(
    data=>{
      console.log(this.offreform.value);

      this.offre=data;
      this.toastr.success('user modified Successfully ','user modified Successfully');
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
