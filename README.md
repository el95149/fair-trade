# Fair Trade

## Concessions
* No validation/conversion is done on trade message rates (saved as they're coming in).
* TradeMessage's 'timePlaced' property is considered to be in UTC on server and must be sent as such (e.g. 2018-03-31T22:00:00.000+0300) by the clients.
* All TradeMessage statistics end-points are provided 'free to all' (i.e. with no security), for easier display in the front-end.