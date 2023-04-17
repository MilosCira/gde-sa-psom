import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  languages: any[] = [];
  activeLang: any;
  constructor(private transloco: TranslocoService) { }
  ngOnInit(): void {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.transloco.setActiveLang(lang);
    } else {
      this.transloco.setActiveLang('rs');
    }
    this.transloco.langChanges$.subscribe((lang: any) => {
      // console.log(lang);

      if (!localStorage.getItem('lang') || lang != localStorage.getItem('lang')) {
        localStorage.setItem('lang', lang);
      }

      const activeLangId = this.transloco.getActiveLang();


      this.activeLang = this.languages.find((item) => item.id === activeLangId);
    });
    const active = localStorage.getItem('lang');
    this.languages = this.transloco.getAvailableLangs();
    this.activeLang = this.languages.find((item) => item.id === active);
  }
  selectLang(lang: any) {

    this.transloco.setActiveLang(lang.id);
  }
  title = 'gde-sa-psom';
}
