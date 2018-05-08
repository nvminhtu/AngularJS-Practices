import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundPipe implements PipeTransform {
    transform(value: number, toUpper: true):number {
        if(toUpper) {
            return Math.ceil(value);
        }
        return Math.floor(value);
    }
}