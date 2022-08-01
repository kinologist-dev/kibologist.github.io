import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
  {path: '**', component: CourseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    PayComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
