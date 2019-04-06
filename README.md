#  Creating a REST API with Node.js
A tutorial from Academind about rest api in node.js

## What is a RESTful api?
* RE- Representational
* S - State
* T - Transfer
The whole idea behind restful is to transfer data around. It is an alternative to an traditional webpage. When it doesnt serve our needs.

Example: You have a server and the client browser. The client sends a request to the server and you get back a response, in the response you have the diffrent pages which is send by the server. That is a tradtional webpage. What if you want to make a request to an server but not for web pages but for data. If you are only interested in getting data from, thats when a restful api come to use. 

### Note
* RESTful api's are stateless backends  
* RESTful Constraints
    * Client-server Architecture
        * Should not care about the user interface
    * Stateless
        * No client context(e.g. Session) is stored on the server
    * Cacheability
        * You have to define if it is cacheable or non-cacheable
    * Layared System
        * May be a middleware
    * Uniform Interface
        * Resources are identified in Requests, transferred data is decoupled from db schema
        * Self-descriptive Messages links to futher Resources
    * Code on Demand
        * Executable Code could be transferred
The most important constraints above is the stateless constraint. You have to know that the data is not saved in de server, because dont realy reload pages with a RESTful api.
