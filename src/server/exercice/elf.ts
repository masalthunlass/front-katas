import {SantaSleigh} from "./santa_sleigh";

export class Elf {

    packsOnto( present: string) {
        let santaSleigh = SantaSleigh.get();
        santaSleigh.presents.push(present);
    }
}
