// ==========================================
// 1. GERİYƏ SAYIM MƏNTİQİ
// ==========================================
const TARGET = new Date('2026-04-20T20:00:00+04:00');

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
  const diff = TARGET - Date.now();
  if (diff <= 0) {
    document.getElementById('days').textContent  = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('mins').textContent  = '00';
    document.getElementById('secs').textContent  = '00';
    return;
  }
  document.getElementById('days').textContent  = pad(Math.floor(diff / 86400000));
  document.getElementById('hours').textContent = pad(Math.floor((diff % 86400000) / 3600000));
  document.getElementById('mins').textContent  = pad(Math.floor((diff % 3600000) / 60000));
  document.getElementById('secs').textContent  = pad(Math.floor((diff % 60000) / 1000));
}

tick();
setInterval(tick, 1000);

// ==========================================
// 2. FIREBASE VƏ STATİSTİKA MƏNTİQİ (v12)
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqFjXoUK14h2lHaKSLPImlk08pwMLRoTE",
  authDomain: "ishvaraz-landig.firebaseapp.com",
  databaseURL: "https://ishvaraz-landig-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ishvaraz-landig",
  storageBucket: "ishvaraz-landig.firebasestorage.app",
  messagingSenderId: "1012283375458",
  appId: "1:1012283375458:web:1f46c67eee35d7d8cfb63b",
  measurementId: "G-VJ4QFHBWFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

const statsRef = ref(db, '1ishvar_stats');

// Ölkə kodunu emojiyə (bayrağa) çevirən funksiya
function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode === 'XX') return '🌍';
  const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

// Məlumatları Firebase-dən oxuyub Ekrana (UI) yazdırırıq
onValue(statsRef, (snapshot) => {
  const data = snapshot.val() || { total: 0, unique: 0, countries: {} };

  document.getElementById('stat-total').innerText = data.total || 0;
  document.getElementById('stat-unique').innerText = data.unique || 0;

  // Ölkələri ən çox ziyarətçiyə görə sıralayıb ilk 2-ni götürürük
  const sortedCountries = Object.entries(data.countries || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);

  let countriesHtml = '';
  if (sortedCountries.length > 0) {
    countriesHtml += `<span>${getFlagEmoji(sortedCountries[0][0])} ${sortedCountries[0][1]}</span>`;
  }
  if (sortedCountries.length > 1) {
    countriesHtml += `<span style="font-size: 0.9rem; color: var(--glass-border);">|</span> <span>${getFlagEmoji(sortedCountries[1][0])} ${sortedCountries[1][1]}</span>`;
  }

  document.getElementById('stat-countries').innerHTML = countriesHtml || "<span>🌍</span>";
});

// Ziyarətçini qeydə alma prosesi
async function trackVisitor() {
  const hasVisited = localStorage.getItem('1ishvar_visited');

  // Ümumi ziyarəti hər dəfə 1 vahid artırırıq
  const totalRef = ref(db, '1ishvar_stats/total');
  runTransaction(totalRef, (current) => (current || 0) + 1);

  if (!hasVisited) {
    try {
      const response = await fetch('https://get.geojs.io/v1/ip/country.json');
      const geoData = await response.json();
      const countryCode = geoData.country || "XX";

      // Fərqli insan sayını artırırıq
      const uniqueRef = ref(db, '1ishvar_stats/unique');
      runTransaction(uniqueRef, (current) => (current || 0) + 1);

      // Ölkəni artırırıq
      const countryRef = ref(db, `1ishvar_stats/countries/${countryCode}`);
      runTransaction(countryRef, (current) => (current || 0) + 1);

      localStorage.setItem('1ishvar_visited', 'true');
    } catch (e) {
      console.error("Ölkə məlumatı tapılmadı:", e);
    }
  }
}

// Səhifə açılanda ziyarəti qeyd et
trackVisitor();