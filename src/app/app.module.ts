import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TravelComponent } from './travel/travel.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'travel', component:TravelComponent},
  {path: 'about', component:AboutComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent, TravelComponent, AboutComponent]
})
export class AppModule { }
