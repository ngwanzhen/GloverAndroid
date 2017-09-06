# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #4: Project Name

*** NAME *** is a collision detection device + phone app that will notify your loved ones on your location when you're our cycling, skiing or even driving. The device should be attached somewhere that may sense the impact and this triggers your phone to send out an SMS to your designated emergency contact with your location and other health related details like blood type and allergies.

This project makes use of:

Hardware
* Arduino Uno
* Piezo Sensor
* 1 Mohm resistor
* 9V battery
* Bluetooth module (HC-05)

Software
* React Native
* Bluetooth library to pair with hardware
* GPS library
* Communications library to send SMS
* Contacts API to access phone contacts (Expo)

## Getting Started

Provide instructions here about how to get your project running on our local machine. Do we just need to clone and open a certain file or do we need to install anything first.

### Prerequisites

What is needed to install and run the project, how do we install them

```
Code example
```

### How to Use

A step by step guide on how to install and use the project, for example if this is a game, how do we play it.


```
Code example
```

More steps...

```
until finished
```


## Tests

Did you write automated tests? If so, how do we run them.


```
Code example
```

## Live Version

Where is this deployed online (github pages, heroku etc), give us the link and any access details we need.

## Built With

What did you use to build it, list the technologies, plugins, gems, packages etc.

* [jQuery](http://jquery.com/) - jQuery for example is something you likely used

## Workflow

### ERDs

### Flowchart

### User stories
* User should be able to register and log-in subsequently
* Registration page will prompt users to key in health details and emergency contacts from phone
* Logged-in users should be able to start session that will trigger pairing of bluetooth device for crash detection and turn on GPS for location sensing
* Upon collision, app will start a 30 seconds countdown that users can dismiss if false-alarm triggered by a bump on the road or a minor accident.
* If user is in a serious accident and is unable to dismiss the countdown, the app will then automatically send out a message to designated contacts with info on location and previously provided health details.

### Challenges
1. How to prompt user to pair bluetooth and switch on GPS upon 'start ride session'?
2. Will locked phone disable sending SMS?
3. Will app running in background continually sense location coordinate and receive bluetooth data?

### Future Plans
1. Live-tracking of location & time to enable live updates to emergency contacts even without crash event. This will also enable app to double up as a 'run-keeper' for cyclists, skiiers, motorists or even joggers.
2. Implmentation of accelerometer for increased accuracy
3. 'Forget Password' feature
4. Provide settings page to enable users to amend emergency contact details, personal details like allergies, health status

## Authors

* **Wan Zhen** - [thecodingdog](https://github.com/thecodingdog)
* **Shumin** - [shumin13](https://github.com/shumin13)

## Acknowledgments

* To enable direct SMS (not just re-direct you to the SMS function with pre-filled msg)
https://github.com/rhaker/react-native-sms-android

* React-navigation that gives you the router and nav bar
https://github.com/spencercarli/getting-started-react-navigation/blob/master/app/config/router.js

* React-native maps that gives you the ability to see where you are on google maps
https://github.com/airbnb/react-native-maps
