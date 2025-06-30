import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {WorkExperienceTile} from './work-experience-tile';

@Component({
  selector: 'work-experience',
  imports: [RouterOutlet, WorkExperienceTile],
  templateUrl: 'work-experience.html',
  styleUrl: 'timeline.scss'
})

export class WorkExperience {
  protected workExperience = [
    ["octosus.svg", "UX/UI designer", "OctoSuS marketing", "únor 2025", "nyní"],
    ["jpower8.png", "UX/UI designer", "jPower8", "říjen 2021", "prosinec 2024"],
    ["ceska-posta.svg", "Doručovatel balíků", "Česká pošta", "červenec 2021", "září 2021"],
    ["alza.svg", "Konzultant Prodeje", "Alza.cz", "říjen 2020", "červen 2021"]
  ]
}
