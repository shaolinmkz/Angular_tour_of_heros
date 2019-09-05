import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-doughnut-chart",
  templateUrl: "./my-doughnut-chart.component.html",
  styleUrls: ["./my-doughnut-chart.component.css"]
})
export class MyDoughnutChartComponent implements OnInit {
  doughnutChartData;
  doughnutChartLabels;
  doughnutChartLegend;
  doughnutChartType;
  isShow: boolean = false;

  constructor() {}

  ngOnInit() {
    this.drawDoughtnut();
  }

  drawDoughtnut() {
    this.doughnutChartLegend = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
    this.doughnutChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
    this.doughnutChartData = [120, 254, 80, 25];
    this.doughnutChartType = "doughnut";
  }
}
