import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public elementsToCkeckout: { id: number; name: string; price: number; Checked: boolean; quantity: number }[];



  constructor() { }
}
