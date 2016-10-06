I made the jump from BASH to ZSH about a year ago, and settled on Prezto as my configuration framework. I worked my way through every prompt theme I could find, but none of them did exactly what I wanted. So I started fiddling around, and cobbled together my favorite bits of functionality from the different themes I came across. This has slowly turned into an ever evolving labor of love.

## The Prompt, then
![imgframe][image-1]

Despite being a theme for [Oh-My-ZSH][1], I ended up using [itg.zsh-theme][2] as my starting point. I was really intrigued by the GitHub status display, and wanted to try and replicate something similar using [Prezto][3]'s Git module. I got it working(somewhat), and discovered that it was not as intuitive as I was hoping. I ended up cribbing the Git status from [Pristine][4], and I have been quite happy so far. The right-prompt battery status came from Steve Losh's [Extravagent ZSH Prompt][5]. My shell clearly told me all I needed to know at a glance: local ip, Ruby/Node version, and battery level. If I'm in a git repo, it tells me the status as well. Nifty.

### But as with all things, it could be better. Right?

## The Prompt, now
![imgframe][image-2]

This basic functionality of the prompt remains. It still tells me my local ip, Ruby/Node version, battery level, and git status. But now, it has a fun little *message of the day*. It has a simple ascii render of my internet handle, and the output of [Archey][6], a system information tool written in Python.

If you want to add Archey to your motd, just add this to your .zshrc file:

```
# Display MotD
if [[ -e $HOME/.motd ]]; then cat $HOME/.motd; fi

if (( $+commands[archey] )); then
  archey
  print
fi
```

[1]:	https://github.com/robbyrussell/oh-my-zsh
[2]:	https://github.com/itsthatguy/itg.zsh-theme
[3]:	https://github.com/sorin-ionescu/prezto
[4]:	http://dhruvasagar.com/2015/11/28/pristine-zsh-theme
[5]:	http://stevelosh.com/blog/2010/02/my-extravagant-zsh-prompt/
[6]:	http://obihann.github.io/archey-osx/

[image-1]:	https://cdn.iammatthias.com/media/prompt2.jpg
[image-2]:	https://cdn.iammatthias.com/media/zshell.jpg