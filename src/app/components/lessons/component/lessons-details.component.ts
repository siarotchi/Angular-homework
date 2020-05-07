import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lesson } from '../../../models/lesson.model';

@Component({
  selector: 'app-lessons-details',
  templateUrl: './lessons-details.component.html',
  styleUrls: ['./lessons-details.component.scss'],
})
export class LessonsDetailsComponent {
  @Input() lessons: Lesson[];
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();

  onDeleteLesson(index: number) {
    this.delete.emit(index);
  }

  onSubmit(lessonForm: NgForm) {
    const formValue = lessonForm.value;
    this.add.emit(formValue);
  }
}
