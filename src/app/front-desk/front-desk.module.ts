import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FrontDeskComponent } from "./front-desk.component";
import { FrontDeskRoutingModule } from "./front-desk.routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CheckInComponent } from "./check-in/check-in.component";
import { CheckOutComponent } from "./check-out/check-out.component";

@NgModule({
  imports: [FrontDeskRoutingModule],
  declarations: [
    FrontDeskComponent,
    DashboardComponent,
    CheckInComponent,
    CheckOutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontDeskModule {}
