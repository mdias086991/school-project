import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  constructor(private _service: NotificationsService) { }

  successMessage(params: any): any {
    return this._service.success(params.title, params.text, {
        timeOut: params.timeOut,
        animate: 'fade',
        pauseOnHover: false,
        clickToClose: true
    })
}
}
