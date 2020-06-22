import {ToyMachine} from "./toy-machine";

// US 1
test('toy machine should give present', () => {
    const toyMachine = new ToyMachine();
    const present = toyMachine.givesPresent();
    expect(present).not.toBeNull();
    expect(present).toBe("present");
});






