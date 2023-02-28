# Angular Popover

Angular Popover Directive
This is an Angular directive that creates a popover component. The directive allows you to attach a popover to any element that you specify.

## Run Locally

Install dependencies

```bash
  npm install
```

```bash
  ng serve
```


## Usage/Examples

```javascript
<button popoverTemplate text="Hello, world!">Show Popover</button>
```

The popoverTemplate directive can be used on any HTML element. The text input specifies the text to be displayed in the popover.

##  Options
The popoverTemplate directive has several input options:

text: (required) - The text to be displayed in the popover.
cButton: (optional, default false) - Whether to display a close button in the popover. <br>
closeOnClickOutside: (optional, default false) - Whether to close the popover when the user clicks outside of it.
Styling <br>
The popover can be styled using CSS. The popover component has a class of popover-container. <br>

Built With <br>
Angular <br>
Angular Material CDK <br> <br>
Contributions are welcome. Please submit a pull request. <br>

