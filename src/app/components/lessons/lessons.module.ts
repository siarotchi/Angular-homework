import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LessonsComponent } from './container/lessons.component';
import { LessonsDetailsComponent } from './component/lessons-details.component';
import { LessonsDescriptionComponent } from './description/lessons-description.component';

@NgModule({
  declarations: [
    LessonsComponent,
    LessonsDetailsComponent,
    LessonsDescriptionComponent,
  ],
  imports: [CommonModule, FormsModule],
  providers: [],
  exports: [LessonsComponent],
})
export class LessonsModule {}
