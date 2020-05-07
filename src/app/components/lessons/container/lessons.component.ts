import {Component, OnInit} from '@angular/core';
import {Lesson} from '../../../models/lesson.model';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})

export class LessonsComponent implements OnInit {

  lessons: Lesson[];
  totalHours: number;

  constructor() {
    this.lessons = [
      {name: 'Mathematics', hour: 4},
      {name: 'English', hour: 10},
      {name: 'Informatics', hour: 1},
      {name: 'Fizaca', hour: 2},
      {name: 'Arta Plastica', hour: 7},
      {name: 'Educatia Fizica', hour: 5},
    ];
  }

  ngOnInit(): void {
    this.calculateTotalHours();
  }


  onDelete(index: number) {
    this.lessons.splice(index, 1);
    this.calculateTotalHours();
  }

  onAdd(lesson: Lesson) {
    this.lessons = this.lessons.concat(lesson);
    this.calculateTotalHours();
  }

  calculateTotalHours() {
    this.totalHours = this.lessons.map(el => {
      return el.hour;
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
  }

}
