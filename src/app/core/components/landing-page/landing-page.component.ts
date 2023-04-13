import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  languages: any[] = [];
  activeLang: any;
  constructor(private transloco: TranslocoService,) { }

  ngOnInit(): void {
    this.transloco.langChanges$.subscribe((lang: any) => {
      localStorage.setItem('lang', lang);
      const activeLangId = this.transloco.getActiveLang();
      this.activeLang = this.languages.find((item) => item.id === activeLangId);
    });
    const active = this.transloco.getActiveLang();
    this.languages = this.transloco.getAvailableLangs();
    this.activeLang = this.languages.find((item) => item.id === active);

    console.log(this.activeLang);
    console.log(active);


  }
  selectLang(lang: any) {
    console.log(lang);

    this.transloco.setActiveLang(lang.id);
  }
}
