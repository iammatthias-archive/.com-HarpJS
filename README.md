This is my old site, built using HarpJS. Keeping the repo around for posterity. 



iammatthias.com

[![Build Status](https://travis-ci.org/iammatthias/.com.svg?branch=master)](https://travis-ci.org/iammatthias/.com)

## To Do

- [X] Images are now in an Amazon S3 bucket with Cloudfront.
	- [X] All media assets now on S3 bucket
- [ ] Most the rest of the assets folder to the bucket.


### About 
This is the current iteration of my site. There used to be this big long explanation here that went through almost every version of my portfolio that's come into existence since 2004. But let's be honest, it was an unnecessary amount of word vomit.

This is the code for http:iammatthias.com: 2016 Edition

## Technology
#### Static Site Generator
* [HarpJS](http://harpjs.com)
- The site was built using [HarpJS](http://harpjs.com). It's a great static site generator, and a fantastic JS based alternative to platforms like Jekyll(Ruby), Middleman(Ruby), or Hugo(Go). Harp bills itself as "The static web server with built-in preprocessing." and has built in support for Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus.

#### CSS Framework
* [Bulma](http://bulma.io)
- [Bulma](http://bulma.io) is a fairly new, modern CSS framework based on Flexbox. You can use it as a single CSS file, or mess with the SASS source itself. It's lightweight, and has some pretty impressive features.

	#### Extra CSS libraries
	* [Btns](http://mrmrs.io/btns/)
	* [Colors](http://clrs.cc)
	* [Links](http://mrmrs.io/links/)
	* [Gutenberg](http://matejlatin.github.io/Gutenberg/)

#### Hosting
* [Surge.sh](https://surge.sh)
- [Surge.sh](https://surge.sh) is the bee's knees. Surge lets you publish HTML, CSS, and JS for free, without leaving the command line. It's remarkably easy, and is a cakewalk to integrate with platforms like Travis.Cl for continuous integration.

#### Javascript / Jquery
* [Jquery](http://jquery.com)
	* [jquery.lazyload](http://www.appelsiini.net/projects/lazyload)
	* [Swipebox](http://brutaldesign.github.io/swipebox/)
	* [CookieBar](http://carlwoodhouse.github.io/jquery.cookieBar/)
	* [ScrollSpy](https://github.com/sxalexander/jquery-scrollspy)

* [Macy](http://macyjs.com)



* [robots.txt](http://www.robotstxt.org)
* [humans.txt](http://humanstxt.org)
* [https://travis-ci.org/](Travis.Cl)

### If you really want to use this for something...
> $ sudo npm install -g harp

> $ harp init [your project name here] -b iammatthias/.com

> $ harp server
