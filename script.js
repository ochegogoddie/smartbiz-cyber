// Typing intro (simple)
const helloEl = document.getElementById('typing-hello');
const nameEl = document.getElementById('typing-name');
const helloText = "Welcome to";
const nameText = "SmartBiz Cyber Cafe";
let i=0,j=0;
function typeHello(){ if(i<helloText.length){ helloEl.innerHTML += helloText.charAt(i); i++; setTimeout(typeHello,40);} else { setTimeout(typeName,120);} }
function typeName(){ if(j<nameText.length){ nameEl.innerHTML += nameText.charAt(j); j++; setTimeout(typeName,40);} }
typeHello();

// Navbar hide on scroll
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > lastScrollY) navbar.classList.add('hide'); else navbar.classList.remove('hide');
  lastScrollY = window.scrollY;
});

// Pricing calculator
const serviceSelect = document.getElementById('service');
const qtyInput = document.getElementById('quantity');
const calcBtn = document.getElementById('calc');
const clearBtn = document.getElementById('clear');
const resultP = document.getElementById('result');

function formatKES(n){ return 'KES ' + Number(n).toLocaleString(); }

calcBtn.addEventListener('click', ()=>{
  const price = Number(serviceSelect.value);
  const qty = Number(qtyInput.value)||1;
  const desc = serviceSelect.options[serviceSelect.selectedIndex].dataset.desc || '';
  if (!price || price === 0) {
    resultP.textContent = `${desc} — Variable pricing. Please contact us for a quote.`;
  } else {
    const total = price * qty;
    resultP.textContent = `${desc} — ${formatKES(total)}`;
  }
});

clearBtn.addEventListener('click', ()=>{ qtyInput.value = 1; serviceSelect.selectedIndex = 0; resultP.textContent = ''; });

// Smooth anchor clicks for nav links on small screens
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click', ()=>{document.querySelector('.nav-links').classList.remove('show')}));

// scroll-down click -> go to services
const scrollDown = document.querySelector('.scroll-down');
if(scrollDown){
  scrollDown.addEventListener('click', ()=>{
    const target = document.getElementById('services');
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
}

// Location & Directions buttons — direct to Kerina Police Station (Kerina DC Office)
const openLocationBtn = document.getElementById('open-location');
const getDirectionsBtn = document.getElementById('get-directions');

// Use a place-specific query for Kerina Police Station so the map centers on the exact landmark
const kerinaPlaceQuery = 'Kerina Police Station, Kerina, Kisii County, Kenya';

if(openLocationBtn){
  openLocationBtn.addEventListener('click', ()=>{
    const q = encodeURIComponent(kerinaPlaceQuery);
    const url = `https://www.google.com/maps/search/?api=1&query=${q}`;
    window.open(url, '_blank');
  });
}

if(getDirectionsBtn){
  getDirectionsBtn.addEventListener('click', ()=>{
    const dest = encodeURIComponent(kerinaPlaceQuery);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
    window.open(url, '_blank');
  });
}
