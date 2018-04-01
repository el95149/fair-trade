# Fair Trade
A proof of concept Trade Message application.

## Features
* Spring Boot based REST API (Spring Data REST, JPA)
* Liquibase controlled MySQL database
* Security scheme, including banning service
* Rate limiter for specific requests
* Vue.js based front-end (with webpack packaging)
* Bootstrap 4 based template (CoreUI)
* Web-socket notifications

## Requirements
* MySQL: 5.x+
* JDK: 1.8+
* Node.js: 6.0+
* npm: 5.5+

## Installation
* Install front-end 
```console
$ cd fair-trade-client
$ npm install
```
* Prepare database. Create two empty database schemas: 
    - fairtrade
    - fairtrade_test
* Default MySQL user/pass set are root/root (Use application.properties to override them)
* Build application (front-end is bundled along with REST, for easier deployment and testing)
```console
$ cd ..
$ mvn clean package -Pproduction
```
* Execute! (assuming all tests pass)
```console
$ cd ..
$ mvn clean package -Pproduction
$ java -jar -Dspring.profiles.active=production fair-trade-rest/target/fair-trade-rest-0.0.1-SNAPSHOT.jar
```

## Usage
### REST API
#### Create Trade Message
```
POST http://localhost:8080/api/tradeMessages
Content-type: application/json
```
Sample request body:
```
{
	"currencyFrom": "EUR",
	"currencyTo": "USD",
	"amountSell": 100.12,
	"amountBuy": 120.55,
	"rate": 0.89,
	"timePlaced": "2018-04-01T22:00:00.000+0300",
	"originatingCountry": "GR"
}
```
* Don't forget to include a Basic HTTP Auth header, using: johnwick@syndicate.com/johnie123. This corresponds to a sample user, inserted during initialization.
* Two database roles exist for users, 'USER' and 'ADMIN'. Regular users can only create Trade Messages for themselves. Administrators can do so for anyone else, by including the following property in the request body:
* A sample ADMIN user also exists: admin@fairtrade.com/admin123
```
"user": "http://localhost:8080/api/users/<userId>"
```
#### User administration
As per Spring Data REST typical guidelines, users bearing the 'ADMIN' role can adminster other users, using the relevant end-points under:
```
GET/POST/PUT/PATCH/DELETE http://localhost:8080/api/users
```

#### Trade Messages Statistics
Used to display on-the-fly processed data (i.e. queries) to the front-end (or anybody else interested, for that matter)
```
GET http://localhost:8080/api/tradeMessages/search/countByCountry?startTime=2018-03-31%2000:00:00.000
GET http://localhost:8080/api/tradeMessages/search/countByCurrencyMarket?currencyFrom=EUR&currencyTo=USD&startTime=2018-03-31%2000:00:00.000
```

### Front-end
Pretty much self explanatory. Navigate to:
```
http://localhost:8080
```
and choose one of the two available screens, 'Map' or 'Chart'.
While you're at it, open up a browser console and watch what's going on under the hood, especially on the Map screen.


## Options
Everything mentioned below is found in application.properties:
### Automatic banning
security.maxLoginAttempts: Max consecutive authentication attemps (on any end-point requiring HTTP auth) from the same IP before banning is enforced.
security.banTime: Ban time in seconds
### Rate limiter
bucket4j.filters[0].rate-limits[0].bandwidths[0].capacity: Number of maximum requests, independently of user or IP, in the time window defined below, before limiting occurs. 
bucket4j.filters[0].rate-limits[0].bandwidths[0].time: Time window (in seconds) during which the capacity defined above is checked 
### Number of Tomcat threads
server.tomcat.max-threads: Increase to allow for heavier loads, but watch out for your JVM memory usage!
### Web-socket notifications
notifications.tradeMessagesInterval: Notify clients every-time (total trade messages mod interval) equals zero, or every other N trade messages created.  

## Concessions/Points to note
* Countries, currency codes and roles are held in Java enums, instead of database tables, for simplicity.
* Passwords should be encoded in database, skipped for simplicity.
* In a real production environment, SSL certificates would be used.
* Likewise, JWT would be a preferred option, instead of the basic HTTP authentication header.
* No validation/conversion is done on trade message rates (saved as they're coming in).
* TradeMessage's 'timePlaced' property is considered to be in UTC on server and must be sent as such (e.g. 2018-03-31T22:00:00.000+0300) by the clients.
* All TradeMessage statistics end-points are provided 'free to all' (i.e. with no security), for easier display in the front-end.
* If a regular user (i.e. having the 'USER' role) tries to create a Trade Message for someone else, no error is thrown (simplicity). Nevertheless, the other user value is ignored and replaced with the caller.
* Feel free to point out any issues encountered.