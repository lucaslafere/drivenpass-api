import { Wifis } from "@prisma/client";

export type WifisData = Omit<Wifis, "id">