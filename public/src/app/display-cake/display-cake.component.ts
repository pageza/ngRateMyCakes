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
    // TODO: figure out logic for average
    let average: number = 0;
    for (let i = 0; i < cake.reviews.length; i++ ) {
      // console.log('this is the ratings',cake.reviews[i].rating);
      average = average + cake.reviews[i].rating;
      average = average / cake.reviews.length;
    }

    return average;
  }



}
