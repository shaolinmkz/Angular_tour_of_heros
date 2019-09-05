import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.css']
})
export class MyPieChartComponent implements OnInit {
  pieChartData;
  pieChartLabels;
  pieChartLegend;
  pieChartType: ChartType;
  pieChartColors;

  constructor() {}

  ngOnInit() {
    this.drawRadar();
  }

  drawRadar() {
    this.pieChartData = [{ data: [120, 254, 80, 25], label: '2019' }];
    this.pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
    this.pieChartLegend = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
    this.pieChartType = 'pie';
  }
}
