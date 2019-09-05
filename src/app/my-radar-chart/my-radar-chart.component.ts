import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-radar-chart",
  templateUrl: "./my-radar-chart.component.html",
  styleUrls: ["./my-radar-chart.component.css"]
})
export class MyRadarChartComponent implements OnInit {
  radarChartData;
  radarChartLabels;
  radarChartLegend;
  radarChartType;
  constructor() {}

  ngOnInit() {
    this.drawRadar();
  }

  drawRadar() {
    this.radarChartData = [
      { data: [120, 254, 80, 25], label: "2017" },
      { data: [20, 154, 40, 105], label: "2016" }
    ];
    this.radarChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
    this.radarChartLegend = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
    this.radarChartType = "radar";
  }
}
