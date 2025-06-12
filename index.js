// Function to get star rating

function getStarRating(rating) {
  let stars = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    stars += `<img src = "/img/StarFill.png">`; // Add full star
  }
  if (rating % 1 !== 0) {
    stars +=  `<img src = "/img/StarHalf.png">`; // Add half star if not an integer
  }
  return stars;
}

let reservedWhiskies = [
  {
    id: 1,
    title: "Cascamates",
    rating: 4.5,
    img: "/img/image3.png",
    desc: "Jameson Caskmates Stout and IPA edition - triple distilled whiskey you love finished in craft beer barrels",
    orderNow: "Order now",
  },
  {
    id: 2,
    title: "Blender’s Dog",
    rating: 4.5,
    img: "/img/image2.png",
    desc: "A rich, round, creamy mouthfeel, with the sweetness of butterscotch, giving way to the prickle of the pot still spices.",
    orderNow: "Order now",
  },
  {
    id: 3,
    title: "Black Barrel",
    rating: 4.5,
    img: "/img/image3.png",
    desc: "Our tribute to our coopers, who painstakingly give their bourbon barrels an additional charring to reveal their untold richness.",
    orderNow: "Order now",
  },
  {
    id: 4,
    title: "Crested",
    rating: 4.5,
    img: "/img/image1.png",
    desc: "Crested is a tribute to the first drops bottled at The Bow Street Distillery and is Jameson's oldest distillery bottled brand.",
    orderNow: "Order now",
  },
];

const reservedContainer = document.getElementById("reserved-whiskies-list");

window.addEventListener("DOMContentLoaded", () => {
  let reservedHTML = reservedWhiskies
    .map((item) => {
      return `
      <div class="reserved-card">
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <button class="order-now">${item.orderNow}</button>
      </div>
      `;
    })
    .join("");
  reservedContainer.innerHTML = reservedHTML;
});


// Whiskey Types Section
let whiskeyTypes = [
  {
    id: 1,
    title: "Cascamates",
    rating: 4.5,
    img: "/img/image3.png",
    desc: "Jameson Caskmates Stout and IPA edition - triple distilled whiskey you love finished in craft beer barrels",
    orderNow: "Order now",
  },
  {
    id: 2,
    title: "Blender’s Dog",
    rating: 4.5,
    img: "/img/image2.png",
    desc: "A rich, round, creamy mouthfeel, with the sweetness of butterscotch, giving way to the prickle of the pot still spices.",
    orderNow: "Order now",
  },
  {
    id: 3,
    title: "Black Barrel",
    rating: 4.5,
    img: "/img/image3.png",
    desc: "Our tribute to our coopers, who painstakingly give their bourbon barrels an additional charring to reveal their untold richness.",
    orderNow: "Order now",
  },
  {
    id: 4,
    title: "Crested",
    rating: 4.5,
    img: "/img/image1.png",
    desc: "Crested is a tribute to the first drops bottled at The Bow Street Distillery and is Jameson's oldest distillery bottled brand.",
    orderNow: "Order now",
  },
];



// Function to display items dynamically
function displayItems(menuItems, containerClass) {
  let container = document.querySelector(containerClass);
  if (!container) return; // Avoid errors if the container is missing

  let itemHTML = menuItems
    .map(
      (item) => `
    <article class="type-item">
      <img src="${item.img}" class="photo" alt="${item.title || item.name}" />
      <div class="item-info">
        <header>
          <br>${getStarRating(item.rating || 5)}
          <h4>${item.title || item.name}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
        ${
          item.orderNow
            ? `<br><button class="ord">${item.orderNow}</button>`
            : ""
        }
      </div>
    </article>
  `
    )
    .join("");

  container.innerHTML = itemHTML;
}

// Ensure document loads before running scripts
document.addEventListener("DOMContentLoaded", function () {
  displayItems(whiskeyTypes, ".types-center");
  displayItems(reservedWhiskies, ".reserved-whiskies-center");
  //displayItems(testimonials, ".testimonials-center");
});

// Modal functionality fix
const modal = document.getElementById("menu-modal");
const btn = document.getElementById("menu-btn");
const closeBtns = document.querySelectorAll(".close"); // Handles multiple close buttons

function showModal() {
  if (modal) modal.style.display = "block";
  
}

function hideModal() {
  if (modal) modal.style.display = "none";
}

if (btn) btn.addEventListener("click", showModal);
closeBtns.forEach((closeBtn) => closeBtn.addEventListener("click", hideModal));

window.addEventListener("click", (event) => {
  if (event.target === modal) hideModal();
});

let testimonials = [
  {
    id: 1,
    rating: 5,
    img: "/img/profile1.png",
    desc: "Remarkably, it lingers <br>with the essence of <br>milk chocolate and <br>butterscotch.",
    title: "David Beckham",
  },
  {
    id: 2,
    rating: 5,
    img: "/img/profile2.png",
    desc: "My go-to cocktail.<br> The best everyday<br> whiskey in the world",
    title: "Jadon Sancho"
  },
  {
    id: 3,
    rating: 5,
    img: "/img/profile3.png",
    desc: "Excellent Irish sipping whiskey. But if <br>you have to dilute there is nothing <br> better than Jameson and ginger ale <br>with a slice of lime! And if you are in<br> Northern Ireland, visit the distillery, <br>great tour",
    title: "Serena Williams"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  allProfile(testimonials);
  button();
});

let testimonialsCenter = document.querySelector(".testimonials-center"); // Fix querySelector

function allProfile(profileItems) {
  let mainProfiles = profileItems.map(function (item) {
    return `
      <article class="profile-item">
        <img src="${item.img}" class="photo" alt="${item.title}" />
        <div class="profile-info">
           <header>
           <br>${getStarRating(item.rating)}
          </header>
          <p class="item-text">${item.desc}</p>
          <h4>${item.title}</h4>
         <br>
        </div>
      </article>
    `;
  });

  mainProfiles = mainProfiles.join("");
  testimonialsCenter.innerHTML = mainProfiles;
}



document.addEventListener("DOMContentLoaded", function () {
  allProfile(testimonials);
  button();
  displayTestimonials();
});

//join-modal
document.addEventListener("DOMContentLoaded", function () {
  const joinModal = document.getElementById("join-modal");
  const joinBtn = document.getElementById("join-btn");
  const closeBtn = joinModal.querySelector(".close");
  const form = document.getElementById("join-form");

  function showJoinModal() {
    joinModal.style.display = "block";
  }

  function hideJoinModal() {
      joinModal.style.display = "none";
  }

  function handleFormSubmit(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);

      alert(`Thank you for joining us, ${name}! We will get back to you soon.`);
      form.reset();
      hideJoinModal();
  }

  joinBtn.addEventListener("click", showJoinModal);
  closeBtn.addEventListener("click", hideJoinModal);
  window.addEventListener("click", function (event) {
      if (event.target === joinModal) {
          hideJoinModal();
      }
  });
  form.addEventListener("submit", handleFormSubmit);
});