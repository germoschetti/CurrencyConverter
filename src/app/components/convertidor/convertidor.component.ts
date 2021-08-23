import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad: number
  tengo: string;
  quiero: string
  total: any;
  monedas: string[]
  constructor() {

    this.tengo = 'UYU';
    this.quiero = 'USD';
    this.cantidad = 0;
    this.total = 0;
    this.monedas = ['UYU', 'USD', 'CAD', 'EUR', 'GBP', 'BRL'];

  }

  ngOnInit(): void {
  }

  convertir() {
    let tengo = this.tengo
    let quiero = this.quiero
    let cantidad = this.cantidad

    if (tengo == quiero) {
      this.total = cantidad
    }

    switch (tengo) {
      case 'UYU':
        if (quiero == 'USD') {
          this.total = (cantidad * 0.023).toFixed(2);
        }
        if (quiero == 'CAD') {
          this.total = (cantidad * 0.028).toFixed(2);
        }
        if (quiero == 'EUR') {
          this.total = (cantidad * 0.019).toFixed(2);
        }
        if (quiero == 'GBP') {
          this.total = (cantidad * 0.016).toFixed(2);
        }
        if (quiero == 'BRL') {
          this.total = (cantidad * 0.12).toFixed(2);
        }
        break
      case 'USD':
        if (quiero == 'UYU') {
          this.total = (cantidad * 43.80).toFixed(2);
        }
        if (quiero == 'CAD') {
          this.total = (cantidad * 1.25).toFixed(2);
        }
        if (quiero == 'EUR') {
          this.total = (cantidad * 0.84).toFixed(2);
        }
        if (quiero == 'GBP') {
          this.total = (cantidad * 0.72).toFixed(2);
        }
        if (quiero == 'BRL') {
          this.total = (cantidad * 5.15).toFixed(2);
        }
        break

      case 'CAD':
        if (quiero == 'UYU') {
          this.total = (cantidad * 33.13).toFixed(2);
        }
        if (quiero == 'USD') {
          this.total = (cantidad * 0.80).toFixed(2);
        }
        if (quiero == 'EUR') {
          this.total = (cantidad * 0.7).toFixed(2);
        }
        if (quiero == 'GBP') {
          this.total = (cantidad * 0.6).toFixed(2);
        }
        if (quiero == 'BRL') {
          this.total = (cantidad * 4.13).toFixed(2);
        }
        break
      case 'EUR':
        if (quiero == 'UYU') {
          this.total = (cantidad * 51.2).toFixed(2);
        }
        if (quiero == 'USD') {
          this.total = (cantidad * 1.19).toFixed(2);
        }
        if (quiero == 'CAD') {
          this.total = (cantidad * 1.5).toFixed(2);
        }
        if (quiero == 'GBP') {
          this.total = (cantidad * 0.85).toFixed(2);
        }
        if (quiero == 'BRL') {
          this.total = (cantidad * 6.1).toFixed(2);
        }
        break
      case 'GBP':
        if (quiero == 'UYU') {
          this.total = (cantidad * 60.9).toFixed(2);
        }
        if (quiero == 'USD') {
          this.total = (cantidad * 1.4).toFixed(2);
        }
        if (quiero == 'CAD') {
          this.total = (cantidad * 1.7).toFixed(2);
        }
        if (quiero == 'EUR') {
          this.total = (cantidad * 1.2).toFixed(2);
        }
        if (quiero == 'BRL') {
          this.total = (cantidad * 7.2).toFixed(2);
        }
        break
      case 'BRL':
        if (quiero == 'UYU') {
          this.total = (cantidad * 8.5).toFixed(2);
        }
        if (quiero == 'USD') {
          this.total = (cantidad * 0.2).toFixed(2);
        }
        if (quiero == 'CAD') {
          this.total = (cantidad * 0.24).toFixed(2);
        }
        if (quiero == 'EUR') {
          this.total = (cantidad * 0.16).toFixed(2);
        }
        if (quiero == 'GBP') {
          this.total = (cantidad * 0.15).toFixed(2);
        }
        break
        
    }

  }

}
