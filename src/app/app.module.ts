import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeTopBarComponent } from './home-top-bar/home-top-bar.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: DocListComponent },
      { path: 'docs/:docId', component: DocDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HomeTopBarComponent,
    DocListComponent,
    DocDetailsComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/