# Dynamic Countdown v1.0.0

_Created at July 3rd, 2021 by [Marcelo Diament](https://github.com/Marcelo-Diament/)_

This is a public npm package that aims to make it easier to use countdown by simply adding data attributes to you HTML.

## Getting Started

In order to use the Dynamic Countdown, you just need to follow those 3 simple steps:

### \#01 Install the package as dependency

```sh
npm i dynamic-countdown --save
```

### \#02 Call the script module to your HTML

Before closing the `body` tag, just add the following code snippet:

```html
<script type="module" src="./node_modules/dynamic-countdown/index.js"></script>
```

### \#02 Create a `.counter` container and add its children

It is necessary that your countdown component uses the `counter` class and to declare some specific data attributes.

Than you must add its children, according to the date format desired. Here is a simple example:

```html
<p class="counter" data-target-date="12/31/2021 23:59" data-time-format="DHMS" data-min-digits="2" data-lang="en">
    <span data-unit="days" class="counter__unit"></span>
    <span data-unit="hours" class="counter__unit"></span>
    <span data-unit="minutes" class="counter__unit"></span>
    <span data-unit="seconds" class="counter__unit"></span>
</p>
```

**Counter Container**

The required data attributes are:

* **data-target-date** | you must declare the target date (MM/DD/YYYY HH: MM)

* **data-time-format** | you must define which time units will be used ('DHMS', 'DHM', 'DH', 'D', 'HMS', 'HM', 'H', 'MS', 'M' or 'S')

You can also define:

* **data-min-digits** | defines the minimum length of each time unit counter

* **data-lang** | defines if the language in wich the time units will be displayed ('pt' - default, 'en', 'es', 'fr' or 'it')

**Counter children**

And within the container, you must create children elements to show each desired time unit, declaring its time unit with the `data-time-unit` attribute, that can have the following values: `days` , `hours` , `minutes` and/or `seconds` .

Each children must alse have the `counter__unit` class declared.

## Dymanic-countdown style theme

You can also add extra classes in order to take advantage of the dynamic-countdown theme.

In order to use the dynamic-countdown theme you must add its style too (right before the closing `head` tag):

```html
<link rel="stylesheet" href="./node_modules/dynamic-countdown/style/style.css">
```

You can check each possible value (declared below) in the demo version ( `./index.html` ):

### Default Theme

*Tons of grey*

![default-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-default-theme-options.png)

* `.counter--light`

* `.counter-inverted`

* `.counter--light-inverted`

### Highlight Theme

*Pink and black*

![highlight-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-highlight-theme-options.png)

* `.counter--highlight`

* `.counter--highlight-light`

* `.counter--highlight-inverted`

* `.counter---highlight-light-inverted`

### Primary Theme

*Yellow and black*

![primary-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-primary-theme-options.png)

* `.counter--primary`

* `.counter--primary-light`

* `.counter--primary-inverted`

* `.counter---primary-light-inverted`

### Secondary Theme

*Blue and black*

![secondary-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-secondary-theme-options.png)

* `.counter--secondary`

* `.counter--secondary-light`

* `.counter--secondary-inverted`

* `.counter---secondary-light-inverted`

### Tertiary Theme

*Green and black*

![tertiary-theme](https://raw.githubusercontent.com/Marcelo-Diament/dynamic-countdown/main/img/counter-tertiary-theme-options.png)

* `.counter--tertiary`

* `.counter--tertiary-light`

* `.counter--tertiary-inverted`

* `.counter---tertiary-light-inverted`
