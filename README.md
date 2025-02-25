# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![Screenshot of the Bookmark landing page](./screenshot.gif)

### Links

- Solution URL: [Github](https://github.com/snigdha-sukun/bookmark-landing-page)
- Live Site URL: [Vercel](https://bookmark-landing-page-chi-eight.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to setup the Tailwind CSS using CLI:

```bash
npm install tailwindcss @tailwindcss/cli
```

```css
@import "tailwindcss";
```

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

```html
<link href="./output.css" rel="stylesheet">
```

I leanred how to add custom font-family, font-size and colors in Tailwind CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
@import "tailwindcss";

@theme {
    --font-rubik: "Rubik", sans-serif;
    --color-soft-blue: hsl(231, 69%, 60%);
    --color-soft-red: hsl(0, 94%, 66%);
    --color-very-light-grayish-blue: hsl(229, 8%, 95%);
    --color-light-grayish-blue: hsl(229, 8%, 85%);
    --color-grayish-blue: hsl(229, 8%, 60%);
    --color-dark-grayish-blue: hsl(229, 8%, 40%);
    --color-very-dark-blue-nav: hsl(229, 31%, 21%, 95%);
    --color-very-dark-blue: hsl(229, 31%, 21%);
}

html {
  font-size: 18px;
}
```

I learned how to create an accordian:

```html
<div class="divide-y divide-light-grayish-blue | my-8 lg:mx-80">
        <!-- Accordion item -->
        <div class="py-2">
          <button id="faqs-title-01" type="button"
            class="accordion | flex items-center justify-between w-full text-left py-2 text-very-dark-blue | transition-all delay-150 duration-300 ease-in-out | cursor-pointer hover:text-soft-red"
            aria-controls="faqs-text-01">
            <span>What is Bookmark?</span>
            <svg class="transition-transform delay-150 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg"
              width="18" height="12">
              <path fill="none" class="stroke-soft-blue | transition-stroke delay-150 duration-300 ease-in-out"
                stroke-width="3" d="M1 1l8 8 8-8" />
            </svg>
          </button>
          <div id="faqs-text-01" aria-labelledby="faqs-title-01"
            class="panel | grid text-dark-grayish-blue overflow-hidden | max-h-0 | transition-all delay-150 duration-300 ease-in-out">
            <div class="overflow-hidden">
              <p class="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
              </p>
            </div>
          </div>
        </div>
        <!-- Accordion item -->
        <div class="py-2">
          <button id="faqs-title-02" type="button"
            class="accordion | flex items-center justify-between w-full text-left py-2  text-very-dark-blue | transition-all delay-150 duration-300 ease-in-out | cursor-pointer hover:text-soft-red"
            aria-controls="faqs-text-02">
            <span>How can I request a new browser?</span>
            <svg class="transition-transform delay-150 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg"
              width="18" height="12">
              <path fill="none" class="stroke-soft-blue | transition-stroke delay-150 duration-300 ease-in-out"
                stroke-width="3" d="M1 1l8 8 8-8" />
            </svg>
          </button>
          <div id="faqs-text-02" aria-labelledby="faqs-title-02"
            class="panel | grid text-dark-grayish-blue overflow-hidden | max-h-0 | transition-all delay-150 duration-300 ease-in-out">
            <div class="overflow-hidden">
              <p class="pb-3">
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
              </p>
            </div>
          </div>
        </div>
        <!-- Accordion item -->
        <div class="py-2">
          <button id="faqs-title-03" type="button"
            class="accordion | flex items-center justify-between w-full text-left py-2  text-very-dark-blue | transition-all delay-150 duration-300 ease-in-out | cursor-pointer hover:text-soft-red"
            aria-controls="faqs-text-03">
            <span>Is there a mobile app?</span>
            <svg class="transition-transform delay-150 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg"
              width="18" height="12">
              <path fill="none" class="stroke-soft-blue | transition-stroke delay-150 duration-300 ease-in-out"
                stroke-width="3" d="M1 1l8 8 8-8" />
            </svg>
          </button>
          <div id="faqs-text-03" aria-labelledby="faqs-title-03"
            class="panel | grid text-dark-grayish-blue overflow-hidden | max-h-0 | transition-all delay-150 duration-300 ease-in-out">
            <div class="overflow-hidden">
              <p class="pb-3">
                Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                sollicitudin ex et ultricies bibendum.
              </p>
            </div>
          </div>
        </div>
        <!-- Accordion item -->
        <div class="py-2">
          <button id="faqs-title-04" type="button"
            class="accordion | flex items-center justify-between w-full text-left py-2  text-very-dark-blue | transition-all delay-150 duration-300 ease-in-out | cursor-pointer hover:text-soft-red"
            aria-controls="faqs-text-04">
            <span>What about other Chromium browsers?</span>
            <svg class="transition-transform delay-150 duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg"
              width="18" height="12">
              <path fill="none" class="stroke-soft-blue | transition-stroke delay-150 duration-300 ease-in-out"
                stroke-width="3" d="M1 1l8 8 8-8" />
            </svg>
          </button>
          <div id="faqs-text-04" aria-labelledby="faqs-title-05"
            class="panel | grid text-dark-grayish-blue overflow-hidden | max-h-0 | transition-all delay-150 duration-300 ease-in-out">
            <div class="overflow-hidden">
              <p class="pb-3">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
                vitae neque eget nisl gravida pellentesque non ut velit.
              </p>
            </div>
          </div>
        </div>
      </div>
```

```js
const accordion = document.getElementsByClassName("accordion");

function toggleFAQAccordian(activeAccordion) {
    for (const acc of accordion) {
        if (acc !== activeAccordion) {
            acc.nextElementSibling.style.maxHeight = null;
            acc.querySelector("svg").classList.remove("rotate-180");
            acc.querySelector("path").classList.remove("stroke-soft-red");
        }
    }
    const icon = activeAccordion.querySelector("svg");
    icon.classList.toggle("rotate-180");
    activeAccordion.querySelector("path").classList.toggle("stroke-soft-red");

    const panel = activeAccordion.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
}

for (const acc of accordion) {
    acc.addEventListener("click", function () {
        toggleFAQAccordian(this);
    });
}
```

I learned how to create Tabs:

```html
<div
        class="tab | border-b border-transparent lg:border-light-grayish-blue | text-center font-medium text-grayish-blue | my-4">
        <hr class="border border-light-grayish-blue lg:hidden">
        <button id="simple-bookmarking" data-tab="simple-bookmarking"
          class="tablinks active-tab | inline-block | p-4 | text-very-dark-blue | rounded-t-lg | cursor-pointer | transition-all delay-150 duration-300 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-soft-red after:scale-x-100 after:transition-transform after:delay-150 after:duration-300 after:ease-in-out">
          Simple Bookmarking
        </button>
        <hr class="border border-light-grayish-blue lg:hidden">
        <button id="speedy-searching" data-tab="speedy-searching"
          class="tablinks | inline-block | p-4 | rounded-t-lg | hover:text-soft-red cursor-pointer | transition-all delay-150 duration-300 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-soft-red after:scale-x-0 after:transition-transform after:delay-150 after:duration-300 after:ease-in-out">
          Speedy Searching
        </button>
        <hr class="border border-light-grayish-blue lg:hidden">
        <button id="easy-sharing" data-tab="easy-sharing"
          class="tablinks | inline-block | p-4 | rounded-t-lg | hover:text-soft-red cursor-pointer | transition-all delay-150 duration-300 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-soft-red after:scale-x-0 after:transition-transform after:delay-150 after:duration-300 after:ease-in-out">
          Easy Sharing
        </button>
        <hr class="border border-light-grayish-blue lg:hidden">
      </div>

      <div class="relative | p-8 lg:mx-8 | h-[600px] lg:h-[400px] w-full">
        <div id="simple-bookmarking-content"
          class="tabcontent | flex items-center justify-center flex-col lg:grid grid-cols-2  place-items-center absolute | opacity-0 invisible | translate-x-full transition-all delay-150 duration-500 ease-in-out">
          <div>
            <img src="./images/illustration-features-tab-1.svg" alt="Illustration of a person using a computer">
          </div>
          <div class="text-center lg:text-start my-8 lg:mr-65">
            <h2 class="font-medium text-2xl text-very-dark-blue">Bookmark in one click</h2>
            <p class="text-grayish-blue | my-8">
              Organize your bookmarks however you like. Our simple drag-and-drop interface
              gives you complete control over how you manage your favourite sites.
            </p>

            <button
              class="bg-soft-blue text-white | px-8 py-2 | rounded-lg | | cursor-pointer hover:text-soft-blue hover:bg-white border-2 border-transparent hover:border-soft-blue | transition-all delay-150 duration-300 ease-in-out | drop-shadow-sm | hidden lg:block">More
              Info</button>
          </div>
        </div>
        <div id="speedy-searching-content"
          class="tabcontent | flex items-center justify-center flex-col lg:grid grid-cols-2 place-items-center absolute | opacity-0 invisible | translate-x-full transition-all delay-150 duration-500 ease-in-out">
          <div>
            <img src="./images/illustration-features-tab-2.svg" alt="Illustration of a person using a computer">
          </div>
          <div class="text-center lg:text-start my-8 lg:mr-65">
            <h2 class="font-medium text-2xl text-very-dark-blue">Intelligent search</h2>
            <p class="text-grayish-blue | my-8">
              Our powerful search feature will help you find saved sites in no time at all.
              No need to trawl through all of your bookmarks.
            </p>

            <button
              class="bg-soft-blue text-white | px-8 py-2 | rounded-lg | | cursor-pointer hover:text-soft-blue hover:bg-white border-2 border-transparent hover:border-soft-blue | transition-all delay-150 duration-300 ease-in-out | drop-shadow-sm | hidden lg:block">More
              Info</button>
          </div>
        </div>
        <div id="easy-sharing-content"
          class="tabcontent | flex items-center justify-center flex-col lg:grid grid-cols-2 place-items-center absolute | opacity-0 invisible | translate-x-full transition-all delay-150 duration-500 ease-in-out">
          <div>
            <img src="./images/illustration-features-tab-3.svg" alt="Illustration of a person using a computer">
          </div>
          <div class="text-center lg:text-start my-8 lg:mr-65">
            <h2 class="font-medium text-2xl text-very-dark-blue">
              Share your bookmarks
            </h2>
            <p class="text-grayish-blue | my-8">
              Easily share your bookmarks and collections with others. Create a shareable
              link that you can send at the click of a button.
            </p>

            <button
              class="bg-soft-blue text-white | px-8 py-2 | rounded-lg | | cursor-pointer hover:text-soft-blue hover:bg-white border-2 border-transparent hover:border-soft-blue | transition-all delay-150 duration-300 ease-in-out | drop-shadow-sm | hidden lg:block">More
              Info</button>
          </div>
        </div>
      </div>
```

```js
const simpleBookmarking = document.getElementById("simple-bookmarking");
const simpleBookmarkingContent = document.getElementById("simple-bookmarking-content");
const tablinks = document.getElementsByClassName("tablinks");
const tabcontent = document.getElementsByClassName("tabcontent");

function selectTab(activeTabButton, activeTabContent) {
    for (const tab of tabcontent) {
        tab.classList.add("opacity-0", "translate-x-full", "invisible");
        tab.classList.remove("opacity-100", "translate-x-0", "visible");
    }

    for (const tab of tablinks) {
        tab.classList.remove("text-very-dark-blue", "after:scale-x-100");
        tab.classList.add("after:scale-x-0", "hover:text-soft-red");
    }

    activeTabContent.classList.replace("opacity-0", "opacity-100");
    activeTabContent.classList.replace("translate-x-full", "translate-x-0");
    activeTabContent.classList.replace("invisible", "visible");

    activeTabButton.classList.add("text-very-dark-blue", "after:scale-x-100");
    activeTabButton.classList.remove("after:scale-x-0", "hover:text-soft-red");
}


selectTab(simpleBookmarking, simpleBookmarkingContent);

for (const button of tablinks) {
    button.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");
        const activeTabContent = document.getElementById(`${tabId}-content`);
        selectTab(this, activeTabContent);
    });
}
```

### Continued development

I want to practice using different CSS frameworks

### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation/tailwind-cli) - This helped me setup Tailwind CSS in my project & learn how to apply different CSS properties using Tailwind.
- [How TO - Collapsibles/Accordion](https://www.w3schools.com/howto/howto_js_accordion.asp) - This helped me add Accordian to my solution.
- [How TO - Tabs](https://www.w3schools.com/howto/howto_js_tabs.asp) - This helped me add Tabs to my solution.

## Author

- Frontend Mentor - [@snigdha-sukun](https://www.frontendmentor.io/profile/snigdha-sukun)

## Acknowledgments

Leanred how to ceate the blue box effect below the image from this github [link](https://github.com/Kingoruovie/PROJECTS/blob/main/FRONTEND/bookmark-landing-page-master/src/styles/styles.css).