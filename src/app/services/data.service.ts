import { Injectable } from '@angular/core';
import { Flower } from '../data-models/Flower';
import { Stage } from '../data-models/Stage';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:5280';
  }

  public getFlowerById(id: number): any {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '/',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.get(this.baseUrl + '/flowers/' + id, options);
  }

  public getFlowers(): Observable<Array<Flower>> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '/',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.get<Array<Flower>>(this.baseUrl + '/flowers', options);
  }
  public updateFlower(flower: Flower, id: number): Observable<Object> {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '/',
        'Access-Control-Allow-Origin': '*'
      })
    }
    return this.http.put(this.baseUrl + '/flowers/' + id, JSON.stringify(flower), options);
  }
}
