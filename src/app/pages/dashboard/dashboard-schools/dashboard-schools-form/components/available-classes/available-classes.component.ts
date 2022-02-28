import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Classes } from 'src/app/shared/utils/models/classes';

@Component({
  selector: 'app-available-classes',
  templateUrl: './available-classes.component.html',
  styleUrls: ['./available-classes.component.scss']
})
export class AvailableClassesComponent implements OnInit {
  @Input() arraySchoolClass: Array<Classes> = [];
  @Output() addNewSchoolClass = new EventEmitter();
  public schoolClass: Classes = {
    serie: "",
    vagasDisponiveis: ""
  };
  public isNewSchoolClass: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  newSchoolClass() {
    this.schoolClass.serie = "";
    this.schoolClass.vagasDisponiveis = ""
  }

  addNewClass() {
    this.isNewSchoolClass = true;
  }

  saveNewItem(object: Classes): void {
    const newClasse: Classes = {
      serie: object.serie,
      vagasDisponiveis: object.vagasDisponiveis
    }

    this.arraySchoolClass.push(newClasse);
    this.newClass();
    this.newSchoolClass();
    this.cancel();
  }

  newClass() {
    this.addNewSchoolClass.emit(this.arraySchoolClass);
  }

  cancel() {
    this.isNewSchoolClass = false;
  }

}
