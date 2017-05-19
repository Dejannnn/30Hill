import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AppForAllServiceService } from '../app-for-all-service.service'

@Component({
  selector: 'app-app-all-people',
  templateUrl: './app-all-people.component.html',
  styleUrls: ['./app-all-people.component.css']
})
export class AppAllPeopleComponent implements OnInit {

  allPeople:any;

  constructor(private appforallServiceService:AppForAllServiceService,private router: Router) {}
  ngOnInit(){

    this.getPeople();
  }

  getPeople(){

    this.appforallServiceService.getAllPeople().subscribe(data => {this.allPeople =data
    });

  }

  showDirectUser(val: any){



    this.router.navigate(['/show/direct',val]);

  }
  showFreindsOfFreinds(val: any){

    this.router.navigate(['/show/freinds',val]);

  }
  showSugesstedFreinds(val: any){

    this.router.navigate(['/show/suggestion',val]);

  }


}
