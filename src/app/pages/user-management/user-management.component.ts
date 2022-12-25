import { Component, OnInit } from '@angular/core';
///////////////////////////////////:
import { User } from 'app/models/user.model';
import { UserServiceService } from 'app/service/user-service.service';
////////////////////////////////
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  listofuser:User[];
  listofuserPAgination:User[];
  start=0;
  end=1;
  itemsPerPage: number;
  page: any;
  previousPage: any;
  constructor(private us:UserServiceService) { }

  ngOnInit(): void {
    this.us.getuser().subscribe(
      data=>{
        this.listofuser=data;

      }
    )
  }
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.listofuser;
    }
  }
  paginate(event:any) {
    let startIndex = event.pageSize * event.pageIndex;
    this.start = startIndex;
    let endIndex = startIndex + event.pageSize;
    this.end = endIndex;
    if (endIndex > this.listofuser.length) {
      endIndex = this.listofuser.length;
    }
    this.listofuserPAgination = this.listofuser.slice(startIndex, endIndex);
  }

}
