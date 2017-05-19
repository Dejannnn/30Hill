import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AppForAllServiceService } from '../app-for-all-service.service'


@Component({
  selector: 'app-show-suggrstion-freinds',
  templateUrl: './show-suggrstion-freinds.component.html',
  styleUrls: ['./show-suggrstion-freinds.component.css']
})
export class ShowSuggrstionFreindsComponent implements OnInit {
  id: Number;
  allPeople: any;
  constructor(private activeRoute: ActivatedRoute,private appforallServiceService:AppForAllServiceService,private router:Router) { }

  ngOnInit() {
    this.getSuggestionFreinds();
  }

  getSuggestionFreinds(){

    this.activeRoute.params.subscribe( data => this.id=parseInt(data.id));

    //console.log(typeof (this.id));
    this.appforallServiceService.getSuggestionFriendsWithId(this.id).subscribe(data => { this.allPeople = data})
  }
  toBack(){
    this.router.navigate(['']);
  }


}
