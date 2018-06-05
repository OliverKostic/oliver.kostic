import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(public translate: TranslateService) {
  }

  getTranslateService(): TranslateService {
    if (!this.translate.getDefaultLang()) {
      this.translate.addLangs(['sk', 'en']);
      this.translate.setDefaultLang('sk');
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        this.translate.use(savedLang);
      } else {
        this.translate.use('sk');
      }
    }
    return this.translate;
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
