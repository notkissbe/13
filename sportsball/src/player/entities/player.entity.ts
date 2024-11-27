import { Team } from "@prisma/client";

export class Player {
    name: string;
    goalCount: number;
    birthDate: Date;
    team: Team;
}
