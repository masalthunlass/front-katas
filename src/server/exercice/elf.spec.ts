import {Elf} from "./elf";
import {SantaSleigh} from "./santa_sleigh";

// US1
test('elf should packs present onto santa sleigh', () => {
    const elf = new Elf();
    expect(SantaSleigh.get().presents.length).toBe(0);
    const present: string = "present";
    elf.packsOnto(present);
    expect(SantaSleigh.get().presents.length).toBe(1);
});
