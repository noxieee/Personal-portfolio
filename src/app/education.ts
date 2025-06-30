import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {EducationTile} from './education-tile';

@Component({
  selector: 'education',
  imports: [RouterOutlet, EducationTile],
  templateUrl: 'education.html',
  styleUrl: 'timeline.scss'
})

export class Education {
  protected education = [
    {
      isDone: false,
      data: ["vse_fis.png", "https://fis.vse.cz/", "VŠE FIS", "Ing. | Vývoj informačních systémů", "září 2025", "nyní", '']
    },
    {
      isDone: true,
      data: ["vse_fis.png", "https://fis.vse.cz/", "VŠE FIS", "Bc. | Aplikovaná informatika", "Splněno", "červen 2025", "https://insis.vse.cz/zp/index.pl?podrobnosti_zp=91026;zpet=;prehled=vyhledavani;vzorek_zp=vojt%C4%9Bch%20keder;kde=nazev;kde=autor;kde=klic_slova;filtr_stav=bez;zobrazit=Zobrazit;typ=1;typ=2;typ=3;typ=5;typ=6;typ=8;fakulta=10;fakulta=40;fakulta=60;fakulta=20;fakulta=30;fakulta=50;fakulta=114;obhajoba=2025;obhajoba=2024;obhajoba=2023;jazyk=1;jazyk=3;jazyk=2;jazyk=182;jazyk=22;jazyk=23;jazyk=4;jazyk=27;jazyk=136;jazyk=28;jazyk=-1;lang=cz"]
    }
  ]
}
