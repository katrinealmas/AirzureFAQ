import { Pipe, PipeTransform } from '@angular/core';
 
    @Pipe({name: 'question'})
export class SearchPipe implements PipeTransform {

      transform(questions: any, searchText: any): any {
         if(searchText == null) return questions;

         return questions.filter(function (question: any){
          return question.Question.toLowerCase().indexOf(searchText) > -1;
        })
      }
    }