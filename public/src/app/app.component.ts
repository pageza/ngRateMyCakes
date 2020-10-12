import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCake: object;
  cakes: any;
  selectedCake: any;
  review: any;

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.getCakesFromService();
    this.newCake = {baker: '', imageURL: '', reviews: [] };
    this.review = {rating: null, comment: '', _cake: null};
  }
// TODO: createCakeFromService
// TODO: destroyCakeFromService
  getCakesFromService() {
    const observable = this._httpService.getAllCakes();
    observable.subscribe(cakes => this.cakes = cakes );
  }
  addReviewToService() {
    const observable = this._httpService.addReview({data: this.review});
    observable.subscribe(data => console.log('posted: ', data));
    this.review = {rating: null, comment: '', _cake: null};
  }
}
