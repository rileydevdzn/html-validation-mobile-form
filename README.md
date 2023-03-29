<div align="center">
  <img
    src="Mobile form - instructions.png"
    alt="Mobile sign-up form with instructions displayed for entering inputs"
    height="400x">
</div>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

I wanted to see what I could accomplish using only built-in HTML validation on a mobile form. I also wanted to explore how I can make the form more useful and usable by focusing on the small details, like structure and how information and error messages are presented. Also working with ARIA attributes to make the floating labels more accessible. Created using HTML and CSS; with a little bit of JavaScript and the Constraint Validation API.

Users should be able to:

- Indicate which fields are required and present an error message if required field is left blank
- View instructions for formatting name, email address, and password inputs
- See feedback/error messages for correct and incorrect inputs

### Screenshots

<div align="center">
  <img
    src="Mobile form - valid input.png"
    alt="Mobile sign-up form with green checkmark icon indicating a valid input"
    height="400px">
  <img
    src="Mobile form - fix error.png"
    alt="Mobile sign-up form with red x-mark icon indicating an invalid input and hint for correct input format"
    height="400px">
    <p><em>Valid and invalid inputs with feedback and error messages</em></p>
</div>

### Links

- Solution URL: [Mobile form with client-side validation](https://rileydevdzn.github.io/html-validation-mobile-form/)

## My process

### Built with

- Semantic HTML5 markup
- Built-in HTML form validation
- CSS floating labels 
- ARIA attributes for a11y
- JavaScript Constraint Validation API for customizable error messages

### What I learned

I explored a wide range of topics building this mobile form, both in the build details and how my choices as a developer can affect the user's experience. The top 5 things I learned included:

1. Experimenting with floating labels instead of placeholder text. And how to make them more accessible, since the semantically-linked label comes after the input in the DOM, I added an `.sr-only` span before the input then added the `aria-hidden` attribute to the label to prevent it from being read twice.

```css
/*Position labels inside input fields instead of using placeholder text. Semantically linked. Aria-hidden attribute on the label prevents the content from being presented twice to screen readers, already presented with a previous span and .sr-only class*/
label {
  width: calc(100% - 1rem);
  position: absolute;
  top: 1.15rem;
  left: 1rem;
  opacity: 0.6;
  font-size: 1.25rem;
}
/*Move floating label above input field when field is selected*/
input:focus + label, input:valid + label, input:invalid:not(:focus):not(:placeholder-shown) + label {
  opacity: 1;
  position: absolute;
  top: -2.75rem;
  left: 0;
}
```

2. Using built-in HTML validation with patterns and regular expressions (regex). I tested these patterns to make sure they were working correctly, but if you find an email or other pattern I missed let me know! I appreciate the opportunity to improve in this area.

```html
<div class="details">
  <span class="sr-only">Email Address</span>
  <input 
    required type="email" class="input email" id="email"
    autocomplete="email" aria-describedby="emailhint" name="email"
    pattern="^[\w]+[\w\.+-]*@[\w]+(\.[\w-]{2,})?\.[a-zA-Z]{2,}$"
    title="Please enter a valid email address. For example, name@mail.com" 
    placeholder=" ">
  <label for="email">
    Email Address<span class="asterisk">*</span>
  </label>
  <div class="hint" id="emailhint">
    Please enter a valid email address.
  </div>
</div>
```

3. Experimenting with a "view-as-you-type" password, similar to a pattern seen on Amazon where the unmasked password appears below the input box. 

```js
//Allow user to view password while typing
let pw = document.getElementById("pw");
let viewpw = document.getElementById("view-pw");
pw.oninput = function(event) {
  viewpw.textContent = pw.value;
}
```

4. Reward early, punish late pattern for feedback and error messages.

One of the top UX questions I had was about timing, when to validate inputs and display error messages - as a user types? after the input is no longer in focus? when the users goes to submit the form?

The pattern I used focused on rewarding users early and punishing late, meaning the form would validate in the background as the user types. It would display correct inputs immediately as the user types, but wouldn't show the error message until the input was no longer in focus (when the user clicks or tabs away). That way the user wouldn't be annoyed by a constant error as they were typing an email address, for example, but would receive the error after they were done typing if the format was incorrect. I also wanted to avoid the validation at submit scenario, finding out you have an error somewhere in the form is pretty annoying when you think you're done and trying to submit.

5. Presentation of information is important.

I used progressive disclosure patterns to display instructions for how to complete each input that appear when the input is focused/selected. I also included hints that appear when you hover over the input box to aid users in using the correct format. I originally included the instructions below the input boxes; however after testing on mobile I found that autocomplete and keyboards would sometimes overlap and hide the instructions, so I moved them above the input box, between the input and the label. 

For validation, I used regular expressions to validate input formatting and also included the option for autocomplete to help automate actions for users. I intentionally made the name box a single input (rather than two inputs) and kept validation less strict to avoid forcing a pattern on users. 

For feedback, I included multiple visual indicators for correct and incorrect inputs with a checkmark or x-icon, a change in color, and a change in border to make the change in status apparent. 

### Continued development

One area I'd like to work on more is accessibility, doing more to ensure forms (and all of my builds in general) are accessible for keyboard, screen-reader, and other assistive-device users. I'm also interested in the security aspect of mobile forms, how different approaches can make the form more or less secure; which I hope to dive into in a later project. 

### Useful resources

- [Smashing Magazine: Best practices for mobile form design](https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/) - This is a great article with a lot of useful tips that really helped me realize how much the small details make a big difference on mobile forms.
- [Smashing Magazine: Accessible form validation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/) - A much more recent article I came across while researching a11y as I'm trying to improve my skills in this area and make my builds more accessible.   

## Author

- Frontend Mentor - [@rileydevdzn](https://www.frontendmentor.io/profile/rileydevdzn)
