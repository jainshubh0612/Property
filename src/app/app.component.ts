import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

export interface Property {
  name: string;
  description: string;
  size: number;
  _id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  properties: Property[] = [];
  property: Property = {} as Property;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getAllProperty();
  }

  getAllProperty() {
    this.appService.getAllProperties().subscribe((data: any) => {
      this.properties = data.data
    }, (err) => {
      console.log(err);
    })
  }

  submit() {
   this.appService.createProperty(this.property).subscribe((data: any)=> {
    console.log(data.message);
    this.property = {} as Property;
    this.getAllProperty();
   }, (err) => {
    console.log(err)
   })    
  }

  deleteProperty(id: string) {
    this.appService.deleteProperty(id).subscribe((data: any) => {
      console.log(data.message);
      this.getAllProperty();
    }, (err) => {
      console.log(err);
    })
  }
}
