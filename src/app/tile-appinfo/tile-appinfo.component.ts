import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-tile-appinfo',
  templateUrl: './tile-appinfo.component.html',
  styleUrls: ['./tile-appinfo.component.scss']
})
export class TileAppinfoComponent implements OnInit {

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
