I made the jump from BASH to ZSH about a year ago, and settled on Prezto as my configuration framework. I worked my way through every prompt theme I could find, but none of them did exactly what I wanted. So I started fiddling around, and cobbled together my favorite bits of functionality from the different themes I came across. This has slowly turned into an ever evolving labor of love.

## The Prompt, then
![imgframe](http://cdn.iammatthias.com/media/prompt2.jpg)

Despite being a theme for [Oh-My-ZSH](https://github.com/robbyrussell/oh-my-zsh), I ended up using [itg.zsh-theme](https://github.com/itsthatguy/itg.zsh-theme) as my starting point. I was really intrigued by the GitHub status display, and wanted to try and replicate something similar using [Prezto](https://github.com/sorin-ionescu/prezto)'s Git module. I got it working(somewhat), and discovered that it was not as intuitive as I was hoping. I ended up cribbing the Git status from [Pristine](http://dhruvasagar.com/2015/11/28/pristine-zsh-theme), and I have been quite happy so far. The right-prompt battery status came from Steve Losh's [Extravagent ZSH Prompt](http://stevelosh.com/blog/2010/02/my-extravagant-zsh-prompt/). My shell clearly told me all I needed to know at a glance: local ip, Ruby/Node version, and battery level. If I'm in a git repo, it tells me the status as well. Nifty.

### But as with all things, it could be better. Right?

## The Prompt, now
![imgframe](http://cdn.iammatthias.com/media/zshell.jpg)

This basic functionality of the prompt remains. It still tells me my local ip, Ruby/Node version, battery level, and git status. But now, it has a fun little *message of the day*. It has a simple ascii render of my internet handle, and the output of [Archey](http://obihann.github.io/archey-osx/), a system information tool written in Python.

If you want to add Archey to your motd, just add this to your .zshrc file:

```
# Display MotD
if [[ -e $HOME/.motd ]]; then cat $HOME/.motd; fi

if (( $+commands[archey] )); then
  archey
  print
fi
```
