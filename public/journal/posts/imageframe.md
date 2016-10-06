# Image Frame
## Use a photo as its own background.

[![Build Status][image-1]][1]

![imgframe][image-2]

## [Live Demo][2]

This takes the source of an image and applies it to the div background, and the enclosed img tag. This displays with picture with a copy of itself as a border frame. Can be modified so that the background image is contained to the size of the div, or it can be left as is to provide a more dynamic feel when the window is resized.

As I was working on this, I decided to create three different implementations for this project. I started with vanilla Javascript, and then reworked it to leverage two template languages: [EJS][3] and [Jade][4](now called Pug).

A [ReadMe][5] documenting how to use this can be found on the Github Repo: https://github.com/iammatthias/frame

[1]:	https://travis-ci.org/iammatthias/frame
[2]:	http://imgframe.surge.sh
[3]:	http://www.embeddedjs.com
[4]:	https://pugjs.org/api/getting-started.html
[5]:	https://github.com/iammatthias/frame

[image-1]:	https://travis-ci.org/iammatthias/.com.svg?branch=master
[image-2]:	https://cdn.iammatthias.com/media/imgframe.jpg