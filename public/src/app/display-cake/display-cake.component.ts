import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display-cake',
  templateUrl: './display-cake.component.html',
  styleUrls: ['./display-cake.component.css']
})
export class DisplayCakeComponent implements OnInit {
  params: any;
  cake: any;
  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.params = params);
    this.cake = this.getOneCakeFromService(this.params);
  }


  getOneCakeFromService(cake) {
    console.log('in the component', cake);
    const observable = this._httpService.getOneCake(cake);
    observable.subscribe(data => this.cake = data);
    // observable.subscribe(data => console.log(data))
  }
}
