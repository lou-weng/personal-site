---
slug: "/blog/translink-api"
date: "2021-11-01"
title: "Translink Bus Schedule Mobile App"
type: "project"
featuredImage: ../../../images/translink.jpg
tags: ["project", "microservice", "java", "api"]
description: "I use the bus system here in Vancouver...a lot. I never really liked the options available to me when getting the arrival times of public transit, so I decided to do something about it."
---

Ever wondered how transit apps are able to get information about bus routes and service schedules? How is it that when I'm waiting for a bus at school, multiple different apps can all estimate the next bus. Not all of them have access to direct connections to Translink buses right?

Whenever I want to check for the next bus near me, there are three main options:

### Method #1: Google Maps  
Advantages: 
* provides detailed information and estimates about the next bus based on street conditions
* not always the most accurate in my experience
Disadvantages
* I have to open the app, type in my destination, then search for the stop that is relevant to me (unnecessary steps)
* for a student on a basic phone plan, I don't want to consume a lot of data with every search
* all the fancy UI loading takes time

### Method #2: Translink Text Service to 33333  
Advantages: 
* no data consumption since I'm texting a number
* short and sweet information. I get the next three buses arrival times, no extraneous information
Disadvantages
* if I can take two possible bus routes, I need to text twice to get the next arrival times of the two options
* I need to remember the bus stop numbers of all my frequented bus stops
* if I am searching for buses before I go outside, can't get the bus stop information without searching it up online

### Method #3: Transit Mobile App  
Advantages: 
* can save the routes I use for subsequent uses without me needing to search each time
* often a better user experience than #2 and not as load-heavy as #1
Disadvantages
* depending on the app, unnecessary information gets loaded
* also depending on the app, load time to start up can take a while

### Conclusion

Doing a little digging, I realized that Translink actually provides a public API to their bus service. By making a REST call to their API endpoint, you can get data about stops, routes, buses, and more. 

I'm going to make an uninformed hypothesis that most of the services out there use this API in some form to return the bus data I'm always searching for. I guess that the text service Translink provides to 33333 is linked to the same process that serves their API. I'm sure the different mobile apps out there for Translink buses operate on similar principles of using public APIs. 

So assuming this hypothesis is true, it got me thinking...if I dislike using these services so much to get what I want, why don't I create my own?

I want something that can do the following:

* given by current location, I want to see the bus stops that are within X distance of me
* given the bus stops closest to me, I want to see information about all bus routes that serve that stop
* for each bus route at a given stop, show the next incoming 3 buses
* an application that I can access quickly, with minimal load time, preferably on my phone

I wrote this article to document my current situation and requirements. Stay tuned to my next article revolving around this topic where I go into detail about my project implementation. 