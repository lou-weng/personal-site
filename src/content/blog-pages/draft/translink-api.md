---
slug: "/blog/translink-api"
date: "2021-10-14"
title: "Using the Translink API for a personal project"
type: "blog"
featuredImage: ../../images/bb-cloud.jpg
tags: ["project", "microservice", "java", "api"]
---

Ever wondered how transit apps are able to get information about bus routes and service schedules? How is it that when I'm waiting for a bus at school, multiple different apps can all estimate the next bus. Not all of them have access to direct connections to Translink buses right?[^fn1] 

Whenever I want to check for the next bus near me, there are three main options:

| Method                               | Advantages                                                   | Disadvantages                                                |
| ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Google Maps                          | - provides detailed information about the next bus           | - not always the most accurate in my experience<br />- for a student on a student phone plan, I don't want to consume a lot of data with every search<br />- I have to open the app, type in my destination, then search for the stop that is relevant to me |
| Text Bus Stop # to Translink (33333) | - detailed information straight from Translink<br />         | - I need to remember the bus stop numbers of all my frequented bus stops<br />- I need to text, which from my android phone isn't always the best user experience <br />- If I can take two possible buses, I need to text twice to get the next times of the two buses |
| Bus Schedule Mobile App              | - nice interface<br />- can save the routes I use for subsequent uses without me needing to search each time | - if I am at a friend's house, I need to search for specific stops to get the nearest bus<br />- ever had to deal with a mobile app you use for 5 seconds, but it makes 10 for the damn thing to load? |

Doing a little digging, I realized that Translink actually provides a public API to their bus service. By making a REST call to their API endpoint, you can get data about stops, routes, buses, and more. 

I'm going to make an uninformed hypothesis that most of the services out there use this API in some form to return the bus data I'm always searching for. I guess that the text service Translink provides to 33333 is linked to the same process that serves their API. I'm sure the different mobile apps out there for Translink buses operate on similar principles of using public APIs. 

So assuming this hypothesis is true, it got me thinking...if I dislike using these services so much to get what I want, why don't I create my own?

I want something that can do the following:

* given by current location, I want to see the bus stops that are within X distance of me
* given the bus stops closest to me, I want to the next 6 scheduled buses for each stop

### API Reference

To access the Translink API, visit their site and create an account. This will allow you access to create your own API key. 

The URL for querying is based off of the follow:

```
https://api.translink.ca/rttiapi/v1/
```

#### Stops

I used the stops API to return the stops closest to my current location. You just need to append the following to the URL:

```
stops?apikey=<INSERT_API_KEY>&lat=<INSERT_LATITUDE>&long=<INSERT_LONGITUDE>&radius=<SEARCH_RADIUS>
```

**Example**: 

```
// querying for the closest stops from UBC
https://api.translink.ca/rttiapi/v1/stops?apikey=31Z2KlibdtLWpif0eIHL&lat=49.265&long=-123.2544&radius=500
```

Result:

```
// only showing an extract of results because actual results are too long

```

### Useful Tools

While I was developing this simple app, I did use a few tools that I want to give honourable mentions to. 

#### Insomnia 

This was an awesome tool to easily work with REST APIs. I was able to send different types of requests and explore the resultant data without having to worry about constantly changing code or creating test files. 

I actually made sure that I knew the format and composition of my data before I started even writing any code to start with. 
