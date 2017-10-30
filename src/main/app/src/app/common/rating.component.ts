import {Component, Input, OnInit} from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'rating',
  template: `
      <span class="rating">
          <i *ngFor="let star of fullStars" class="tiny material-icons">star</i>
          <i *ngIf="isHalfStar" class="tiny material-icons">star_half</i>
      </span>  
  `
})
export class RatingComponent implements OnInit {
    @Input() stars : number;
    fullStars : number[];
    isHalfStar : boolean;

    ngOnInit(): void {
        this.fullStars = _.range(Math.floor(this.stars));
        this.isHalfStar = _.isInteger(this.stars);
    }

}