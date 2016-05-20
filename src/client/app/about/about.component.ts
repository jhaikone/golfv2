import { Component } from '@angular/core';
import { StrokeInputComponent } from '../shared/stroke-input/stroke-input.component';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives: [StrokeInputComponent]
})
export class AboutComponent {

  strokes: number = 3;
  putts: number = 2;

  kissa: String = 'kissa';


  getValue() {
    return this.strokes+this.putts;
  }

}
