import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core'
/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'stroke-input',
  templateUrl: 'stroke-input.component.html',
  styleUrls: ['stroke-input.component.css'],
})

export class StrokeInputComponent implements OnInit {

  @Input() label: String;
  @Input() total: number;

  @Input() ngModel: number;
  @Output() totalChange = new EventEmitter();

  ngOnInit() {
    //initing
  }

  increase() {
    console.log('incease')
    this.total++;
    this.totalChange.emit(this.total);
  }

  decrease() {
    if(this.total > 1) {
        this.total--;
        this.totalChange.emit(this.total);
    }

  }

}
