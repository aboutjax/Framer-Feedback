# Framer Feedback Module
The Feedback Module for Framer makes it easier for you to prototype with feedback messages. It allows you to easily created two different types of feedback component in any part of your prototype.

1. Generic Feedback
2. Auto Dismiss Feedback

[![](https://media.giphy.com/media/xULW8o0aNp4p3sazh6/giphy.gif)](https://framer.cloud/UbNRL)

[Example](https://framer.cloud/GUsVL) – Sharing permalinks interaction.


## Including the Module
To include the Feedback Class as a module, get the feedback.coffee file from within the `/module` folder and place it within the `/modules` folder of your prototype.

`{Feedback} = require "feedback"`

## Generic Feedback
By default, the feedback component includes a dismissable icon at the end of the message. This is often used when you wish to show the user a message that needs their attention.

![generic feedback](https://media.giphy.com/media/3oFzm0oNwQ9gb1ARcQ/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a dismissable button.'
```

Since this module extends `TextLayer`, it inherits all the goodness that comes with it. [Documentation here.](https://framer.com/docs/#text.textlayer)

So as an example, this is how to invert the style of the feedback component (white background / dark text)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a dismissable button.'
    color: 'black'
    backgroundColor: 'white'
```


## Auto Dismiss Feedback
If an `autoDimiss` object is passed in as an option, it will dismiss itself after a set time.

![auto dismiss feedback](https://media.giphy.com/media/3ohc13JxwiMcnnXf0c/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a self destruct timer.'
    autoDismiss:
      duration: 4
```

Some options are available to customise the style and behaviour:

#### White background / blue counter

![white example](https://media.giphy.com/media/xULW8Fsbgcx8z5S9JS/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a self destruct timer.'
    backgroundColor: 'white'
    color: 'black'
    autoDismiss:
      duration: 2
      color: '0097F1'
```

#### Pink background / white counter

![pink example](https://media.giphy.com/media/3oFzm0U7bMruTwsudy/giphy.gif)

```coffee
button.onClick ->
  feedback = new Feedback
    text: 'This is a feedback with a self destruct timer.'
    backgroundColor: '#FF86AA'
    color: 'white'
    autoDismiss:
      duration: 2
      color: 'white'
```
