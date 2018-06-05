import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-tile-contact',
  templateUrl: './tile-contact.component.html',
  styleUrls: ['./tile-contact.component.scss']
})
export class TileContactComponent implements OnInit {

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
