import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() inputLabel: string;
  @Input() options: string[];
  @Output() selectedValue = new EventEmitter();
  selected: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  valueSelected(selected: any) {
    this.selectedValue.emit(selected);
  }

}
