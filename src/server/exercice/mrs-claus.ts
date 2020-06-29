// @ts-ignore
import {EMPTY, Observable} from "rxjs";
import {Elf} from "./elf";

export class MrsClaus {

    private _availableElves: Array<Elf> = [];

    constructor(private deliverElves: Array<Elf>) {
        this.deliverElves = deliverElves;
        this._availableElves = deliverElves;
    }

    get availableElves() {
        return this._availableElves;
    }

    addAvailableElf(elf: Elf) {
        this._availableElves.push(elf);
    }

    assignPresentToAnElf(): Observable<Elf> {
        let availableElf = this.availableElves.pop();
        if (availableElf === undefined) return EMPTY;
        return new Observable<Elf>((observer) => {
            availableElf.present = true;
            observer.next(availableElf);
        });

    }
}
