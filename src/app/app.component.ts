import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  username:string=""
  password:string=""

  username1:string=""
  password1:string=""

  constructor(private http:HttpClient){
    
  }
  loginUser() {
    this.http.post('http://127.0.0.1:5000/api/signin',{'username':this.username,'password':this.password}).subscribe((response:any)=>{
      console.log(response.status)
  })
  }
  signUp(){
    this.http.post('http://127.0.0.1:5000/api/register-user',{'username':this.username1,'password':this.password1}).subscribe((response:any)=>{
      console.log(response.status)
    })
  }
    
   
}


