import {MrsClaus} from "./mrs_claus";
// US 2
test('Mrs Claus should gives present', () => {
    const mrsClaus = new MrsClaus()
    const present: string = "present";
    let receivedObject = mrsClaus.givesPresent(present);
    expect(receivedObject).toBe(present);
});
