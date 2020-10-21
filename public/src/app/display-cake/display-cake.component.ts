import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display-cake',
  templateUrl: './display-cake.component.html',
  styleUrls: ['./display-cake.component.css']
})
export class DisplayCakeComponent implements OnInit {
  @Input() cakeToShow: any;
  avrRating: number;

  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.avrRating = this.calculateAverage(this.cakeToShow);
  }

  calculateAverage(cake) {
    let average: any = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cake.reviews.length; i++ ) {
      average = average + cake.reviews[i].rating;
    }

    return average / cake.reviews.length;
  }



}
