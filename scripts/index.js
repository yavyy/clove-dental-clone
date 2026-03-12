// Scrolls page to the top on load
window.onload = function () {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};

const form = document.getElementById("consultationForm");
const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const captchaInput = document.getElementById("captchaInput");
const captchaText = document.getElementById("captchaText").innerText;
const terms = document.getElementById("terms");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();
  const captcha = captchaInput.value.trim();

  // Name validation
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // Mobile validation (10 digit)
  const mobileRegex = /^[6-9]\d{9}$/;
  if (!mobileRegex.test(mobile)) {
    alert("Enter a valid 10 digit mobile number");
    return;
  }

  // Captcha validation
  if (captcha !== captchaText) {
    alert("Captcha does not match");
    return;
  }

  // Checkbox validation
  if (!terms.checked) {
    alert("Please accept terms and privacy policy");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});

//Mobile Form Validations
const mobileForm = document.getElementById("mobileForm");
const mobileName = document.getElementById("mobileName");
const mobileNumber = document.getElementById("mobileNumber");
const mobileCaptchaInput = document.getElementById("mobileCaptchaInput");
const mobileCaptchaText = document.getElementById("mobileCaptchaText").innerText;
const mobileTerms = document.getElementById("mobileTerms");

mobileForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = mobileName.value.trim();
  const number = mobileNumber.value.trim();
  const captcha = mobileCaptchaInput.value.trim();

  // Name validation
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // Mobile validation
  const mobileRegex = /^[6-9]\d{9}$/;

  if (!mobileRegex.test(number)) {
    alert("Enter a valid 10 digit mobile number");
    return;
  }

  // Captcha validation
  if (captcha !== mobileCaptchaText) {
    alert("Captcha does not match");
    return;
  }

  // Checkbox validation
  if (!mobileTerms.checked) {
    alert("Please accept the terms and privacy policy");
    return;
  }

  alert("Form submitted successfully!");
  mobileForm.reset();
});

// Load Section Headings
const getSectionHeadings = async () => {
  try {
    const response = await fetch("../data/heading.json");
    const data = await response.json();
    const headingSections = document.querySelectorAll(".heading-section");
    data.map((section, index) =>
      headingSections[index].insertAdjacentHTML(
        "afterbegin",
        `<div class="heading-box">
          <h3>${section.heading}</h3>
          <p class="sub-heading">${section.subHeading}</p>
        </div>`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getSectionHeadings();

// Change hero section text
const heroHeading = document.querySelector(".hero-heading");
const heroSubHeading = document.querySelector(".hero-sub-heading");

function updateHeroHeading() {
  if (window.innerWidth <= 768) {
    heroHeading.innerHTML = `Your Smile,<br>
    Our Priority At<br> <span class="clove-text">Clove Dental</span>`;
    heroSubHeading.innerHTML = `
    Expert RCT. Zero Pain.<br> Right Here in Delhi.`
  } else {
    heroHeading.innerHTML = "Painless Root Canal Treatment in Delhi";
    heroSubHeading.innerHTML = "Expert RCT. Zero Pain. Right Here in Delhi."
  }
}

updateHeroHeading();
window.addEventListener("resize", updateHeroHeading);

// Load Header Features
const getHeroFeatures = async () => {
  try {
    const response = await fetch("../data/heroFeature.json");
    const data = await response.json();
    const nav = document.querySelector("nav");
    const heroFeatures = [...data, ...data];
    heroFeatures.map((feature) =>
      nav.insertAdjacentHTML(
        "beforeend",
        `<div class="hero-feature">
        <img src="${feature.img}" alt="${feature.stats + " " + feature.name}" />
        <p>
          <span class="stats">${feature.stats}+</span>
          ${feature.name}
        </p>
      </div>`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getHeroFeatures();

// Load Treatments
const getTreatments = async () => {
  const response = await fetch("../data/treatment.json");
  const data = await response.json();
  const section = document.querySelector(".treatment-box");
  data.map((treatment) =>
    section.insertAdjacentHTML(
      "beforeend",
      `<div class="treatment">
          <img src="${treatment.img}" alt="${treatment.name}" />
          <article>
            <h3>${treatment.name}</h3>
            <p class="treatment-description">
              ${treatment.description}
            </p>
            <h4>Types of RCT</h4>
            <ul>
            ${treatment.types.map((type) => `<li>${type}</li>`).join("")}
            </ul>
            <p class="price-head">Starting Price</p>
            <h4>${treatment.price}</h4>
            <button>Get Free Consultation</button>
          </article>
        </div>`
    )
  );
};
getTreatments();

// Load Transformation
const getTransformationStories = async () => {
  try {
    const response = await fetch("../data/transformationStory.json");
    const data = await response.json();
    const section = document.querySelector(".transformation-box");
    data.map((story) =>
      section.insertAdjacentHTML(
        "beforeend",
        `<div class="transformation-story">
        <img src="${story.img}" alt="${story.name}">
        <div>
          <div>${story.name}</div>
          <span class="location">${story.location}</span>
        </div>
      </div>`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getTransformationStories();

// Load Why Choose
const getWhyChoose = async () => {
  try {
    const response = await fetch("../data/whyChoose.json");
    const data = await response.json();
    const box = document.querySelector(".why-choose-features-box");
    data.map((feature) =>
      box.insertAdjacentHTML(
        "beforeend",
        `<li class="feature">${feature} <span>+</span></li>`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getWhyChoose();

// Load Patient Stories
const getPatientStories = async () => {
  try {
    const response = await fetch("../data/patientStory.json");
    const data = await response.json();
    const section = document.querySelector(".patient-story-box");
    data.map((story) =>
      section.insertAdjacentHTML(
        "beforeend",
        `<div class="patient-story">
        <img src="${story.img}" class="${story.name === "Nikita" ? "patient-image" : ""
        }" alt="${story.name}">
        <div>
        <div>${story.name}</div>
        <span class="treatment">${story.treatment}</span>
          </div>
          <p>Indore</p>
        </div>`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getPatientStories();

// Load Features
const getFeatures = async () => {
  try {
    const response = await fetch("../data/feature.json");
    const data = await response.json();
    const section = document.querySelector(".feature-box");
    data.map((feature) =>
      section.insertAdjacentHTML(
        "beforeend",
        `<div class="feature">
          <img src="${feature.img}" alt="${feature.name}" />
          <div class="detail-box">
            <div class="heading">
              <h4>${feature.name}</h4>
              <div class="divider"></div>
            </div>
            <p>${feature.description}</p>
            <div class="learn-box">
              <img src="./assets/search.png" alt="" class="search-icon" />
              <span>Learn More</span>
              <img src="/assets/right-arrow.png" alt="">
            </div>
          </div>
        </div>`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getFeatures();

// Load Google Reviews
const getReviews = async () => {
  try {
    const response = await fetch("../data/reviews.json");
    const data = await response.json();
    const section = document.querySelector(".review-box");
    data.map((review) =>
      section.insertAdjacentHTML(
        "beforeend",
        `<div class="review">
            <div class="google-icon">
              <img src="./assets/google.png" alt="Google Icon" class="google-image">
            </div>
            <img src="${review.img}" alt="${review.name}" />
            <h4>${review.name}</h4>
            <div class="star-box">
              ${Array.from({ length: review.stars })
          .map(
            () => `<img src="./assets/star.png" alt="Star Icon" />`
          )
          .join("")}
            </div>
            <p>${review.review}</p>
            <div class="read-box">Read more ></div>
          </div>`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getReviews();

// Load Clinic Locations and Images
const getClinics = async () => {
  try {
    const response = await fetch("../data/clinic.json");
    const data = await response.json();

    const locationBox = document.querySelector(".location-box");
    const clinicBox = document.querySelector(".clinic-box");

    data.clinicLocations.map((location) =>
      locationBox.insertAdjacentHTML(
        "beforeend",
        `<div class="location">
            <img src="${location.img}" alt="${location.location}">
            <div>
              <h4>${location.location}</h4>
              <p>${location.clinics} Clinics</p>
            </div>
          </div>`
      )
    );

    data.clinicImages.map((clinic, index) =>
      clinicBox.insertAdjacentHTML(
        "beforeend",
        `<img src="${clinic}" alt="Clinic-${index + 1}">`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getClinics();

// Load FAQ's
const getFaq = async () => {
  try {
    const response = await fetch("../data/faq.json");
    const data = await response.json();
    const box = document.querySelector(".faq-box");
    data.map((faq) =>
      box.insertAdjacentHTML(
        "beforeend",
        `<li class="faq">${faq} <span>+</span></li>`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
getFaq();
