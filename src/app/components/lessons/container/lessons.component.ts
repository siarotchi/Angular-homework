import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../../models/lesson.model';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[];
  totalHours: number;
  oneLesson: any;
  lessonIndex: number;

  constructor() {
    this.lessons = [
      {
        name: 'JavaScript',
        hour: 2,
        teacher: 'Brendan Eich',
        description: ' https://learn.javascript.ru/',
        info:
          'Ea audiam percipit reformidans nec. Diam eligendi omittantur et eum, oblique nusquam conceptam vis ne, mea inermis eligendi liberavisse no. Ea cibo wisi quas vel. Vero appareat perpetua ea sed. Rebum choro adipiscing no vix, vis summo gubergren in. Case comprehensam signiferumque nec ea. Eum ea vide prima tractatos, dissentiet dissentiunt est ea. At pro animal repudiandae, in quo platonem accusamus consequuntur. Vim in saepe graecis inimicus, erat inani utroque ex sed, id duo alii alia error. Ei inani tantas molestiae cum, cu voluptaria moderatius sea. Duo zril aliquam ut. No sea legimus accusata mediocritatem, eum clita regione equidem at.',
      },
      {
        name: 'React',
        hour: 2,
        teacher: 'Jordan Walke',
        description: 'ToDo App with Hooks',
        info:
          'Ea audiam percipit reformidans nec. Diam eligendi omittantur et eum, oblique nusquam conceptam vis ne, mea inermis eligendi liberavisse no. Ea cibo wisi quas vel. Vero appareat perpetua ea sed. Rebum choro adipiscing no vix, vis summo gubergren in. Case comprehensam signiferumque nec ea. Eum ea vide prima tractatos, dissentiet dissentiunt est ea. At pro animal repudiandae, in quo platonem accusamus consequuntur. Vim in saepe graecis inimicus, erat inani utroque ex sed, id duo alii alia error. Ei inani tantas molestiae cum, cu voluptaria moderatius sea. Duo zril aliquam ut. No sea legimus accusata mediocritatem, eum clita regione equidem at.',
      },
      {
        name: 'Angular',
        hour: 2,
        teacher: 'Misko Hevery',
        description: 'Input/output ToDo app',
        info:
          'Ea audiam percipit reformidans nec. Diam eligendi omittantur et eum, oblique nusquam conceptam vis ne, mea inermis eligendi liberavisse no. Ea cibo wisi quas vel. Vero appareat perpetua ea sed. Rebum choro adipiscing no vix, vis summo gubergren in. Case comprehensam signiferumque nec ea. Eum ea vide prima tractatos, dissentiet dissentiunt est ea. At pro animal repudiandae, in quo platonem accusamus consequuntur. Vim in saepe graecis inimicus, erat inani utroque ex sed, id duo alii alia error. Ei inani tantas molestiae cum, cu voluptaria moderatius sea. Duo zril aliquam ut. No sea legimus accusata mediocritatem, eum clita regione equidem at.',
      },
      {
        name: 'Project Endava',
        hour: 4,
        teacher: 'Clementii Cicali',
        description: 'Navigation component',
        info:
          'Ea audiam percipit reformidans nec. Diam eligendi omittantur et eum, oblique nusquam conceptam vis ne, mea inermis eligendi liberavisse no. Ea cibo wisi quas vel. Vero appareat perpetua ea sed. Rebum choro adipiscing no vix, vis summo gubergren in. Case comprehensam signiferumque nec ea. Eum ea vide prima tractatos, dissentiet dissentiunt est ea. At pro animal repudiandae, in quo platonem accusamus consequuntur. Vim in saepe graecis inimicus, erat inani utroque ex sed, id duo alii alia error. Ei inani tantas molestiae cum, cu voluptaria moderatius sea. Duo zril aliquam ut. No sea legimus accusata mediocritatem, eum clita regione equidem at.',
      },
    ];
  }

  ngOnInit(): void {
    this.calculateTotalHours();
  }

  onAdd(lesson: Lesson) {
    if (lesson.name && lesson.hour && lesson.description) this.lessons = this.lessons.concat(lesson);
    this.calculateTotalHours();
  }

  calculateTotalHours() {
    this.totalHours = this.lessons
      .map((el) => {
        return el.hour;
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
  }
  handleLessonClicked(index: number) {
    this.oneLesson = this.lessons[index];
    this.lessonIndex = index;
  }
  onDelete(index: number) {
    (index || index === 0) && this.lessons.splice(index, 1);
    this.oneLesson = '';
    this.calculateTotalHours();
  }
}
