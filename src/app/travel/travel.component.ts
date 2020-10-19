import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


export class Travel {
  public leaving: string;
  public going: string;
  public departingDate: Date;
  public returningDate: Date;
  public fareCost: number;
  public numTraveler: number;
  public total: number;
}

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  constructor(){ }

  travel = new Travel();

  ngOnInit(): void {
    this.travel.total = 0;
  }
  public calculate(form): void {
    const fareCost = 150;
    this.travel.total = fareCost * this.travel.numTraveler;
  }
}
