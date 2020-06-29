import {ToyMachine} from "./toy-machine";

describe('Toy Machine ', () => {
// US 1
    test('should give present', done => {
        const toyMachine = new ToyMachine();
        toyMachine.givesPresent().subscribe(present => {
            expect(present).not.toBeNull();
            expect(present).toBe("present_1");
            done();
        });
    });

    test('should increment present number when it gives present', done => {
        const toyMachine = new ToyMachine();
        toyMachine.givesPresent().subscribe(() => {
            done();
        });
        toyMachine.givesPresent().subscribe(present => {
            expect(present).not.toBeNull();
            expect(present).toBe("present_2");
            done();
        });
    });
});





