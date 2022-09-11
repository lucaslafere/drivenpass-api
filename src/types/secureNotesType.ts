import { SecureNotes } from "@prisma/client";

export type SecureNotesData = Omit<SecureNotes, "id">;