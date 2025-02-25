const simpleBookmarking = document.getElementById("simple-bookmarking");
const simpleBookmarkingContent = document.getElementById("simple-bookmarking-content");

const accordion = document.getElementsByClassName("accordion");
const tablinks = document.getElementsByClassName("tablinks");
const tabcontent = document.getElementsByClassName("tabcontent");

const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('email-invalid-err');
const errorIcon = document.getElementById('error-icon');

const menuHamburger = document.getElementById('menu_hamburger');
const closeMenu = document.getElementById('close_menu');
const nav_menu = document.getElementById('nav_menu');

menuHamburger.addEventListener("click", () => {
    nav_menu.classList.replace("hidden", "block");
    document.body.classList.add("overflow-hidden");
});

closeMenu.addEventListener("click", () => {
    nav_menu.classList.replace("block", "hidden");
    document.body.classList.remove("overflow-hidden");
});

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

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(emailRegex);
};

function handleSubmit(e) {
    e.preventDefault(e);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("🚀 ~ handleSubmit ~ data:", data)

    if (validateEmail(data.email)) {
        errorMessage.classList.replace("block", "hidden");
        email.classList.replace("border-soft-red", "border-transparent");
        errorIcon.classList.replace("block", "hidden");
        form.reset();
    } else {
        errorMessage.classList.replace("hidden", "block");
        email.classList.replace("border-transparent", "border-soft-red");
        errorIcon.classList.replace("hidden", "block");
    }
}

form.addEventListener('submit', handleSubmit);