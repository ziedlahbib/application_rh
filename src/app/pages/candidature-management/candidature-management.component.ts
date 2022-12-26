import { Component, OnInit } from '@angular/core';
import { Candidature } from 'app/models/candidature.model';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'

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
  constructor() { }

  ngOnInit(): void {
  }

}
