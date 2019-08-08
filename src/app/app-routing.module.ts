import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { PricingOptionsComponent } from './pricing-options/pricing-options.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurAppComponent } from './our-app/our-app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  // { path: '', redirectTo: 'Testimonials', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Pricing', component: PricingOptionsComponent },
  { path: 'Testimonials', component: TestimonialsComponent },
  { path: '', component: OurAppComponent },
  { path: 'OurApp', component: OurAppComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
