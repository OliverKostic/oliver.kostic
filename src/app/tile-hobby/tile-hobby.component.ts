import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-tile-hobby',
  templateUrl: './tile-hobby.component.html',
  styleUrls: ['./tile-hobby.component.scss']
})
export class TileHobbyComponent implements OnInit {

  public translate: TranslateService;

  constructor(private router: Router, private languageService: LanguageService) {
    this.translate = this.languageService.getTranslateService();
  }
  ngOnInit() {
  }

  public jumpBackToHomePage() {
    this.router.navigate(['/home']);
  }
}
