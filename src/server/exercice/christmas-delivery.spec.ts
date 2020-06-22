import {Elf} from "./elf";
import {US1christmasDelivery} from "./u-s1christmas-delivery";
import {ToyMachine} from "./toy-machine";

//US1
test('should deliver present the US 1 way', () => {
   const christmasDelivery = new US1christmasDelivery( new ToyMachine(), new Elf());
   const toyMachineSpy = jest.spyOn(christmasDelivery['toyMachine'], 'givesPresent');
   const deliverElfSpy = jest.spyOn(christmasDelivery['deliverElf'], 'packsOnto');
   christmasDelivery.deliverPresentTheUS1Way();
   expect(toyMachineSpy).toHaveBeenCalled();
   expect(deliverElfSpy).toHaveBeenCalled();
});
