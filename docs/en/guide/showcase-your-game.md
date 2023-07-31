# Showcase your game

First you need to prepare the following information:

* Game ID: the unique ID of the game, cannot be duplicated with other games
* Game title
* Developer name
* Release date
* Publishing address: a link to a publicly accessible page, such as the project homepage, store, blog, video, etc.
* Game cover: width 616 pixels, height 353 pixels

## Submit your game via Pull Requests

Fork [WebGAL_HomePage](https://github.com/MakinoharaShoko/WebGAL_HomePage) this repository.

Add the prepared cover to `/public/images/games`.

Open the file `/data/gamesData.ts`, find `gamesData` and add at the end according to the following template:

``` typescript
  {
    id: 'Game ID',
    title: 'Game title',
    developer: 'Developer name',
    releaseDate: 'xxxx-xx-xx',
    url: 'https://example.com/',
    cover: 'Game cover filename.webp',
  },
```

Confirm that there are no errors and launch a pull requests request.

## Submit your game via Issues

Open the [Issues page](https://github.com/MakinoharaShoko/WebGAL_HomePage/issues) of the WebGAL_HomePage repository.

Click `New issue`, fill in the information you have prepared, and then click `Submit new issue`.

## Submit your game through other channels

Once you've prepared the necessary information, you can submit your game by contacting us via the community or email.
