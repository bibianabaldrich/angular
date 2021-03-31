import { Component, OnInit } from '@angular/core';

@Component({
  // Selector hace referencia al html y se convierte en una etiqueta
  // el templateUrl: es el html correspondiente
  // StyleUrl es el css correspondiente
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

// Sintaxis de tepyscript
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
