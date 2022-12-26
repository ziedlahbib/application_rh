import { Component, OnInit } from '@angular/core';
import { Candidature } from 'app/models/candidature.model';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
import { CandidatureServiceService } from 'app/service/candidature-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidature-management',
  templateUrl: './candidature-management.component.html',
  styleUrls: ['./candidature-management.component.scss']
})
export class CandidatureManagementComponent implements OnInit {

  listofcandidature:Candidature[];
  displayedColumns = ['id','file','option'];
  dataSource: MatTableDataSource<Candidature>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private cs:CandidatureServiceService,private toastr : ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.cs.getcandidatures().subscribe(
      data=>{
        this.listofcandidature=data;
        //this.listofuserPAgination=this.listofuser.slice(this.start, this.end);
        this.dataSource=new MatTableDataSource(this.listofcandidature);
        this.dataSource.paginator = this.paginator;

      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  supprimer(candidature :any){
    this.cs.deletecanditature(candidature.CandidatureId).subscribe(()=>this.cs.getcandidatures().subscribe(
      data=>{
        this.listofcandidature=data;
        this.dataSource = new MatTableDataSource(this.listofcandidature);
        this.toastr.error('assurance deleted sucessfuly ','assurance deleted sucessfuly ');
       let audio = new Audio()
       audio.src= "../assets/alert.mp3"
       audio.src= "../assets/confirm2.mp3"
       audio.load();
       audio.play();
      }
    )
    );
  }
}
