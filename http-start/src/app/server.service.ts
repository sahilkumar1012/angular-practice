import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import {  Observable, throwError } from "rxjs";

@Injectable()       // as we'll use built in http service
export class ServerService {

    constructor(private http: Http) { }
    storeServers(servers: any[]) {
        // return this.http.post('https://udemy-ng-http-96adf.firebaseio.com/data.json', servers);
        return this.http.put('https://udemy-ng-http-96adf.firebaseio.com/data.json', servers);
    }

    getServers(){
        return this.http.get('https://udemy-ng-http-96adf.firebaseio.com/data')
        .pipe(map(
            (response:Response)=>{
                const data = response.json();
                for(let server of data){
                    server.name = server.name;
                }
                return data;
            }
        ))
        .pipe(
            catchError((error:Response)=>{
                console.log('inside catch block something was wrong' + error);
                return throwError(error);
            })
        );
    }

    getAppName(){
        this.http.get('https://udemy-ng-http-96adf.firebaseio.com/appName.json')
        .pipe(
            map(
                (response:Response)=>{
                    return response.json();
                }
            )
        );
    }

}