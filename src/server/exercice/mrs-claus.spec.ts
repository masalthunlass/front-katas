import {MrsClaus} from './mrs-claus';
import {Elf} from "./elf";
// US 2
/*test('Mrs Claus should gives present', () => {
    const mrsClaus = new MrsClaus()
    const present: string = "present";
    let receivedObject = mrsClaus.givesPresent(present);
    expect(receivedObject).toBe("present_from_Mrs_Claus");
});*/


describe('Mrs Claus => ', () => {
    test('  should the list of available elves be the deliver elves at first ', () => {
        const deliverElves: Array<Elf> = [new Elf("Tom"), new Elf("Emmy")];
        const mrsClaus = new MrsClaus(deliverElves);
        expect(mrsClaus.availableElves).toEqual(deliverElves);
    });

});

