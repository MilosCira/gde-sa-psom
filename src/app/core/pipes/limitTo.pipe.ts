import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class TruncatePipe {
    transform(value: any, args: any) {

        let limit = args ? parseInt(args, 10) : 10;
        let trail = '...';

        return value.length > limit ? value.slice(0, limit) + trail : value;
    }
}