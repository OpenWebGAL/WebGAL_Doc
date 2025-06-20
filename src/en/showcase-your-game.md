# Showcase Your Game

First, you need to prepare the following information:

* Game ID: The unique ID of your game, use English, cannot be duplicated with other games
* Game Title
* Developer Name
* Release Date
* Release URL: A link to a publicly accessible page, such as project homepage, store, blog, video, etc.
* Game Cover: 616 pixels in width, 353 pixels in height

## Submit Your Game via Pull Requests

Fork the [WebGAL_HomePage](https://github.com/OpenWebGAL/WebGAL_HomePage) repository.

Add your prepared cover to `/public/images/games`.

Open the file `/data/games.ts`, find `games`, add the following template at the end:

``` typescript
  {
    id: 'Game ID',
    title: 'Game Title',
    developer: 'Developer Name',
    releaseDate: 'xxxx-xx-xx',
    url: 'https://example.com/',
    cover: 'Game Cover File Name.webp',
  },
```

After confirming that there are no errors, initiate a pull request.

## Submit Your Game via Issues

Open the [Issues page](https://github.com/OpenWebGAL/WebGAL_HomePage/issues) of the WebGAL_HomePage repository.

Click `New issue`, fill in the prepared information, and click `Submit new issue` after confirming that there are no errors.

## Submit Your Game via Other Channels

After preparing the required information, you can submit your game by contacting us via the discussion community or email.