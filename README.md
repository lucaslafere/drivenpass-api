# This is an app built to safely store and organize sensitive data, like passwords, cards, special notes, or even your neighbour's wifi password :)


# Project built with NodeJS, using typescript.

## Routes:

### Users:
* POST:("/sign-up") -- Creates an account, expects a valid email and password (min 10 characters);
* POST:("/sign-in") -- Logs in, expects a valid email and password (min 10 characters), from an existing account. Returns a JWT token, used in every other route after login

### Cards (Authenticated route, send jwt token via Authorization Headers, Bearer token):
* POST:("/cards") -- Creates a card, expects a cardNumber, cardHolderName, securityCode (3 numbers), expirationDate (MM/YY), password, isVirtual (strict boolean, no truthy or falsy), type (debit/credit/both), label;
* GET: ("/cards") -- Gets a list of all cards from this specific user that is logged in.
* GET: ("/cards/:cardId") -- Gets information from this specific card, using the params cardId.
* DELETE: ("/cards/:cardId") -- Deletes a specific card, using the params cardId.

### Credentials (Authenticated route, send jwt token via Authorization Headers, Bearer token):
* POST:("/credentials") -- Creates a credential note for a website account, expects an url, username, password, label;
* GET: ("/credentials") -- Gets a list of all credentials from this specific user that is logged in.
* GET: ("/credentials/:credentialId") -- Gets information from this specific credential, using the params credentialId.
* DELETE: ("/credentials/:credentialId") -- Deletes a specific credential, using the params credentialId.

### Wifi (Authenticated route, send jwt token via Authorization Headers, Bearer token):
* POST:("/wifis") -- Creates a wifi, expects a networkName, password, label;
* GET: ("/wifis") -- Gets a list of all wifis from this specific user that is logged in.
* GET: ("/wifis/:wifiId") -- Gets information from this specific wifi, using the params wifiId.
* DELETE: ("/wifis/:wifiId") -- Deletes a specific wifi, using the params wifiId.

### Secure-Notes (Authenticated route, send jwt token via Authorization Headers, Bearer token):
* POST:("/secure-note") -- Creates a secure note, expects a title (max 50 characters), note (max 1000 characters);
* GET: ("/secure-note") -- Gets a list of all secure notes from this specific user that is logged in.
* GET: ("/secure-note/:secureNoteId") -- Gets information from this specific secure note, using the params secureNoteId.
* DELETE: ("/secure-note/:secureNoteId") -- Deletes a specific secure note, using the params secureNoteId.
