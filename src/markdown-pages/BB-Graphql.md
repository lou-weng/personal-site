---
slug: "/blog/bootstrap-brain-graphql"
date: "2021-10-10"
title: "Bootstrap the Brain: GraphQL"
type: "blog"
featuredImage: ../images/bb-cloud.jpg
---
# Introduction to GraphQL
Given that I decided to create my website using Gatsby, learning how to use GraphQL was an absolute must. I have to say, I was honestly suprised at how intuitive the query language was. This write-up covers a bit about the background behind GraphQL and also how to query data from it from a client's perspective. I decided not to include too much detail about servers and implementation since I myself am still in the process of learning. 

# Bringing it back to REST
I have to admit, I don't think I truly appreciated the capabilities of GraphQL until it was put into perspective to me just what problem it solves. In most of my past personal projects, REST was always the go-to system to send data between client and server applications. I have a specific piece of information to provide to the client? Just create an endpoint. Got some more information? Another endpoint...and so on. Because my own creations are often test environments, experiementations or small-scale projects, I never gave it much thought for just how complex a fully scaled REST API could become. Likewise, I also did not grasp just how complex querying for data could become. 

By creating multiple more general endpoints, you create more openings to your data for clients. However, the trade off here is redundancy and these endpoints can often return more information than what users need. 

Moreover, let's say you create endpoints to target specific pieces of data. Now you can return more precise data to clients, but it also means that the API itself becomes very detailed and complex. Adding more endpoints forces clients to adapt their queries to very specfific specifications. 

So let's recap: with REST applications:
* adding more general endpoints provides clients more access to your data, but returns information they may not need
* adding specific endpoints just adds complexity to your API and also makes it take longer to develop

Now we can introduce GraphQL. What if instead of multiple endpoints, we have just one? What if instead of dumping massive amounts of data onto clients, we allow them to specifically pick and choose what data they want. Once I wrapped my head around the value proposition of GraphQL and what advantages it offered, I was hooked. 

# Querying Data
Let's get into a small demonstration of the fun stuff. 
1. First we'll set the stage with an example data source. Make sure you understand how the data is structured and make sure you understand the context behind it. 
2. We'll start by looking at what a REST endpoint implementation may look like. I think this demo only becomes more powerful if we can compare and contrast the capabilities of REST and GraphQL. Also remember that since GraphQL only requires one endpoint, we don't need to worry too much what the behind the scenes stuff there looks like. 
3. Let's see how querying for data in GraphQL compres with REST and how the data returned differs. 




# What is graphQL

- alternative to REST
- developed open-source by Facebook
- declarative data fetching?

- server exposes one endpoint and provides data that is requested
- minimizes data that needs to be transferred over the network
- difficult and maintain one api for all clients
- each client can access what data they need
- provide fliexibility and efficiency for clients 

# REST
- strict specification of how a server exposes data to clients

# Using GraphQL
- Schema Definition Language (syntax for writing schemas)

```
    type Person {
        name: String!
        age: Int!
        posts: [Post!]!
    }

    type Post {
        title: String!
        author: Person!
    }
```

- ! means that the field is required
- list syntax is []

# Queries
```
{
    // root field
    allPersons {

        //payload
        name
    }
}

{
    "allPersons": [
        { "name": "X" },
        { "name": "X" },
        { "name": "X" }
    ]
}

{
    allPersons {
        name
        age
    }
}

{
    "allPersons": [
        { "name": "X", "age": Y },
        { "name": "X", "age": Y },
        { "name": "X", "age": Y }
    ]
}
```

# Arguments
{
    allPersons(last: 2) {
        name
    }
}
{
    "allPersons": [
        { "name": "X" },
        { "name": "X" }
    ]
}

