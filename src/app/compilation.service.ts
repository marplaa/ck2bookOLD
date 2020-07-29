import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompilationService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string): void{
    this.socket.emit('message', msg);
  }

/*  getMessage(): Observable<any>{
    return this.socket
      .fromEvent('message')
      .pipe(map((data) => data.msg));
  }*/


}
