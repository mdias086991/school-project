import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from 'src/app/shared/utils/models/school';
import { SchoolsService } from 'src/app/shared/utils/services/schools.service';

@Component({
  selector: 'app-dashboard-schools-list',
  templateUrl: './dashboard-schools-list.component.html',
  styleUrls: ['./dashboard-schools-list.component.scss']
})
export class DashboardSchoolsListComponent implements OnInit {

  constructor(private schoolService: SchoolsService, private router: Router) { }

  public school: School[] = []

  ngOnInit(): void {
    this.getSchools();

  }

  getSchools() {
    this.schoolService.getSchools().subscribe((e) => {
      this.school = e;
    })
  }

  deleteSchool(event: any): void {
    this.schoolService.deleteSchools(event).subscribe((e) => {
      console.log("Deletado")
      this.getSchools();
    })
  }

  editSchool(event: any): void {
    this.router.navigate([`/new-school/${event}`])
  }


}
