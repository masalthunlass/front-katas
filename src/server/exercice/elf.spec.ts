import {Elf} from './elf';
import {SantaSleigh} from './santa-sleigh';

describe('elf ', () => {

    afterEach(() => {
        SantaSleigh.get().presents = [];
    });

    test('should pack present onto santa sleigh when they have one', () => {
        const elf = new Elf("Bob");
        expect(SantaSleigh.get().presents.length).toBe(0);
        elf.present = true;
        elf.packsOntoSleigh();
        expect(SantaSleigh.get().presents.length).toBe(1);
    });

    test('should not pack present onto santa sleigh when they have none', () => {
        const elf = new Elf("Bob");
        expect(SantaSleigh.get().presents.length).toBe(0);
        elf.present = false;
        elf.packsOntoSleigh();
        expect(SantaSleigh.get().presents.length).toBe(0);
    });
});
