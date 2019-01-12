import { Injectable } from '@angular/core';
import { icon } from '@fortawesome/fontawesome';

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

  dialogTextes = [
    {
      title: 'easyInstall',
      hebrewTitle:'התקנה פשוטה',
      englishTitle:'easy to install',
      hebrewText:'התקנת המערכת: מערכת EVERHOT מתאימה לכל בית בגלל שלא דורשת תשתית תקשורת חדשה וחיבור לאינטרנט אלא מתלבשת על תשתית חשמל קיימת בעזרת שימוש בטכנולוגיית PLC (Power Line Communication).',
      iconUrl: 'ICON2.png'
    },
    {
      title: '',
      hebrewTitle:'',
      englishTitle:'',
      hebrewText:'',
      iconUrl: ''
    },{
      title: '',
      hebrewTitle:'',
      englishTitle:'',
      hebrewText:'',
      iconUrl: ''
    },{
      title: '',
      hebrewTitle:'',
      englishTitle:'',
      hebrewText:'',
      iconUrl: ''
    },{
      title: '',
      hebrewTitle:'',
      englishTitle:'',
      hebrewText:'',
      iconUrl: ''
    },{
      title: '',
      hebrewTitle:'',
      englishTitle:'',
      hebrewText:'',
      iconUrl: ''
    },{
      title: '',
      hebrewTitle:'',
      englishTitle:'',
      hebrewText:'',
      iconUrl: ''
    },
  ];
   index = -1;
 
  filteredObj = function(str){
    this.dialogTextes.find(function(item, i){
      if(item.name === str){
        this.index = i;
        return i;
      }
    });
    
  } 
}
