# weather-app


### [Demo](https://soma-dev0808.github.io/weather-demo/)
***Sample Zipcodes***
 * US
   * 50401
 * Germany
   * 21149
 * Thailand
   * 10110
 
 <hr>

## About this app:

This application allows a user to check the current weather, and notifies a user about the weather information by LINENotify at a specific time everyday if it's configured.

To be able to receive notification, you have to register/login to this app.

You can see weather information in browser by inputting zipcode without registration or login.

🌏 Currently, this application supports four countries (USA, Germany, Thailand, Singapore)
 to fetch weather information.

<img src="https://user-images.githubusercontent.com/55787141/74496560-fa45b000-4f15-11ea-8a29-eca19641cd13.png" width="570" height="300">

<img src="https://user-images.githubusercontent.com/55787141/74497208-f581fb80-4f17-11ea-8c7d-f40ce0ddf5db.jpg" width="570" height="300">



## Why I created this app

This app was mainly created to show my skill in both web and mobile development. I've used some languages such as React.js and Nativescript, therefore showing the level of skill I have with these languages.

Both React.js and Node.js are skills used to develop both frontend and backend development.  In the node.js side, I created some entrypoints to handle some functions such as connecting with LINENotify.

I also have some experience with using Cloud platform, threfore I integrated firebase for authentication and AWS for managing production server.


## What technology I used

* React.js (Frontend) <br>
  - React router
  - Redux
* SCSS (UI designning)
* Semantic UI React (UI designning)
* Node.js (Backend)
* PM2 (To demonize a process)
* Firebase (Authentication)
* AWS EC2 (As Production Server)
  - Route53
  - Elastic IP
  - Loadbalancer
  * VPC is default VPC
  

## Structure of this application.

![image](https://user-images.githubusercontent.com/55787141/74638441-d9e05480-51a6-11ea-8653-20280098e5b4.png)



## Feature 

 * Display current weather by inputting zipcode
 * Registration/Login/Signout account
 * Restore password
 * Connect LINENotify
 * Send notification 
 * Stop sending notification


## Before start using App

1. If you will be using notification function, you need to download LINE from [app store.](https://line.me/en-US/download)

2. Create an account for LINE by registering your email address.

3. Add LINENotify as your friend.(LINENotify will notify you once added.)
![image](https://user-images.githubusercontent.com/55787141/74505415-09d2f200-4f32-11ea-9cca-9d1d4e1090b2.png)

You can scan QR code in the picture.

4. Weather-app is now ready to use! 



## If you want to try it out

Please click URL below to access weather-app.

https://soma-dev0808.github.io/weather-demo/


## Hot to getting started

### clone app

git clone https://github.com/Soma-dev0808/weather-app.git

###  `npm install` inside api and frontend directly

Please install dependency in both api and frontend directly.

### Create service in LINENotify

Visit https://notify-bot.line.me/my/services/ and create LINENotify service. <br>

Then you can get channel id, channel secret. (You have to use it for .env file) <br>

For the callback url, you can assign  <br>

`http://localhost:{your nodejs's local host port number}/line-notify/callback` <br>

in your LINENotify service console and .env file.

### Prepare .env file in api directly

APP_HOST=http://localhost:8080/

LINE_NOTIFY_CHANNEL_ID=********* <br>
LINE_NOTIFY_CHANNEL_SECRET=********* <br>
LINE_NOTIFY_CALLBACK_URL=********* <br>
LINE_NOTIFY_STATE=bm90aWZ5U3RhdGUxMjM= <br>

REACT_APP_OPEN_WEATHER_API_KEY=********* <br>


### Create your project in your firebase console

Please take a note that firebase config variables.(You need them in .env file) <br>

You can find them inside 'Project setting' in firebase console and click 'Config' checkmark. <br>

<img src="https://user-images.githubusercontent.com/55787141/74521018-a8237f80-4f53-11ea-8faa-a25451370eca.jpg" width="570" height="300">



### .env for frontend(React.js)
REACT_APP_OPEN_WEATHER_API_KEY=*********

// Firebase <br>
REACT_APP_API_KEY=******** <br> 
REACT_APP_AUTH_DOMAIN=******** <br>
REACT_APP_DATABASE_URL=******** <br>
REACT_APP_PROJECT_ID=******** <br>
REACT_APP_STORAGE_BUCKET=******** <br>
REACT_APP_MESSAGING_SENDER_ID=******** <br>

//Backend
REACT_APP_BACKEND=http://localhost:5000


### run `npm run build:dev`

Webpack will build bundle.js for you.

### run `npm run start` in side api and frontend directly

You can run app.

## LICENSE

[MIT LICENSE](https://github.com/Soma-dev0808/weather-app/blob/master/LICENSE)
