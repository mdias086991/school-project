import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { School } from 'src/app/shared/utils/models/school';
import { ViaCepInformations } from 'src/app/shared/utils/models/viaCepInformations';
import { SchoolsService } from 'src/app/shared/utils/services/schools.service';
import { ToastNotificationService } from 'src/app/shared/utils/services/toast-notification.service';


@Component({
  selector: 'app-dashboard-schools-form',
  templateUrl: './dashboard-schools-form.component.html',
  styleUrls: ['./dashboard-schools-form.component.scss']
})
export class DashboardSchoolsFormComponent implements OnInit {

  public school: School = {
    name: "",
    bairro: "",
    cnpj: "",
    diretor: "",
    cep: ""
  };

  public editSchoolText: string = "";

  public time: any = 0;

  public idSchool: any = null;

  constructor(
    private schoolService: SchoolsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastNotificationService: ToastNotificationService) { }

  ngOnInit(): void {
    this.idSchool = this.activatedRoute.snapshot.paramMap.get("id");
    if(this.idSchool) {

      this.getSchoolById(this.idSchool);
    }
  }

  getSchoolById(id: number): void {
    this.schoolService.getSchoolById(id).subscribe((e) => {
      this.school = e;
      this.editSchoolText = `Editar escola ${e.name}`
    })
  }

  saveSchool() {
    this.schoolService.createNewSchool(this.school).subscribe((e) => {
      this.router.navigate(['/'])
      this.toastNotificationService.successMessage({
      title: 'Tudo certo',
      text: `A escola ${e.name} foi cadastrada com sucesso`,
      timeOut: 5000})
    }), () => this.toastNotificationService.successMessage({
      title: 'Tudo certo',
      text: `Houve algum erro, tente novamente mais tarde`,
      timeOut: 5000})
  }

  updateSchool() {
    this.schoolService.editSchool(this.school).subscribe((e) => {
      this.router.navigate(['/'])
      this.toastNotificationService.successMessage({
        title: 'Tudo certo',
        text: `A escola ${e.name} foi atualizada com sucesso`,
        timeOut: 5000})
    })
  }

  addNewSchoolClass(event: any): void {
    this.school.turmas = event;
    this.toastNotificationService.successMessage({
      title: 'Tudo certo',
      text: `Turmas adicionadas com sucesso`,
      timeOut: 5000})
  }

  cancel() {
    this.router.navigate(['/'])
  }

  checkCep(event: any): void {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
      this.schoolService.getAddressByCep(event).subscribe((e: ViaCepInformations) => {
        this.school.bairro = e.bairro
        this.school.localidade = e.localidade
        this.school.complemento = e.complemento
        this.school.logradouro = e.logradouro
        this.school.uf = e.uf
      })
    }, 1000)
  }

}
