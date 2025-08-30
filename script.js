// Email and Password Validation
function validateLogin() {
  const email = document.getElementById("email").value;
  const pw = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");
  const emailPattern = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
  let errors = [];
  if (!emailPattern.test(email)) errors.push("Enter a valid email address.");
  if (pw.length < 6 || !/[A-Z]/.test(pw) || !/[0-9]/.test(pw)) {
    errors.push("Password must be 6+ chars, include a number and capital letter.");
  }
  if (errors.length) {
    msg.innerHTML = errors.join("<br>");
    msg.style.color = "red";
    return false;
  }
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "home.html";
  return false;
}

// Demo property data - add more as needed
const demoProperties = [
  {
    locality: "Banjara Hills",
    name: "Skyline View Homestay",
    photo: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    address: "Road No. 12, Banjara Hills, Hyderabad",
    facilities: ["WiFi", "AC", "Kitchen", "Parking"],
    costPerNight: 3600,
    map: "https://maps.google.com/?q=Banjara+Hills+Hyderabad",
    nearby: ["Golconda Fort", "Birla Mandir", "Salar Jung Museum"]
  },
  {
    locality: "Madhapur",
    name: "Tech City Residency",
    photo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    address: "Plot 41, Hitech City Road, Madhapur, Hyderabad",
    facilities: ["WiFi", "Breakfast", "Gym", "TV"],
    costPerNight: 2200,
    map: "https://maps.google.com/?q=Madhapur+Hyderabad",
    nearby: ["Shilparamam", "Durgam Cheruvu", "Inorbit Mall"]
  },
  {
    locality: "Charminar",
    name: "Heritage Old City Stay",
    photo: "https://images.unsplash.com/photo-1505692794403-34d0984388bd?auto=format&fit=crop&w=600&q=80",
    address: "Near Charminar, Old City, Hyderabad",
    facilities: ["WiFi", "Heritage Suite", "Laundry"],
    costPerNight: 2800,
    map: "https://maps.google.com/?q=Charminar+Hyderabad",
    nearby: ["Charminar", "Laad Bazaar", "Mecca Masjid"]
  }
];

// Property Search Functionality
function searchProperties() {
  const place = document.getElementById("searchPlace").value.trim().toLowerCase();
  const minPrice = parseInt(document.getElementById("priceMin").value) || 0;
  const maxPrice = parseInt(document.getElementById("priceMax").value) || 10000;
  const msg = document.getElementById("searchMsg");
  const resultsDiv = document.getElementById("properties");
  let results = [];
  resultsDiv.innerHTML = "";
  results = demoProperties.filter(prop =>
    (!place || prop.locality.toLowerCase().includes(place)) &&
    prop.costPerNight >= minPrice &&
    prop.costPerNight <= maxPrice
  );
  if (results.length === 0) {
    msg.innerText = "No properties found for your search. Try a different locality/price!";
    msg.style.color = "red";
    return;
  } else {
    msg.innerText = results.length + " property(s) found!";
    msg.style.color = "green";
  }
  results.forEach(prop => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.innerHTML = `
      <img src="${prop.photo}" alt="${prop.name}">
      <div class="property-content">
        <h3>${prop.name}</h3>
        <div class="address"><strong>Address:</strong> ${prop.address}</div>
        <div class="facilities"><strong>Facilities:</strong> ${prop.facilities.join(", ")}</div>
        <div class="cost">₹${prop.costPerNight}/night</div>
        <div class="nearby"><strong>Nearby:</strong> ${prop.nearby.join(", ")}</div>
        <a class="map-link" target="_blank" href="${prop.map}">See Location on Google Maps</a>
      </div>
    `;
    resultsDiv.appendChild(card);
  });
}
// On Home Page, require login
if (window.location.pathname.includes("home.html") && localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}
