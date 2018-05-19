import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()       // as we'll use built in http service
export class ServerService {

    constructor(private http: Http) { }
    storeServers(servers: any[]) {
        // return this.http.post('https://udemy-ng-http-96adf.firebaseio.com/data.json', servers);
        return this.http.put('https://udemy-ng-http-96adf.firebaseio.com/data.json', servers);
    }

    getServers(){
        return this.http.get('https://udemy-ng-http-96adf.firebaseio.com/data.json')
        .pipe(map(
            (response:Response)=>{
                const data = response.json();
                return data;
            }
        ));
    }

}