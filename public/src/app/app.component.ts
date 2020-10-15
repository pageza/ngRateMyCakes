import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: object;
  cakes: any;
  review: any;
  selectedCake: any;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.getCakesFromService();
    console.log(this.selectedCake);
    this.newCake = {baker: '', imageURL: '', reviews: [] };
    this.review = {rating: null, comment: '', _cake: null};
  }
// TODO: destroyCakeFromService
  getCakesFromService() {
    const observable = this._httpService.getAllCakes();
    observable.subscribe(cakes => this.cakes = cakes );
  }
  addReviewToService(cakeID) {
    this.review._cake = cakeID;
    const observable = this._httpService.addReview({data: this.review});
    observable.subscribe(data => console.log('posted: ', data));
    this.review = {rating: null, comment: '', _cake: null};
  }
  createCakeFromService(cake) {
    const observable = this._httpService.createCake(cake);
    observable.subscribe( data => console.log('Created: ', data));
    this.newCake = {baker: '', imageURL: '', reviews: [] };
    this.ngOnInit();
  }
  getOneCakeFromService(cake) {
    const observable = this._httpService.getOneCake(cake);
    observable.subscribe(data => this.selectedCake = data);
  }
}
