A little over a year ago, I discovered a fantastic platform called [Surge][1]. It bills itself as *”Static web publishing for Front-End Developers”*, and it does that very well. There have been some [outages][2]here and there, but they have always been resolved quickly with plenty of communication with their users. 

There there is [Netlify][3]. Netlify offers much the same as Surge. A great free tier for static hosting, custom domain names, and a robust CLI. But it has a few things Surge lacks, like a proper pay structure, a Pro plan that is free for open source applications, built in build/deployment tools, and [Let’s Encrypt][4] integration. 

Five days ago I switched from Surge to Netlify for my personal site. It’s been pretty great. With a few clicks, I was able to simplify my build script. Instead of pushing to Github and waiting for Travis CI to pull, compile, uglify, and bundle everything, I just let Netlify handle it all. 
![Netlify Post Processing options]()(https://cdn.iammatthias.com/media/netlify-post.jpg)
It triggers automatically on a gitpush, runs everything, and then uses Zapier+Pushbullet to ping my phone when the build is fails or succeeds. 

But the thing I’m most excited about is the Let’s Encrypt integration. It makes it a cake-walk to get a certificate, and auto-renew. 

I will definitly continue to use Surge as my development platform. It’s a great service, and I want to continue supporting their team. But for production I will be going with Netlify from now on. 

[1]:	https://surge.sh
[2]:	https://news.ycombinator.com/item?id=12009313
[3]:	https://www.netlify.com
[4]:	https://letsencrypt.org
