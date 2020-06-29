import {SantaSleigh} from './santa-sleigh';

export class Elf {

    present: boolean = false;

    constructor(private name: string) {
        this.name = name;
    }

    packsOntoSleigh() {
        let santaSleigh = SantaSleigh.get();
        if (this.present) {
            santaSleigh.presents.push("present");
            this.present = false;
        }
    }
}
