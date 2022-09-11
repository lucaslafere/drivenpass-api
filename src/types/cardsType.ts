import { Cards } from "@prisma/client";

export type CardsData = Omit<Cards, "id">