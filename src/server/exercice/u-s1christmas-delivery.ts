import {ToyMachine} from "./toy-machine";
import {Elf} from "./elf"

export class US1christmasDelivery {

    public constructor(private toyMachine: ToyMachine, private deliverElf :Elf) {
        this.toyMachine = toyMachine;
        this.deliverElf = deliverElf;
    }

    deliverPresentTheUS1Way() {
        let present = this.toyMachine.givesPresent();
        this.deliverElf.packsOnto(present);
    }
}

(() => {

    const christmasDelivery = new US1christmasDelivery( new ToyMachine(), new Elf());
    christmasDelivery.deliverPresentTheUS1Way();

})();
