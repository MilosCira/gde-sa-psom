import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchP',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, searchValue: any, template?: string): any {
    if (!searchValue) return value;
    switch (template) {
      default: {
        return value.filter(
          (v: any) =>
            v.iuo_ime.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
      }
    }
  }
}
