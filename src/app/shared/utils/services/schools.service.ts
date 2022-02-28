import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViaCepInformations } from '../models/viaCepInformations';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private http: HttpClient) { }


  getSchools(): Observable<School[]> {
    return this.http.get<School[]>('http://localhost:3000/Schools')
  }

  getSchoolById(id: number): Observable<School> {
    return this.http.get<School>(`http://localhost:3000/Schools/${id}`)
  }

  createNewSchool(object: School): Observable<School> {
    return this.http.post<School>(`http://localhost:3000/Schools/`, object)
  }

  editSchool(object: School): Observable<School> {
    console.log(object);
    return this.http.put<School>(`http://localhost:3000/Schools/${object.id}`, object)
  }

  deleteSchools(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/Schools/${id}`)
  }

  getAddressByCep(cep: number): Observable<ViaCepInformations> {
    return this.http.get<ViaCepInformations>(`http://viacep.com.br/ws/${cep}/json/`)
  }

}
