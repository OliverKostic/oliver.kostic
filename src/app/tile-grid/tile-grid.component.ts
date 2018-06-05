import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.scss']
})
export class TileGridComponent implements OnInit {

  public translate: TranslateService;

  constructor(private router: Router, private languageService: LanguageService) {
    this.translate = this.languageService.getTranslateService();
  }

  ngOnInit() {
  }

  gotoTile(path: string) {
    this.router.navigate([path]);
  }

  setLanguage(lang: string) {
   this.languageService.setLanguage(lang);
  }
}

