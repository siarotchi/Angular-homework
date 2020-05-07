import {NgModule} from '@angular/core';
import {LessonsComponent} from './container/lessons.component';
import {LessonsDetailsComponent} from './component/lessons-details.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LessonsComponent, LessonsDetailsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [LessonsComponent]
})

export class LessonsModule {
}
