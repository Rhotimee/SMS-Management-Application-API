# SMS-Management-Application-API

## Overview
This SMS Management system is an API which helps to manage contacts and sms

## Project Structure
The project structure follows the **MVC** (Model View Controller) pattern.
```
├── src
│   ├── config
│   │   └──  mongoConfig.js
│   ├── controller
│   │   ├── Contact.js
│   │   └── Sms.js
│   │   └── User.js
│   ├── handlers
│   │   ├── derrorHandlers.js
│   ├── index.js
│   ├── middlewares
│   │   ├── index.js
│   ├── models
│   │   ├── Contact.js
│   │   └── Sms.js
│   │   └── User.js
│   └── routes
│       ├── index.js
│   ├── server.js
```

## Requirements

* Node.js v10.x or higher
* MongoDB (local or remote)

## Getting Started

```
$ git clone https://github.com/Rhotimee/SMS-Management-Application-API
$ cd sms-management
$ yarn install
$ yarn dev                     # For development purpose
$ yarn start                   # To run production build
```

You should now be able to access the API via http://localhost:PORT/api/v1/

**NOTE:** Create a `.env` file configuration following the `.env.sample`.

## Project Details
`User:`
 - A user can signup
 - A user can signin
  
`SMS:`
 - user can send sms
 - user can receiving sms
 - use can see message 
 - sms status

`Contact:`
- name of person
- phone number of person

`The following relationships are represented in the model:`
- Authenticated User is linked to SMS and Contacts
- All sms sent by a Contact are linked to them
- All sms sent to a Contact are linked to them
- Deleting a contact removes the messages they sent and references to messages they received.

## API Endpoints

<table>
    <tr><th>HTTP VERB</th><th>ENDPOINTS</th><th>DESCRIPTION</th><th>QUERY</th></tr>
    <tr><td>GET</td><td>/api/v1/contacts</td><td>Gets list of contacts</td><td></td></tr>
    <tr><td>POST</td><td>/api/v1/contacts</td><td>Save a Contact</td><td></td></tr>
    <tr><td>DELETE</td><td>/api/v1/contacts/:_id</td><td>Delete a Contact</td><td></td></tr>
    <tr><td>GET</td><td>/api/v1/sms</td><td>Gets an sms</td><td></td></tr>
    <tr><td>POST</td><td>/api/v1/sms</td><td>send an sms</td><td></td></tr>
    <tr><td>GET</td><td>/api/v1/sms/sent</td><td>List sent sms</td><td></td></tr>
    <tr><td>GET</td><td>/api/v1/sms/received</td><td>List received sms</td><td></td></tr>
    <tr><td>POST</td><td>/api/v1/auth/signin</td><td>signin a user</td><td></td></tr>
    <tr><td>POST</td><td>/api/v1/auth/signup</td><td>signup a user</td><td></td></tr>
</table>
