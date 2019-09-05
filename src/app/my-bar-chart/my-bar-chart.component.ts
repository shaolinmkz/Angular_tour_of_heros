import { Component, OnInit } from "@angular/core";
import "ng2-charts";

@Component({
  selector: "app-my-bar-chart",
  templateUrl: "./my-bar-chart.component.html",
  styleUrls: ["./my-bar-chart.component.css"]
})
export class MyBarChartComponent implements OnInit {
  barChartData: object[];
  barChartLabels;
  barChartOptions;
  barChartLegend: boolean;
  barChartType: string;
  constructor() {}

  ngOnInit() {
    this.drawBarChart();
  }

  drawBarChart() {
    this.barChartData = [
      { data: [65, 23, 63, 31, 43, 65, 98, 11], label: "series A" },
      { data: [25, 13, 22, 35, 29, 75, 88, 18], label: "series B" }
    ];
    this.barChartLabels = [
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013"
    ];
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    this.barChartLegend = true;
    this.barChartType = "bar";
  }
}
