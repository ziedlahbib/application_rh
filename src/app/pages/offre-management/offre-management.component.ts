import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Offre } from 'app/models/offre.model';
import { OffreServiceService } from 'app/service/offre-service.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-offre-management',
  templateUrl: './offre-management.component.html',
  styleUrls: ['./offre-management.component.scss']
})
export class OffreManagementComponent implements OnInit {

  listofoffre:Offre[];
  displayedColumns = ['titre','typeOffre','adresse','description','salaire','datePublication','option'];
  dataSource: MatTableDataSource<Offre>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private os:OffreServiceService,private toastr : ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.os.getoffres().subscribe(
      data=>{
        this.listofoffre=data;
        //this.listofuserPAgination=this.listofuser.slice(this.start, this.end);
        this.dataSource=new MatTableDataSource(this.listofoffre);
        this.dataSource.paginator = this.paginator;

      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  supprimer(offre :any){
    this.os.deleteoffre(offre.offreId).subscribe(()=>this.os.getoffres().subscribe(
      data=>{
        this.listofoffre=data;
        this.dataSource = new MatTableDataSource(this.listofoffre);
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
