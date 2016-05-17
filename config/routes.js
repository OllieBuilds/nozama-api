'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')

// cart routes
.post('/carts', 'carts#addToCart')
// cart id....?
.patch('/carts/:id', 'carts#destroy')
.get('/carts', 'carts#index')
.get('/carts/:id', 'carts#show')

.resources('users', { only: ['index', 'show'] })
// orders routes
.get('/orders', 'orders#index')
.post('/orders', 'orders#create')
.get('/orders/:id', 'orders#show')
.patch('/orders/:id', 'orders#update')
.delete('/orders/:id', 'orders#destroy')


.resources('products')



// all routes created
;
