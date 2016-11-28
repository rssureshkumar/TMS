import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../rxjs-operators';


@Injectable()
export class TMSdataService {
  private result;
  private tabledataUrl = 'https://api.mongolab.com/api/1/databases/lagrossetete/collections/avengers?apiKey=j0PIJH2HbfakfRo1ELKkX0ShST6_F78A';
  constructor(private http: Http) { } 
   
  getTableData(){  	 
       return this.http.get(this.tabledataUrl).map(
            result => {
                let data = result.json();
                this.result = data;
                return data
            }
        )     
  }
  getApps(){  	 
       return this.http.get(this.tabledataUrl).map(
            result => {
                let data = result.json();
                this.result = data;
                return data
            }
        )     
  }
  getTables(){  	 
       return this.http.get(this.tabledataUrl).map(
            result => {
                let data = result.json();
                this.result = data;
                return data
            }
        )     
  }
  
}
