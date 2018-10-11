# Portlandia API

This project is intended to be an API that returns data and characters that have appeared on the show Portlandia

***Portlandia-API*** is a custom API on Node using Express and connect to Mongo DB using Mongoose.

View demo here: https://github.com/kendrajmoore/portlandia-api

Official documentation: https://github.com/kendrajmoore/portlandia-api/docs

## Base URL

```
$ https://wwww.heroku.com/portlandia
```

The base url contains information about all available API's resources. All responses will return data in json.

There are two available resources

-   Characters: used to get all characters
-   Episodes: used to get all episodes

Sample requests

```
$https://www.heroku.com/portlandia/characters
$https://www.heroku.com/portlandia/episodes
```

## Characters Schema
|Key|Type|Description|
|---|---|---|
|id|int|The id of the character.
|name|string|The name of the character.
|episodes|Array|Show character has appeared in.


### Get all characters
You can access the list of locations by using the `/` endpoint.
```
https://kendrajmoore.com/portlandia/characters/
```
```js

  "results": {
    "id": 1,
    "name": "Carrie",
    "image": "https://rickandmortyapi.com/api/location?page=2",
    "episode": [1, 2, 3, 4,]
  },
  "results": [
      {
       "id": 1,
       "name": "Carrie",
       "image": "https://rickandmortyapi.com/api/location?page=2",
       "episode": [1, 2, 3, 4,]
   }
]

```


## Episodes Schema
|Key|Type|Description|
|---|---|---|
|id|number|The id of the character.
|season|number|The season episode aired.
|number|number|Episode number within a season.
|date|Date|The date the episode originally aired.
|title|string|The name of the episode.
|summary|string|An overview of the episode.

### Get all episodes
You can access the list of characters by using the `/episode` endpoint.
```
https://rickandmortyapi.com/portlandia/episode/
```
```js

  "results": [
    {
      "id": 1,
      "image": "https://google.com/img/12393",
      "season": 1,
      "number": 2,
      "date": 3/4/2018,
      "title": "Farm",
      "summary": "Carrie and Fred visit a farm"
      }
    // ...
  ]
```


## Installation

```js
$ yarn install
```

## Run

```js
$ yarn start
```

## Project Team

Created by Kendra Moore for Backend Web 1.2 at Make School
