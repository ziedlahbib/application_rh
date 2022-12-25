import { Component, OnInit } from '@angular/core';
///////////////////////////////////:
import { User } from 'app/models/user.model';
import { UserServiceService } from 'app/service/user-service.service';
////////////////////////////////

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  listofuser:User[];
  counters = [100, 200, 10];
  page = 4;
page2 = 1;
currentPage = 3;
disablepage = 3;
pagecustom = 4;
  constructor(private us:UserServiceService) { }

  ngOnInit(): void {
    this.us.getuser().subscribe(
      data=>{
        this.listofuser=data;

      }
    )
  }


}
