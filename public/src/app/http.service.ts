import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }
  // TODO: createCake
  // TODO: destroyCake
  getAllCakes() {
    return this._http.get('/cakes');
  }
  addReview(review) {
    console.log(review);
    return this._http.post('/cakes', review);
  }
}
