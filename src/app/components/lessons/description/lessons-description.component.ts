import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lessons-description',
  templateUrl: './lessons-description.component.html',
  styleUrls: ['./lessons-description.component.scss'],
})
export class LessonsDescriptionComponent {
  public editFields = {
    name: false,
    hour: false,
    teacher: false,
    description: false,
    info: false,
  };

  @Input() oneLesson: any;
  @Input() lessonIndex: number;
  @Output() delete = new EventEmitter();

  onDeleteLesson() {
    this.delete.emit(this.lessonIndex);
  }

  onEditLesson(field) {
    this.editFields[field] = true;
    setTimeout(() => {
      this[field].nativeElement.focus();
    }, 0);
  }

  onBlur(field) {
    this.editFields[field] = false;
  }
}
