import { HttpClient } from '@angular/common/http';
import {
    TRANSLOCO_LOADER,
    Translation,
    TranslocoLoader,
    TRANSLOCO_CONFIG,
    translocoConfig,
    TranslocoModule
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<Translation> {
        return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }
}

@NgModule({
    exports: [TranslocoModule],
    providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs: [
                    {
                        id: 'rs',
                        label: '/assets/svg/rs.svg'
                    },
                    {
                        id: 'en',
                        label: '/assets/svg/en.svg'
                    }
                ],
                defaultLang: 'rs',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: environment.production,
            })
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }
    ]
})
export class TranslocoRootModule { }
