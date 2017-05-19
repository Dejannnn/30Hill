import { Injectable } from '@angular/core';
import  {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppForAllServiceService {

  constructor(private http: Http) { }

  getAllPeople(){
    var headers= new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get('http://localhost:3000/',{headers: headers}).map(data => data.json());
  }

  getDirectFriendsWithId(id: any){

    var headers= new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get('http://localhost:3000/direct/'+id,{headers: headers}).map(data => data.json());
  }
  getFreindsOfFriendsWithId(id: any){

    var headers= new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get('http://localhost:3000/freinds/'+id,{headers: headers}).map(data => data.json());
  }
  getSuggestionFriendsWithId(id: any){

    var headers= new Headers();
    headers.append('Content-Type','application/json');

    return this.http.get('http://localhost:3000/suggestion/'+id,{headers: headers}).map(data => data.json());
  }
}
