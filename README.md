This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# weather-app

This application allows an user to check current weather, and notify weather info by LINENotify at specific time everyday if it's configured. <br>
To receive notification, you have to sign up to this app. <br>
You can see weather info in browser by input zipcode without registration or logging in. <br>

<img src="https://user-images.githubusercontent.com/55787141/74496560-fa45b000-4f15-11ea-8a29-eca19641cd13.png" width="570" height="300">

<img src="https://user-images.githubusercontent.com/55787141/74497208-f581fb80-4f17-11ea-8c7d-f40ce0ddf5db.jpg" width="570" height="300">



## Why I created this app

This app is to show my skill of developing. <br>
I've been developing frontend and backend(in here, I express nodejs as backend) so far in several projects. <br>
Since that, I coded frontend and backend for this app. <br>



## What technology I used

* React.js (Frontend) <br>
  - React router
* SCSS (UI designning)
* Semantic UI React (UI designning)
* Node.js (Backend)
* PM2 (To demonize a process)
* Firebase (Authentication)
* AWS EC2 (As Production Server)

Since this app's component structure is not complicated, I didin't use Redux.(In most of cases, it just need to pass props to child component.)



## Why React.js and Node.js? 

* React.js <br>
This app is pretty simple and there's only a few differences between pages(meaning some of component are reusable), so I wanted to create simple and faster App. <br>
React.js is fast because of the Virtual DOM which is the one of the biggest feature of React.js. Even though sometime we have to change a part of app, it can re-render only changed part. <br> 
Components make app maintainanceable. We can develope an app with individual compoent. In addition to this, when I found a problem with my code, it's easy to make some changes. Also I reused one component for some situation. <br>

* Node.js <br>
The fast server side framework Node.js was matched my portfolio concepts which is fast app. It was also easy to learn and integrate it into app. I created soem API endpoints for LINEnotify and schedule job of notification. <br>



## Before start using App

1. If you will using notification function, you need to download LINE from [app store.](https://line.me/en-US/download)

2. Create account for LINE(Please register your email address).

3. Add LINENotify as your friend.(LINENotify is the one notify you.)
![image](https://user-images.githubusercontent.com/55787141/74505415-09d2f200-4f32-11ea-9cca-9d1d4e1090b2.png)

You can scan QR code in the picture.

4. Now ready to use weather-app.



## If you want to try it out

Please click URL below to access weather-app.

https://soma-dev0808.github.io/weather-demo/notification



## Hot to getting started

### clone app

git clone https://github.com/Soma-dev0808/weather-app.git

###  `npm install` inside api and frontend directly

Please install dependency in both api and frontend directly.

### Create service in LINENotify

Visit https://notify-bot.line.me/my/services/ and create LINENotify service. <br>

Then you can get channel id, channel secret. (You have to use it for .env file) <br>

For the callback url, you can assign  <br>

`http://localhost:{your local host port number}/line-notify/callback` <br>

in your LINENotify service console and .env file.

### Prepare .env file in api directly

APP_HOST=http://localhost:3000

LINE_NOTIFY_CHANNEL_ID=*********
LINE_NOTIFY_CHANNEL_SECRET=*********
LINE_NOTIFY_CALLBACK_URL=*********
LINE_NOTIFY_STATE=bm90aWZ5U3RhdGUxMjM=

REACT_APP_OPEN_WEATHER_API_KEY=*********


### Create your project in your firebase console

Then please take a note that firebase config variables.(You need them in .env file) <br>

You can find them inside Project setting and click Config checkmark. <br>

<img src="https://user-images.githubusercontent.com/55787141/74521018-a8237f80-4f53-11ea-8faa-a25451370eca.jpg" width="570" height="300">



### .env for frontend(React.js)
REACT_APP_OPEN_WEATHER_API_KEY=*********

// Firebase
REACT_APP_API_KEY=********
REACT_APP_AUTH_DOMAIN=********
REACT_APP_DATABASE_URL=********
REACT_APP_PROJECT_ID=********
REACT_APP_STORAGE_BUCKET=********
REACT_APP_MESSAGING_SENDER_ID=********


### run `npm run build:dev`

Webpack will build bundle.js for you.

### run `npm run start` in side api and frontend directly

You can run app.

## LICENSE

[MIT LICENSE](https://github.com/Soma-dev0808/weather-app/blob/master/LICENSE)
