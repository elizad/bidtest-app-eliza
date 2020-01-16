This project was bootstrapped with [Create React App]. 
It using the local mongo db so it need to had the sever part open, preferable running in parallel for the best speed of bids api

## How to run it
1 - dependencies: 
mongo 
mongodb-win32-x86_64-2012plus-4.2.2-signed  , 
npm (6.12.1), 
node
(v13.1.0) installed locally

2 - download the repo locally
https://github.com/Piclo/code-challenge-elizad/tree/client/
https://github.com/Piclo/code-challenge-elizad/tree/client/server
3 Go to "server" folder - cd server
(from console or from visual code console or from webpack console)
- npm install
- npm run start or npm start (is stating the nodemon for dev
environment , for production I remove the nodemon library )
(docker is missing because I run out of space on my actual computer on
drive C )
The app is running on http://localhost:7000/api/{name}

4 Go to client folder - cd client from a new console
- npm install
- npm start

The app is running on http://localhost:3000


Piclo bidding challenge :tada: :battery: :chart_with_upwards_trend: :metal:

Thanks for your interest in joining the Piclo team. Please complete the tasks below. You should spend about 2 hours on this. If you'd like to spend longer, then check out a separate branch for additional work.

We use Django and VueJS, but we're open to other technologies.

## Business Logic

The following logic closely mirrors that of our production system. Depending on which track you take, some of it may not be relevant, so feel free to skim this part on first read.

The [Piclo platform](https://picloflex.com) allows **buyers** (system operators) to advertise **competitions** for procuring energy from **sellers** (flex providers). Sellers can then submit **bids** against competitions.

The following relations are in place:

- a buyer has many competitions
- a competition has many bids
- a seller has many bids

A bid is **successful** if the following is true:

- its `offered_capacity` is equal to or greater than than the competition's `minimum_capacity`
- its `accepted` state is true
- its associated `seller`'s `verified` state is true
- it was created within the associated competition's `open` and `closed` dates

A competition has the following states:

- _pending_ when the competition's `open` and `closed` date/times are in the future
- _open_ when the `open` value is in the past, but `closed` is in the future
- _closed_ when `open` and `closed` are in the past

Assume competitions' `open` / `closed` date/times are always sequential

Capacity values use MW units

## Task

Dummy data from backend `buyers`, `sellers`, `competitions` and `bids` microservices can be found in the `data` folder.

Choose the track most suited to demonstrate your abilities.

### Frontend track

1. Build a data structure representing a list of **successful** bids by ID.
2. Build a data structure which to represent **closed** competitions, containing:

- The competition's `name` and that of its associated **buyer**
- the total value of successful bids in the competition
- the total volume of `offered_capacity` for successful bids

3. Build a data structure to represent competitions including its `name` and a value representing a percentage of **successful** bids
4. Build a list of the top 10 buyers by number of competitions (irrespective of status)
5. Display this data on a single page. We've intentionally left this vague.
6. Update the README with any provisioning steps for running the code and/or tests

Assume you have lazy backend colleagues and data returned from the backend has not yet implemented the above logic (aside from competitions' `open` and `closed` dates being sequential)
