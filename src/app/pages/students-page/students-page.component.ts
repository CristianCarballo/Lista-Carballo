import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  estudiantes: Estudiante[] = [
    new Estudiante(1, 'José', 'Martínez', new Date('1986-02-23'), false),
    new Estudiante(2, 'María', 'La del barrio', new Date('1990-05-21'), false),
    new Estudiante(3, 'Kevin', 'Chuca', new Date('2000-01-10'), true),
    new Estudiante(4, 'Ana', 'Figueroa', new Date('2003-10-13'), true)   
  ];


}
