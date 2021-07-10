![theme-options](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-theme-options.png)

# Dynamic Countdown v1.4.1

_Updated at July 9th, 2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)._

This is a public [npm package](https://www.npmjs.com/package/dynamic-countdown) that aims to make it easier to use countdown by simply adding data attributes to you HTML.

Check our demo [here](https://marcelo-diament.github.io/dynamic-countdown/index.html). And don't forget to check our [style theme options table](https://marcelo-diament.github.io/dynamic-countdown/theme-table.html).

Visit our the [dynamic-countdown npm page](https://www.npmjs.com/package/dynamic-countdown).

## Summary

* [Getting Started](#getting-started)

* [Using HTML data attributes](#using-html-data-attributes)

    - [JS Script](#call-the-script-module-to-your-html)

    - [Counter Container](#counter-container)

    - [Counter Children](#counter-children)

* [Using vanilla JS method](#using-vanilla-js-method)

    - [Import](#import)

    - [MountCountdown](#mountcountdown)

    - [Running the Countdown](#running-the-countdown)

* [Style Theme](#style-theme)

    - [Default](#default)

    - [Highlight](#highlight)

    - [Primary](#primary)

    - [Secondary](#secondary)

    - [Tertiary](#tertiary)

* [Changelog](#changelog)
___

## Getting Started

> There are two ways of using this package - setting HTML elements or mounting it through vanilla JS

You can construct you countdown by setting HTML tags with its necessary and optional data attributes or you can create a custom countdown with vanilla JS and append your on-the-fly countdown element in the container tag of your choice. Or you can also use both of them. Finally, just call the `counter()` method.

### Make sure you have node installed

Just make sure you have the node and npm installed. You can check it by running the following commands:

```sh
node -v
# Expected return: v12.18.4 (or a more recent version)
```

```sh
npm -v
# Expected return: v6.14.8 (or a more recent version)
```

### Install the package as a dependency

The first step is to install this package as a dependency:

```sh
npm i dynamic-countdown --save
```

___

## Using HTML data attributes

In order to use the Dynamic Countdown by using data attributes, you just need to follow those 2 simple steps:

### Call the script module to your HTML

Before closing the `body` tag, just add the following code snippet:

```html
<script type="module" src="./node_modules/dynamic-countdown/index.js"></script>
```

### Create your own counter element

**It is necessary that your countdown component uses the `counter` class** and also to declare some specific data attributes.

Then you must add its children, according to the date format desired.

#### Counter Container

The required data attributes are (default values for optional attributes in bold):

| Data Attribute | Options | Role |
| -------------- | ------- | ---- |
| `data-target-date` (required) | 'MM/DD/YYYY HH: MM' (month/day/year hour:minute) | Defines the time difference between current time and this target date |
| `data-time-format` (optional) | **'DHMS'**, 'DHM', 'DH', 'D', 'HMS', 'HM', 'H', 'MS', 'M', 'S' | Defines which time units will be shown on the countdown |
| `data-min-digits` (optional) | **'2'** or more | Defines the minimum length of each time unit counter |
| `data-lang` (optional) | **'pt'**, 'en', 'es', 'fr', 'it' | Defines if the language in wich the time units will be displayed |

#### Counter Children

Within the container, you must create children elements to show each desired time unit. **Each children must have the `counter__unit` class declared.**

And you must also declare each children elements time unit by declaring the `data-time-unit` attribute, that can have the following values: `days` , `hours` , `minutes` and/or `seconds` .

**Example**

Here is a simple example:

```html
<p class="counter" data-target-date="12/31/2021 23:59" data-time-format="DHMS" data-min-digits="2" data-lang="en">
    <span data-unit="days" class="counter__unit"></span>
    <span data-unit="hours" class="counter__unit"></span>
    <span data-unit="minutes" class="counter__unit"></span>
    <span data-unit="seconds" class="counter__unit"></span>
</p>
```

And another example, with the minimum required data-attributes:

```html
<p class="counter" data-target-date="12/31/2021 23:59">
    <span data-unit="days" class="counter__unit"></span>
    <span data-unit="hours" class="counter__unit"></span>
    <span data-unit="minutes" class="counter__unit"></span>
    <span data-unit="seconds" class="counter__unit"></span>
</p>
```

___

## Using vanilla JS method

You can create as many counters as you want to by using the `mountCounter` method. Then, you must call the `counter` method on you main file.

### Import

Firstly, you must import the `counter` to your file:

```jsx
import { mountCounter } from 'dynamic-countdown'
```

### MountCountdown

Now you must call the `mountCountdown` method and append the mounted countdown to the HTML element you need:

```js
// Creating the countdown
const myCountdown = mountCounter('08/01/2021 16:20', 'DH', '2', 'en', 'primary-light-inverted')
// Appending it to the main HTML tag
document.querySelector('main').appendChild(myCountdown)
```

### Running the Countdown

On your main file, you must import the `counter` method and execute it after window loads:

```jsx
import { counter } from 'dynamic-countdown'
window.onload = () => {
    counter()
}
```

___

## Style Theme

You can also add extra classes in order to take advantage of the dynamic-countdown theme.

In order to use the dynamic-countdown theme you must add its style too (right before the closing `head` tag):

```html
<link rel="stylesheet" href="./node_modules/dynamic-countdown/style/style.min.css">
```

Or you may use this other link: `https://marcelo-diament.github.io/dynamic-countdown/style/style.min.css` .

You can check each possible value (declared below) in the demo version ( `./index.html` ):

### Default

*Tons of grey*

![default-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-default-theme-options.png)

* `.counter--light`

* `.counter-inverted`

* `.counter--light-inverted`

### Highlight

*Pink and black*

![highlight-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-highlight-theme-options.png)

* `.counter--highlight`

* `.counter--highlight-light`

* `.counter--highlight-inverted`

* `.counter---highlight-light-inverted`

### Primary

*Yellow and black*

![primary-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-primary-theme-options.png)

* `.counter--primary`

* `.counter--primary-light`

* `.counter--primary-inverted`

* `.counter---primary-light-inverted`

### Secondary

*Blue and black*

![secondary-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-secondary-theme-options.png)

* `.counter--secondary`

* `.counter--secondary-light`

* `.counter--secondary-inverted`

* `.counter---secondary-light-inverted`

### Tertiary

*Green and black*

![tertiary-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-tertiary-theme-options.png)

* `.counter--tertiary`

* `.counter--tertiary-light`

* `.counter--tertiary-inverted`

* `.counter---tertiary-light-inverted`

___

## Changelog

### v1.4.1

_07/09/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Bugfixes**

* Minified Script updated

**Features**

* Documentation updated

### v1.4.0

_07/09/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Features**

* Export updated

* Documentation updated

### v1.3.0

_07/09/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Features**

* Script minified

* Documentation updated

### v1.2.0

_07/09/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Features**

* Main script renamed (and imports updated)

* Export updated

* Documentation updated

### v1.1.0

_07/04/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Features**

* Demo main page and theme table page updated

* Cover image updated

* Documentation updated

### v1.0.0

_07/04/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Features**

* `counter()` and `mountCounter()` methods added

* `timeFormat` arg as optional

* Theme and demo styles minified

* [Main demo page](https://marcelo-diament.github.io/dynamic-countdown/index.html) updated

* [Theme options table page](https://marcelo-diament.github.io/dynamic-countdown/theme-table.html) added to demo

* Documentation updated

### v0.2.2

_07/03/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Bugfixes**

* Extensions added to import statements

### v0.2.1

_07/03/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Bugfixes**

* Documentation updated

### v0.2.0

_07/03/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Features**

* Files structure updated

* Demo updated

* Screenshots added to documentation

* Documentation updated

### v0.1.1

_07/03/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Bugfixes**

* Documentation updated

### v0.1.0

_07/03/2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

**Features**

* Mounts countdown based on HTML data attributes of `.counter` elements

* Documentation
