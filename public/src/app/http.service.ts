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
    return this._http.put('/cakes/' + review.data._cake, review);
  }
  getOneCake(cake) {
    return this._http.get('/cakes/' + cake );
  }
  createCake(cake) {
    return this._http.post('/cakes', cake);
  }
}
