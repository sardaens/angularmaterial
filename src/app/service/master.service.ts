import { Injectable } from '@angular/core';
import {colorentity } from 'src/app/Entity/colorentity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  GetColorList():colorentity[] {
    return [
      {code:'c1',name:'Red'},
      {code:'c2',name:'Blue'},
      {code:'c3',name:'Yellow'},
      {code:'c4',name:'MyDevelop'}
    ]
  }
}
