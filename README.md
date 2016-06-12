iammatthias.com
======
**http://iammatthias.com** is my personal website. It has a small collection of open source work, client projects, and my photography.

### About
I launched my first website in 2004. It was a terrible site built using the now defunct, and always terrible, [iWeb](https://en.wikipedia.org/wiki/IWeb). It worked for what I wanted, a small site with some simple image galleries, and it sparked an interest in the Web. But yeah, it was terrible. Because iWeb.

After that, I continued with horrible sites built with the wrong software. I think it was late 2005, or early 2006, but mkjimagery.com found a new home on GoDaddy's server after being built out with the page creation software baked into Adobe Lightroom. Flash ftw, right? Those were the days. The dark, terrible, frightening days when Flash ruled all and still had Macromedia branding despite being purchased by Adobe.

Lightroom's Flash page generator introduced me to Fireworks(which I never really mastered), and then to Dreamweaver. That was exciting. Dreamweaver still was held in decent regard, and was one of the few code editors that had a somewhat decent WYSIWYG editor built in(nah, it sucked). Slowly but surely, I was growing interested in breaking away from what apps could build for me.

Fast forward a few more years, and you've reached 2014. I was finishing up my Photography degree, and dealing with a horrible managed site split over 3 platforms. Part of it, the landing page, was on Github Pages. My image galleries were on Exposure.co, and my blog was on a self hosted copy of the Ghost Beta. It was a horriblely broken mess of poorly written code and unoptimized assets. Something had to change, so I started studying.

Fast forward again, and you're in the present day. My code is starting to look somewhat respectable. I comment the stuff that needs explaining, and I make full use of template engines, frameworks, partials, and the whatever else is out there to make dev life easier.

### About - iammatthias.com
In fall 2015 I decided that I needed to switch paths. I love photography, it remains my biggest passion, but I needed something more intellectually stimulating as a career. So I started reading books on Lean/Agile startups, and joined the Product Management Immersive at General Assembly. I learned a lot, and found myself with a second portfolio. This one wasn't images, though. It was code.

- The site was built using [HarpJS](http://harpjs.com). It's a great static site generator, and a fantastic JS based alternative to platforms like Jekyll(Ruby), Middleman(Ruby), or Hugo(Go). Harp bills itself as "The static web server with built-in preprocessing." and has built in support for Jade, Markdown, EJS, CoffeeScript, Sass, LESS and Stylus.

- [Bulma](http://bulma.io) is a fairly new, modern CSS framework based on Flexbox. You can use it as a single CSS file, or mess with the SASS source itself. It's lightweight, and has some pretty impressive features.

- [Surge.sh](https://surge.sh) is the bee's knees. Surge lets you publish HTML, CSS, and JS for free, without leaving the command line. It's remarkably easy, and is a cakewalk to integrate with platforms like Travis.Cl for continuous integration.

- Jquery is, well, Jquery. It helps me with some of the magic, like a menu that highlights the current section on the main page, image galleries with a lightbox, and a whole bunch of other goodies.

## Technology
* [HarpJS](http://harpjs.com)
* [Bulma](http://bulma.io)
* [Surge.sh](https://surge.sh)
* [Jquery](http://jquery.com)
* [robots.txt](http://www.robotstxt.org)
* [humans.txt](http://humanstxt.org)
* [https://travis-ci.org/](Travis.Cl)


### If you really want to use this for something...
> $ sudo npm install -g harp

> $ harp init [your project name here] -b iammatthias/.com

> $ harp server
