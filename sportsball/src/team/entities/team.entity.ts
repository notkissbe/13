import { Player } from "@prisma/client";

export class Team {
    country: string;
    players: Player[];
}
