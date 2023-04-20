import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseEnglishComponent } from './components/course-en/course.component';
import { CourseComponent } from './components/course/course.component';
import { PayComponent } from './components/pay/pay.component';

const routes: Routes = [
  { path: 'pay', component: PayComponent },
  { path: '**', component: CourseComponent },
  // { path: '**', component: CourseEnglishComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    PayComponent,
    CourseEnglishComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
