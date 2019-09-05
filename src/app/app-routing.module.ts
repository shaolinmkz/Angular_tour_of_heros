import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "src/app/heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";
import { MyDoughnutChartComponent } from "./my-doughnut-chart/my-doughnut-chart.component";
import { MyRadarChartComponent } from "./my-radar-chart/my-radar-chart.component";
import { MyPieChartComponent } from "./my-pie-chart/my-pie-chart.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "bar-chart", component: MyBarChartComponent },
  { path: "pie-chart", component: MyPieChartComponent },
  { path: "doughnut-chart", component: MyDoughnutChartComponent },
  { path: "radar-chart", component: MyRadarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
