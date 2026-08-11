const siteData = {
  features: [
    {
      icon: "Q",
      title: "Premium Quality",
      text: "Carefully selected fabrics with comfort, finish and durability in mind."
    },
    {
      icon: "₹",
      title: "Affordable Prices",
      text: "Beautiful sarees and essentials at prices that respect every family budget."
    },
    {
      icon: "T",
      title: "Traditional Designs",
      text: "Graceful South Indian styles suited for festivals, functions and daily wear."
    },
    {
      icon: "S",
      title: "Friendly Service",
      text: "Warm guidance to help you choose the right fabric, color and occasion wear."
    }
  ],
  collections: [
    {
      title: "Cotton Sarees",
      image: "assets/images/collection-cotton.svg",
      text: "Soft, breathable cotton sarees for effortless everyday elegance."
    },
    {
      title: "Fancy Sarees",
      image: "assets/images/collection-fancy.svg",
      text: "Vibrant drapes for celebrations, gifting and family occasions."
    },
    {
      title: "Designer Sarees",
      image: "assets/images/collection-designer.svg",
      text: "Statement styles with refined details for special moments."
    },
    {
      title: "Daily Wear",
      image: "assets/images/collection-daily.svg",
      text: "Easy-care sarees chosen for comfort, value and regular use."
    },
    {
      title: "Kurti",
      image: "assets/images/collection-kurti.svg",
      text: "Smart, versatile kurtis for relaxed and graceful styling."
    },
    {
      title: "Leggings",
      image: "assets/images/collection-leggings.svg",
      text: "Comfortable essentials in useful colors for daily pairing."
    }
  ],
  reviews: [
    {
      name: "Local Customer",
      text: "Good collection and very patient service. The cotton saree choices are comfortable and neat."
    },
    {
      name: "Paranur Family",
      text: "A welcoming store for family shopping. Prices are reasonable and the staff guides well."
    },
    {
      name: "Chengalpattu Customer",
      text: "Nice fancy saree selections for functions. The designs feel traditional and fresh."
    },
    {
      name: "Regular Visitor",
      text: "Reliable place for daily wear sarees and essentials. Easy to visit and friendly."
    }
  ]
};

function buildFeatureCard(feature) {
  return `
    <article class="feature-card reveal">
      <span class="feature-card__icon" aria-hidden="true">${feature.icon}</span>
      <h3>${feature.title}</h3>
      <p>${feature.text}</p>
    </article>
  `;
}

function buildCollectionCard(collection) {
  return `
    <article class="collection-card reveal">
      <div class="collection-card__image">
        <img src="${collection.image}" alt="${collection.title}" loading="lazy">
      </div>
      <div class="collection-card__body">
        <h3>${collection.title}</h3>
        <p>${collection.text}</p>
      </div>
    </article>
  `;
}

function buildReviewCard(review) {
  return `
    <article class="review-card reveal">
      <div class="review-card__stars" aria-label="Five star review">★★★★★</div>
      <p>"${review.text}"</p>
      <h3>${review.name}</h3>
    </article>
  `;
}

function renderStaticContent() {
  $("#featureGrid").html(siteData.features.map(buildFeatureCard).join(""));
  $("#collectionGrid").html(siteData.collections.map(buildCollectionCard).join(""));
  $("#reviewGrid").html(siteData.reviews.map(buildReviewCard).join(""));
  $("#currentYear").text(new Date().getFullYear());
}

function setupNavigation() {
  const $navToggle = $("#navToggle");
  const $siteNav = $("#siteNav");

  $navToggle.on("click", function () {
    const isOpen = $siteNav.toggleClass("is-open").hasClass("is-open");
    $(this).toggleClass("is-active", isOpen).attr("aria-expanded", isOpen);
    $("body").toggleClass("nav-open", isOpen);
  });

  $(".site-nav__link, .brand").on("click", function () {
    $siteNav.removeClass("is-open");
    $navToggle.removeClass("is-active").attr("aria-expanded", false);
    $("body").removeClass("nav-open");
  });
}

function setupRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

$(function () {
  renderStaticContent();
  setupNavigation();
  setupRevealAnimation();
});
