import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { UserServiceService } from 'app/service/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit,AfterContentInit {

  user:User;
  public userform: FormGroup;
  constructor(private toastr : ToastrService,private us:UserServiceService,private router:ActivatedRoute,
    private route :Router,private formBuilder: FormBuilder) { }
  ngAfterContentInit(): void {
    this.get(this.router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.initForm(this.user)
  }

  initForm(data:any) {
    this.userform = this.formBuilder.group({
      userName: [data?.userName],
      email: [data?.email],
      role: [data?.role],

  })
  this.userform.valueChanges.subscribe(
    data=>{
      console.log(this.userform.value)
    }
   
  )
}
get(id:number){
  this.us.getuserbyid(id ).subscribe(
    data => {

      this.user = data;
    this.initForm(data);

    }
  );
}
modifier(){

  this.us.updateuser(this.router.snapshot.params.id,this.userform.value).subscribe(
    data=>{
      console.log(this.userform.value);

      this.user=data;
      this.toastr.success('user modified Successfully ','user modified Successfully');
      let audio = new Audio()
      audio.src= "../assets/alert.mp3"
      audio.src= "../assets/confirm2.mp3"
      audio.load();
      audio.play();
      this.route.navigate(["/user-management"])

    }
    ); 
  }
}
