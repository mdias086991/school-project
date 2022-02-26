import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public authPage: boolean = false;
  public applicationName: string = "School Project"
  constructor() { }

  ngOnInit(): void {
  }

  goToLoginPage() {
    this.authPage = !this.authPage;
  }

}
