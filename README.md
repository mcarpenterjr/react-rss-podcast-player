# React RSS Podcast Player

Snappy name, huh? The React RSS Podcast Player is a React component that, when provided with a valid RSS link, will create a fully functional HTML5 based Podcast player to utilize in your projects.

Forked originally from [https://github.com/titchimoto/react-rss-podcast-player](https://github.com/titchimoto/react-rss-podcast-player)

The original release was well made and functioned great, except it became outdated,
really wanted to use this for a project and it just wouldn't integrate well into
automated builds without extending and fixing some underlying issues. So a noble
nod to the original creator. The testing suite works without issuea and deprecated
react methods have been eliminated.

Next steps are to implement Font Awesome free and SASS styles so the module can
easily be extended to fit any theme.

# Usage

### First, install...

	npm install @mrpollard/react-rss-podcast-player --save
	# or
	yarn add @mrpollar/react-rss-podcast-player  


<!-- -->

### Then...

	import React, { Component } from 'react';
	import PodcastPlayer from '@mrpollard/react-rss-podcast-player';

	class App extends Component {
  		render () {
	    	return <PodcastPlayer url={'https://my.cool/podcast'} />
  		}
	}

# Props


| Prop          | Description     | Default |
|-------------- |-----------------| --------------|
| `url`		      | The RSS feed of a podcast. Pass it any valid .rss feed to start playing.       |          |
| `maxWidth`     | Set the `max-width` of the player.       |      `600px`     |
| `feedMaxHeight`  | Set the `max-height` of the items list.       | `600px` |
| `playerColor`	      | Sets the player section `background-color`     | `#f6f6f6` |
| `feedColor`    | Sets the feed list `backgroundcolor`     | `#f6f6f6` |
| `playerControlsColor` | Sets the player controls `background-color`   | `#e6e6e6` |
| `playerTextColor`    | Sets the text `color` of the player & controls.   |     `#404040`     |
| `feedTextColor`    | Sets the text `color` of the feed items.   |   `#404040`     |


# Contributions

If you would like to contribute to this open source project, please feel free to submit a PR.

There is also a very basic test suite included for convenience, feel free to add your own tests for posterity, and run existing tests before submitting.


# Code Of Conduct

For a more detailed look at our code of conduct, check it out [here](https://github.com/mcarpenterjr/react-rss-podcast-component/blob/master/CODE_OF_CONDUCT.md)
