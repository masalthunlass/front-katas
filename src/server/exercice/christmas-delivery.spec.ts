import {Us2ChristmasDelivery} from "./christmas-delivery";
import {ToyMachine} from "./toy-machine";
import {Elf} from "./elf";
// @ts-ignore
import {Observable} from "rxjs";
import {SantaSleigh} from "./santa-sleigh";


describe('christmas delivery ', () => {
    afterEach(() => {
        SantaSleigh.get().presents = [];
    });

    test('should have a mrs claus', () => {
        const toyMachine: Array<ToyMachine> = [new ToyMachine(1)];
        const elf: Array<Elf> = [new Elf("Mo")];
        let us2ChristmasDelivery = new Us2ChristmasDelivery(toyMachine, elf);
        expect(us2ChristmasDelivery.mrsClaus).toBeDefined();
    });

    test('should be done when one toy machine and one elf', done => {
        let santaSleigh = SantaSleigh.get();
        expect(santaSleigh.presents.length).toEqual(0);

        const toyMachines: Array<ToyMachine> = [new ToyMachine(1)];
        let elf = new Elf("Mo");
        const elves: Array<Elf> = [elf];

        const mockElf: Observable<Elf> = new Observable<Elf>((observer) => {
            elf.present = true;
            observer.next(elf);
        });

        let us2ChristmasDelivery = new Us2ChristmasDelivery(toyMachines, elves);
        let mrsClausAssignPresentToAnElfSpy = spyOn(us2ChristmasDelivery.mrsClaus, 'assignPresentToAnElf').and.returnValue(mockElf);
        let mrsClausAddAvailableElfSpy = spyOn(us2ChristmasDelivery.mrsClaus, 'addAvailableElf');

        us2ChristmasDelivery.deliverPresents();
        done();

        expect(mrsClausAssignPresentToAnElfSpy).toBeCalledTimes(1);
        expect(mrsClausAddAvailableElfSpy).toBeCalledTimes(1);
        expect(santaSleigh.presents.length).toEqual(1);

    });
});
