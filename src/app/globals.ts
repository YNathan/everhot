import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  languageSelected: string = 'hebrew';

  languages = [
    {
      value: 'hebrew',
      viewValue: 'עברית'
    }, {
      value: 'english',
      viewValue: 'English'
    }, {
      value: 'russian',
      viewValue: 'Р усский'
    }, {
      value: 'franch',
      viewValue: 'Francais'
    }
  ];
}
