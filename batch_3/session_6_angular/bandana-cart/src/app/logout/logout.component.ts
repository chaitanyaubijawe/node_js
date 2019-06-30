import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  router:Router;
  constructor(router:Router) {
    this.router= router;
  }

  ngOnInit() {
    localStorage.clear();
    this.router.navigateByUrl("/login")
  }



}
