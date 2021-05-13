# My Temperature Converter

A simple temperater converter that can convert temperatures from Fahrenheit to Celcius and Celsius to Fahrenheit

## Table of contents

- [General Info](#general-info)
- [Known Issues](known-issues)
- [Technologies](#technologies)
- [Setup](#setup)
- [Project Status](#project-status)
- [Sources](#sources)

## General info

This project was built as a way to practice writing functions. The goals were to:

1. Input a Fahrenheit temperature and return a new temperature in Celcius and then to input a Celcius temperature to return a new temperature in Fahrenheit.
2. Change the new temperatures containers background color to red if the new temperature was hot or blue if the new temperature was freezing.

## Known Issues

Writing a single function that would move between the convertToCelsius and convertToFahrenheit functions. Without an option that moved between those two functions I was getting bugs in the second goal of this project. This was fixed with a helper function:

```javascript
function convertTemp() {
	if (tempSelector.value == "f_to_c") {
		convertToCelsius();
	}
	if (tempSelector.value == "c_to_f") {
		convertToFahrenheit();
	}
}
```

## Technologies

This project is created with:

- HTML
- CSS
- Javascript

## Setup

To run this project, fork and clone to your local repository.

## Project Status

🎊 Completed 🎊

## Sources

[Math formula for conversion explained with examples](https://www.almanac.com/content/temperature-conversion)
