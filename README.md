# bidding :tada: :battery: :chart_with_upwards_trend: :metal:



## Business Logic

How to run it 
1  - dependencies:  mongo, npm (6.12.1), node (v13.1.0) installed locally 
2 -  download the repo locally  
3  Go to  "server" folder - cd server 
(from console or from visual code console  or from webpack console)
 - npm install
 - npm run start or npm start (is stating the nodemon   for dev environment , for production I remove the nodemon library )
 (docker is missing because I run out of space on my actual computer on drive C ) 
The app is running on http://localhost:7000/api/{name}   
 
4 Go to client folder - cd client from a new console 
- npm install 
- npm start 

The app is running on http://localhost:3000 


The following logic closely mirrors that of our production system. Depending on which track you take, some of it may not be relevant, so feel free to skim this part on first read.

The [test platform]() allows **buyers** (system operators) to advertise **competitions** for procuring energy from **sellers** (flex providers). Sellers can then submit **bids** against competitions.

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

 - *pending* when the competition's `open` and `closed` date/times are in the future
 - *open* when the `open` value is in the past, but `closed` is in the future
 - *closed* when `open` and `closed` are in the past

Assume competitions' `open` / `closed` date/times are always sequential

Capacity values use MW units

Dummy data from backend `buyers`, `sellers`, `competitions` and `bids` microservices can be found in the `data` folder.







