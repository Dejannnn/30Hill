import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AppForAllServiceService } from '../app-for-all-service.service'

@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.css']
})
export class ShowPeopleComponent implements OnInit {
  id: Number;
  allPeople: any;
  constructor(private router: Router,private activeRoute: ActivatedRoute,private appforallServiceService:AppForAllServiceService) { }


  ngOnInit() {
      this.getDirectFreinds();

  }

    getDirectFreinds(){

      this.activeRoute.params.subscribe( data => this.id=parseInt(data.id));

      //console.log(typeof (this.id));
      this.appforallServiceService.getDirectFriendsWithId(this.id).subscribe(data => this.allPeople = data);
     // this.router.navigate(['/show/direct',this.id]);
    }



  toBack(){
    this.router.navigate(['']);
  }
}
