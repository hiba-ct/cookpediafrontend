import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

server_url="http://localhost:3000"

  constructor(private http:HttpClient)/* syntax for dependency injection-:(access specifire variable_name:dependend classname) */
  { }
  getAllRecipeAPI(){
return this.http.get(`${this.server_url}/all-recipes`)/* api call  return cheydale access cheyyan pattu*/
  }


  //add-testimony
addTestimonyAPI(reqBody:any){
    return this.http.post(`${this.server_url}/add-testimony`,reqBody)
}

/* //all-users
allUserAPI(){
return this.http.get(`${this.server_url}/all-users`,this.appendToken())
} */
}
