const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});


function showSection(genre) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    if (section.id === genre) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

//search
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById('search-bar');
  const searchResults = document.getElementById('search-results');
  let selectedIndex = -1;

  // link
  const books = [
    { title: "The Priest of Corruption", link: "list.html" },
    { title: "The Demon Prince Goes tp the Academy", link: "C-DPA-I.html" },
    { title: "Modern Villainess: It’s Not Easy Building a Corporate Empire Before the Crash - Volume 01", link: "Modern Vilain/M-I-1.html" },
    { title: "Modern Villainess: It’s Not Easy Building a Corporate Empire Before the Crash - Volume 02", link: "Modern Vilain/M-I-2.html" },
    { title: "Modern Villainess: It’s Not Easy Building a Corporate Empire Before the Crash - Volume 03", link: "Modern Vilain/M-I-3.html" },
    { title: "Modern Villainess: It’s Not Easy Building a Corporate Empire Before the Crash - Volume 04", link: "Modern Vilain/M-I-4.html" },
    { title: "The Demon Prince Goes to the Academy", link: "Demon prince/DPA-C-I.html" },
    { title: "The Angel Next Door Spoils Me Rotten", link: "Academy’s Physicist/TMAP-I-1.html" },
    { title: "I Am This Murim’s Crazy B*tch", link: "Murim’s Crazy/IAMB-I-1.html" },
    //link end
  ];

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    if (query) {
      const matches = books.filter(book => book.title.toLowerCase().includes(query));
      matches.forEach((match, index) => {
        const item = document.createElement('a');
        item.href = match.link; 
        item.textContent = match.title;
        item.setAttribute('data-index', index);
        item.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.href = match.link;
        });
        searchResults.appendChild(item);
      });
      selectedIndex = -1;
      searchResults.style.display = 'block';
    } else {
      searchResults.style.display = 'none';
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    const items = searchResults.querySelectorAll('a');

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        if (selectedIndex > 0) {
          selectedIndex--;
          updateSelection(items);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (selectedIndex < items.length - 1) {
          selectedIndex++;
          updateSelection(items);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex > -1 && items[selectedIndex]) {
          window.location.href = items[selectedIndex].href;
        }
        break;
      default:
        break;
    }
  });

  document.addEventListener("click", (event) => {
    if (!searchResults.contains(event.target) && event.target !== searchInput) {
      searchResults.style.display = 'none';
    }
  });

  function updateSelection(items) {
    items.forEach((item, index) => {
      if (index === selectedIndex) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  }
});


const links = [
  "/Modern Vilain/M-I-1.html",
  "/Demon prince/DPA-C-I.html",
  "/Murim’s Crazy/IAMB-I-1.html",
  "/Survival guide/TASG-I-1.html",
  "/Modern Vilain/M-I-2.html",
  "/Modern Vilain/M-I-3.html",
  "/Modern Vilain/M-I-4.html",
  "/OFP/OFP-I-1.html",
  "/Seoul/SOS-I-1.html",
  "/The priest/TPOC-I-1.html",
  "/Anggel Next Door/TAND-I-1.html",
  "/Academy’s Physicist/TMAP-I-1.html",
  "/Survival guide/TASG-I-1.html"
];

function getRandomLink() {
  const randomIndex = Math.floor(Math.random() * links.length);
  return links[randomIndex];
}

function handleRandomLinkButtonClick() {
  const randomLink = getRandomLink();
  window.location.href = randomLink;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("randomLinkButton");
  if (button) {
    button.addEventListener("click", handleRandomLinkButtonClick);
  }
});

let randomLinkButton = document.getElementById("randomLinkButton");

randomLinkButton.addEventListener("click", function(event) {
    event.preventDefault(); 
});
