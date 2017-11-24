import { Customer } from "./customer";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {

    transform(records: Array<any>, args: any): any {
        records = records || []; 
        return records.sort(function (a: any, b: any) {
            
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
}