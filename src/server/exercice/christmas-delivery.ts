import {ToyMachine} from "./toy-machine";
import {Elf} from "./elf"
import {MrsClaus} from "./mrs-claus";
// @ts-ignore
import {Observable} from 'rxjs';
// @ts-ignore
import {concatAll} from "rxjs/operators";


export class Us2ChristmasDelivery {

    private _presents: Observable<string>;
    private _mrsClaus: MrsClaus;

    public constructor(toyMachines: Array<ToyMachine>,
                       deliverElves: Array<Elf>) {
        this._mrsClaus = new MrsClaus(deliverElves);
        this._presents = new Observable<Observable<string>>(
            (observer) => {
                toyMachines.forEach(toyMachine => {
                    observer.next(toyMachine.givesPresent());
                });
            }).pipe(concatAll());

    }

    get mrsClaus() {
        return this._mrsClaus;
    }



    deliverPresents() {
        this._presents.subscribe(() => {
            let busyElf = this._mrsClaus.assignPresentToAnElf();
            busyElf.subscribe( (busyElf: Elf) => {
                busyElf.packsOntoSleigh();
                this._mrsClaus.addAvailableElf(busyElf);
            })
        });

    }

}
