import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'


import { AppForAllServiceService } from '../app-for-all-service.service'

@Component({
  selector: 'app-show-freinds-of-freinds',
  templateUrl: './show-freinds-of-freinds.component.html',
  styleUrls: ['./show-freinds-of-freinds.component.css']
})
export class ShowFreindsOfFreindsComponent implements OnInit {

  constructor(private appforallServiceService:AppForAllServiceService,private activeRoute: ActivatedRoute,private router: Router) { }

  id:any;
  allPeople: Number;
  ngOnInit() {

    this.getFreindsOfFriends();
  }

  getFreindsOfFriends(){

    this.activeRoute.params.subscribe( data => this.id=parseInt(data.id));

    //console.log(typeof (this.id));
    this.appforallServiceService.getFreindsOfFriendsWithId(this.id).subscribe(data => this.allPeople = data);
  }


  toBack(){
    this.router.navigate(['']);
  }
}
