const properties = [
  {
    name: "Skyline Luxury Apartments",
    locality: "Banjara Hills",
    price: 4000,
    images: ["https://www.modibuilders.com/wp-content/uploads/1V7A9109-scaled.jpg"],
    address: "12-5-67, Road 1, Banjara Hills, Hyderabad",
    facilities: ["Free WiFi", "Pool", "Gym", "Breakfast"],
    map: "https://www.google.com/maps?q=Banjara+Hills+Hyderabad",
    near: ["Charminar", "Hussain Sagar", "Jalagam Vengal Rao Park"]
  },
  {
    name: "Budget Stay Inn",
    locality: "Madhapur",
    price: 1700,
    images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/112392663.jpg?k=d5c74270ace7db3d1ad9f615ba021299aabd7e81573c336c47d0f45e77e1b9b2&o=&hp=1"],
    address: "Plot 45, Hitech City Rd, Madhapur, Hyderabad",
    facilities: ["WiFi", "AC Room", "Kitchenette"],
    map: "https://www.google.com/maps?q=Madhapur+Hyderabad",
    near: ["Shilparamam", "Cyber Towers", "Durgam Cheruvu"]
  },
  {
    name: "Pearl City Homestay",
    locality: "Jubilee Hills",
    price: 2300,
    images: ["https://content3.jdmagicbox.com/v2/comp/hyderabad/r8/040pxx40.xx40.190215160045.j6r8/catalogue/oyo-8235-pearl-city-jubilee-hitech-city-hyderabad-hotels-9cnljdo7sx.jpg"],
    address: "Road no.36, Jubilee Hills, Hyderabad",
    facilities: ["WiFi", "Family Rooms", "City View"],
    map: "https://www.google.com/maps?q=Jubilee+Hills+Hyderabad",
    near: ["Golconda Fort", "KBR Park", "Peddamma Temple"]
  },
  {
    name: "DLF View Corporate Suites",
    locality: "Gachibowli",
    price: 3200,
    images: ["https://gos3.ibcdn.com/1879ab98c0ce11e981d80242ac110006.jpg"],
    address: "DLF Road, Gachibowli, Hyderabad",
    facilities: ["WiFi", "Conference Room", "Gym", "Free Breakfast"],
    map: "https://www.google.com/maps?q=Gachibowli+Hyderabad",
    near: ["Inorbit Mall", "Botanical Garden", "DLF Cybercity"]
  },
  {
    name: "TechNest Residency",
    locality: "HITEC City",
    price: 2800,
    images: ["https://imagecdn.99acres.com/media1/31799/2/635982059M-1755683213403.jpg"],
    address: "Plot 9, HITEC City, Hyderabad",
    facilities: ["High-speed WiFi", "Kitchen", "Roof Garden"],
    map: "https://www.google.com/maps?q=HITEC+City+Hyderabad",
    near: ["Cyber Towers", "Shilparamam", "Inorbit Mall"]
  },
  {
    name: "Twin Lakes Apartments",
    locality: "Kondapur",
    price: 2100,
    images: ["https://housing-images.n7net.in/01c16c28/4e0bc6a3770a70e1b5f1968a31c01017/v0/medium/3_bhk_apartment-for-sale-maniyawas-Jaipur-bedroom.jpg"],
    address: "Green Hills Rd, Kondapur, Hyderabad",
    facilities: ["Parking", "Filtered Water", "Balcony"],
    map: "https://www.google.com/maps?q=Kondapur+Hyderabad",
    near: ["Botanical Garden", "Paala Pitta Cycling Park"]
  },
  {
    name: "Greenwood Residency",
    locality: "Manikonda",
    price: 2000,
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7VTFFTkRsZqW8Y_Nqc-x6Sen3fW5f1YflA&s"],
    address: "Manikonda Road, Hyderabad",
    facilities: ["WiFi", "Parking", "Kitchen"],
    map: "https://www.google.com/maps?q=Manikonda+Hyderabad",
    near: ["Lanco Hills", "Qutb Shahi Tombs"]
  },
  {
    name: "Urban Escape Suites",
    locality: "Somajiguda",
    price: 2500,
    images: ["https://rook.gumlet.io/uploads/center/cover_photo/624a947f4371a30001d45e71/2___2024_07_10T193528.959.jpg?compress=true&format=auto&quality=75&dpr=auto&h=550&w=412&ar=1"],
    address: "Central Ave, Somajiguda, Hyderabad",
    facilities: ["AC", "24/7 Security", "Breakfast"],
    map: "https://www.google.com/maps?q=Somajiguda+Hyderabad",
    near: ["Raj Bhavan", "Hyderabad Central Mall"]
  },
  {
    name: "Silver Residency",
    locality: "Uppal",
    price: 1200,
    images: ["https://content.jdmagicbox.com/v2/comp/hyderabad/x7/040pxx40.xx40.150204173245.k5x7/catalogue/cyber-elite-suites-hitech-city-hyderabad-guest-house-30tiers-250.jpg"],
    address: "Uppal Main Road, Hyderabad",
    facilities: ["WiFi", "Parking", "Laundry"],
    map: "https://www.google.com/maps?q=Uppal+Hyderabad",
    near: ["HMDA Park", "NGRI Metro Park"]
  },
  {
    name: "Serene Heights",
    locality: "Serilingampally",
    price: 1500,
    images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/652533384.jpg?k=86220b113aa61b4f8b4d6d4a05aca7b4d24164a809fdc8f667e3dec20669884e&o=&hp=1"],
    address: "Nallagandla, Serilingampally, Hyderabad",
    facilities: ["WiFi", "Power Backup", "Children’s Park"],
    map: "https://www.google.com/maps?q=Serilingampally+Hyderabad",
    near: ["University of Hyderabad", "Gachibowli Stadium"]
  },
];

const attractions = {
  "Charminar": "Icon of Hyderabad, built in 1591, surrounded by bustling bazaars.",
  "Hussain Sagar": "Famous lake with Buddha statue, boat rides, and city views.",
  "Golconda Fort": "Historic fort with sound and light show, panoramic views.",
  "Jalagam Vengal Rao Park": "Serene city park, great for walks and yoga.",
  "Shilparamam": "Cultural crafts village with performances & shopping.",
  "Cyber Towers": "Landmark of HITEC City’s tech hub.",
  "Durgam Cheruvu": "Scenic urban lake with activities and viewpoints.",
  "KBR Park": "Large urban forest and nature trail in Jubilee Hills.",
  "Peddamma Temple": "Colorful religious site known for its festivals.",
  "Inorbit Mall": "Popular shopping, dining, and entertainment spot.",
  "Botanical Garden": "Beautiful gardens and green spaces for relaxation.",
  "DLF Cybercity": "Corporate MNC hub.",
  "Paala Pitta Cycling Park": "Cycling and walking park in Kondapur.",
  "Lanco Hills": "Modern landmark, upmarket residential area.",
  "Qutb Shahi Tombs": "Historic tombs set in landscaped gardens.",
  "Raj Bhavan": "Official residence of the Governor.",
  "Hyderabad Central Mall": "Large shopping mall in the city center.",
  "HMDA Park": "Green park area for joggers and families.",
  "NGRI Metro Park": "Urban transit and recreation park.",
  "University of Hyderabad": "Lush green university campus.",
  "Gachibowli Stadium": "International sports events and concerts."
};

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const place = document.getElementById('searchPlace').value.trim().toLowerCase();
  const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
  const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;

  const results = properties.filter(p =>
    (place === "" || p.locality.toLowerCase().includes(place)) &&
    p.price >= minPrice && p.price <= maxPrice
  );
  displayResults(results);
});

function displayResults(props) {
  const container = document.getElementById('results');
  container.innerHTML = '';
  if (props.length === 0) {
    container.innerHTML = '<p>No rentals found, try different filters!</p>';
    return;
  }
  props.forEach(p => {
    const nearby = p.near.map(n =>
      `<li><b>${n}:</b> ${attractions[n] || ""}</li>`
    ).join("");
    container.innerHTML += `
      <div class="property-card">
        <img src="${p.images[0]}" alt="${p.name}">
        <div>
          <h3>${p.name} (${p.locality})</h3>
          <p><strong>Address:</strong> ${p.address}</p>
          <p><strong>Facilities:</strong> ${p.facilities.join(", ")}</p>
          <p><strong>Estimated Price:</strong> ₹${p.price}/night</p>
          <p><strong>Nearby Attractions:</strong><ul>${nearby}</ul></p>
          <a href="${p.map}" target="_blank">View on Google Maps</a>
        </div>
      </div>
    `;
  });
}

displayResults(properties); // Show all on page load
