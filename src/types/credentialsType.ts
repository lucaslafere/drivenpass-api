import { Credentials } from "@prisma/client";

export type CredentialsData = Omit <Credentials, 'id'>