import { Component, OnInit } from '@angular/core';

export interface Property {
  name: string;
  description: string;
  size: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  properties: Property[] = [];
  property: Property = {} as Property;

  ngOnInit(): void {}

  addProperty() {
    if(this.editIndex != -1) {
      this.properties[this.editIndex] = { ...this.property };
    } else {
      this.properties.push(this.property);
    }

    this.editIndex = -1;
    this.property = {} as Property;
  }

  editIndex: number = -1;
  editProperty(index: number) {
    this.editIndex = index;

    this.property = { ...this.properties[index] };
  }

  deleteProperty(index: number) {
    this.properties.splice(index, 1);
  }
}
