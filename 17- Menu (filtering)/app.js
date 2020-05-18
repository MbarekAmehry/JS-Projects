const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "bison steak",
    category: "Brunch",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const products = document.querySelector(".products");
const categories = document.querySelector(".categories");

// load items
window.addEventListener("DOMContentLoaded", () => {
  displayitems(menu);
  displayButtons();
});

// Display items on the DOM
function displayitems(menuItem) {
  let diplayProduct = menuItem.map((item) => {
    return `<div class="product">
    <div class="picture">
        <img src=${item.img} alt="" />
      </div>
      <div class="info">
        <div class="info-top">
          <h4 class="title">${item.title}</h4>
          <p class="price">$${item.price}</p>
        </div>
        <p class="into-details">
          ${item.desc}
        </p>
      </div>
    </div>`;
  });
  diplayProduct = diplayProduct.join("");
  products.innerHTML = diplayProduct;
}

function displayButtons() {
  // get unique categories
  const uniqueCategories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  // adding button you UI dymanicaly
  const categoryBtn = uniqueCategories
    .map((item) => {
      return `<button class="btn-filter" data-id="${item}">${item}</button>`;
    })
    .join("");
  // inserting button in the DOM
  categories.innerHTML = categoryBtn;

  const filter_btn = document.querySelectorAll(".btn-filter");
  // Filter items
  filter_btn.forEach((element) => {
    element.addEventListener("click", (e) => {
      const category = e.target.dataset.id;

      const fiteredItems = menu.filter((item) => {
        if (item.category == category) return item;
      });
      // if all btn is clicked
      if (category == "all") {
        displayitems(menu);
      } else {
        displayitems(fiteredItems);
      }
    });
  });
}
