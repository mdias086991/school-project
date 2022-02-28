import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  @Input() titlePage: string = "";
  @Input() isNewItem: boolean = false;
  @Input() backButton: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNewPage() {
    this.router.navigate(['/new-school']);
  }

  toBack() {
    console.log('Aqui')
    this.router.navigate(['/'])
  }

}
