import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
  {path: 'pay', component: PayComponent},
  {path: '', component: CourseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
