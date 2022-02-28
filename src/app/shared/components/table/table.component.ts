import { Component, EventEmitter, Input, OnInit, Output, PipeTransform } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { School } from '../../utils/models/school';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() items: Array<any> = [];
  @Input() page = 1;
  @Input() pageSize = 0;
  @Input() collectionSize = 0;
  @Input() filterAvailable: Boolean = false;
  @Input() noContentText: string = "";
  @Output() deleteMethod = new EventEmitter();
  @Output() editMethod = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onDelete(id: any): void{
    this.deleteMethod.emit(id);
  }

  onEdit(id: number): void {
    this.editMethod.emit(id);
  }

}
