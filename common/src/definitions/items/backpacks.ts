import { ItemType, ObjectDefinitions, type ItemDefinition, type ReferenceTo } from "../../utils/objectDefinitions";
import { type HealingItemDefinition } from "./healingItems";
import { type AmmoDefinition } from "./ammos";
import { type ThrowableDefinition } from "./throwables";

export interface BackpackDefinition extends ItemDefinition {
    readonly itemType: ItemType.Backpack
    readonly level: number
    readonly defaultTint?: number
    readonly maxCapacity: Record<ReferenceTo<HealingItemDefinition | AmmoDefinition | ThrowableDefinition>, number>
}

export const Backpacks = new ObjectDefinitions<BackpackDefinition>([
    {
        idString: "bag",
        name: "Bag",
        itemType: ItemType.Backpack,
        level: 0,
        maxCapacity: {
            "gauze": 5,
            "medikit": 1,
            "cola": 2,
            "tablets": 1,
            "12g": 15,
            "556mm": 90,
            "762mm": 90,
            "9mm": 120,
            "4g": 12,
            "338lap": 18,
            "50cal": 40,
            "power_cell": Infinity,
            "curadell": 1,
            "firework_rocket": 10,
            "frag_grenade": 3,
            "smoke_grenade": 3,
            "c4": 2,
            "confetti_grenade": 5
        },
        noDrop: true
    },
    {
        idString: "basic_pack",
        name: "Basic Pack",
        itemType: ItemType.Backpack,
        level: 1,
        maxCapacity: {
            "gauze": 10,
            "medikit": 2,
            "cola": 5,
            "tablets": 2,
            "12g": 30,
            "556mm": 180,
            "762mm": 180,
            "9mm": 240,
            "4g": 20,
            "338lap": 24,
            "50cal": 60,
            "power_cell": Infinity,
            "curadell": 2,
            "firework_rocket": 20,
            "frag_grenade": 6,
            "smoke_grenade": 6,
            "c4": 4,
            "confetti_grenade": 9
        },
        defaultTint: 0xeeeeee
    },
    {
        idString: "regular_pack",
        name: "Regular Pack",
        itemType: ItemType.Backpack,
        level: 2,
        maxCapacity: {
            "gauze": 15,
            "medikit": 3,
            "cola": 10,
            "tablets": 3,
            "12g": 60,
            "556mm": 240,
            "762mm": 240,
            "9mm": 330,
            "4g": 28,
            "338lap": 30,
            "50cal": 80,
            "power_cell": Infinity,
            "curadell": 3,
            "firework_rocket": 30,
            "frag_grenade": 9,
            "smoke_grenade": 9,
            "c4": 6,
            "confetti_grenade": 12
        },
        defaultTint: 0x63754b
    },
    {
        idString: "tactical_pack",
        name: "Tactical Pack",
        itemType: ItemType.Backpack,
        level: 3,
        maxCapacity: {
            "gauze": 30,
            "medikit": 4,
            "cola": 15,
            "tablets": 4,
            "12g": 90,
            "556mm": 300,
            "762mm": 300,
            "9mm": 420,
            "4g": 36,
            "338lap": 42,
            "50cal": 100,
            "power_cell": Infinity,
            "curadell": 4,
            "firework_rocket": 40,
            "frag_grenade": 12,
            "smoke_grenade": 12,
            "c4": 8,
            "confetti_grenade": 16
        },
        defaultTint: 0x3f3f3f
    }
]);
