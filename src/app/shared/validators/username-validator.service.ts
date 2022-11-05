import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const username = control.value;

    return this.http.get<any[]>(`http://localhost:3000/usuarios?username=${username}`).pipe(
      // delay(2000),
      map(resp => {
        return (resp.length == 0) ? (null) : {usernameUsado: true}
      })
    )
  }
}
