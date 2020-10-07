import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

    hello: any;
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */

    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private http: HttpClient
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
        this.http.get('http://localhost:5000/api/base').subscribe(a => {
            this.hello = a;
        })
    }
}
