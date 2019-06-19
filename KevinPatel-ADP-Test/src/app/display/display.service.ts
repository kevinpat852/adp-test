import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient) { }

  getTasks() {
    this.http.get('https://interview.adpeai.com/api/v1/get-task').subscribe((response) => {
      console.log(response);
      let result;
      let id = response.id;
      if(response.operation == 'subtraction'){
        result = (response.left - response.right);
      }
      if(response.operation == 'addition'){
        result = (response.left + response.right);
      }
      if(response.operation == 'multiplication'){
        result = (response.left * response.right);
      }
      if(response.operation == 'division'){
        result = (response.left / response.right);
      }
      if(response.operation == 'remainder'){
        result = (response.left % response.right);
      }
      console.log('The result is: ' + result);

      this.http.post('https://interview.adpeai.com/api/v1/submit-task', {"id":id, "result":result}).subscribe((added)=>{
        console.log(added);
        if(added.status == 200) {
          alert('Success');
        }
        if(added.status == 400) {
          alert('Incorrect value in result; no ID specified; value is invalid');
        }
        if(added.status == 500) {
          alert('ID cannot be found');
        }
      });
    });
  }
}
