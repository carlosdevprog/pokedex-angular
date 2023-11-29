import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages
import { HomeComponent } from './home/home.component';

//Module Routing
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HomeComponent, DetailsComponent],
    imports: [CommonModule, RoutingModule, SharedModule, RouterModule]
})
export class PagesModule {}
