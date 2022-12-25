import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
///////////////////////////////////:
import { User } from 'app/models/user.model';
import { UserServiceService } from 'app/service/user-service.service';
////////////////////////////////
import {ToastrService} from "ngx-toastr";
import { PageEvent } from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import {MatSort, SortDirection} from '@angular/material/sort';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  listofuser:User[];
  listofuserPAgination:User[];
  start=0;
  end=6;
  itemsPerPage: number;
  page: any;
  previousPage: any;
  displayedColumns = ['username','email','option'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private us:UserServiceService,private toastr : ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.us.getuser().subscribe(
      data=>{
        this.listofuser=data;
        //this.listofuserPAgination=this.listofuser.slice(this.start, this.end);
        this.dataSource=new MatTableDataSource(this.listofuser);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    )
  }

  paginate(event:PageEvent) {
    let startIndex = event.pageSize * event.pageIndex;
    this.start = startIndex;
    let endIndex = startIndex + event.pageSize;
    this.end = endIndex;
    if (endIndex > this.listofuser.length) {
      endIndex = this.listofuser.length;
    }
    this.listofuserPAgination = this.listofuser.slice(startIndex, endIndex);
  }
  supprimer(user :any){
    this.us.deleteuser(user.userId).subscribe(()=>this.us.getuser().subscribe(
      data=>{
        this.listofuser=data;
        this.listofuserPAgination=this.listofuser.slice(this.start, this.end);
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
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
