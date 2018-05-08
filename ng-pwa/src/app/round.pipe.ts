import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundPipe implements PipeTransform {
    transform(value: number, toUpper: true, addTo: number):number {
        if(toUpper) {
            return Math.ceil(value + addTo);
        }
        return Math.floor(value + addTo);
    }
}