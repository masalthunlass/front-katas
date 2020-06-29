// @ts-ignore
import {Observable} from "rxjs";

export class ToyMachine {

   private static toyReference = 1;

    constructor(private number?: number) {
        this.number = number;
    }

    givesPresent():  Observable<string> {
        return new Observable<string>((observer) => {
                observer.next("present_"+ ToyMachine.toyReference);
                ToyMachine.toyReference++;
        });
    }

}

