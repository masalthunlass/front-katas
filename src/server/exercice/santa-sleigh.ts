export class SantaSleigh {
    private static sleight: SantaSleigh;
    presents: string[] = [];

    private constructor() {
    }

    public static get(): SantaSleigh {
        if (!SantaSleigh.sleight) {
            SantaSleigh.sleight = new SantaSleigh();
        }
        return SantaSleigh.sleight;
    }

}
