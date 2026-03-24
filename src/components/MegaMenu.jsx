import "./MegaMenu.css";

const menuData = {
  men: [
    { title: "Topwear", items: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Jackets"] },
    { title: "Bottomwear", items: ["Jeans", "Casual Trousers", "Shorts", "Track Pants"] },
    { title: "Footwear", items: ["Casual Shoes", "Sports Shoes", "Flip Flops", "Sandals"] },
    { title: "Accessories", items: ["Watches", "Belts", "Wallets", "Bags"] },
    { title: "Brands", items: ["Nike", "Adidas", "Puma", "HRX"] }
  ],

  women: [
    { title: "Indian Wear", items: ["Kurtas & Suits", "Kurtis", "Sarees", "Leggings"] },
    { title: "Western Wear", items: ["Dresses", "Tops", "Jeans", "T-Shirts"] },
    { title: "Footwear", items: ["Flats", "Heels", "Boots", "Casual Shoes"] },
    { title: "Beauty", items: ["Makeup", "Skincare", "Lipsticks", "Fragrances"] },
    { title: "Accessories", items: ["Handbags", "Jewellery", "Watches"] }
  ],

  kids: [
    { title: "Boys Clothing", items: ["T-Shirts", "Shirts", "Shorts", "Jeans"] },
    { title: "Girls Clothing", items: ["Dresses", "Tops", "Skirts", "Lehenga"] },
    { title: "Footwear", items: ["Shoes", "Sandals", "Flip Flops"] },
    { title: "Toys & Games", items: ["Action Toys", "Learning Toys", "Soft Toys"] },
    { title: "Brands", items: ["H&M", "Max Kids", "YK"] }
  ],

  beauty: [
    { title: "Makeup", items: ["Lipstick", "Foundation", "Mascara", "Eyeliner"] },
    { title: "Skincare", items: ["Face Wash", "Moisturizer", "Sunscreen"] },
    { title: "Haircare", items: ["Shampoo", "Conditioner", "Hair Oil"] },
    { title: "Fragrances", items: ["Perfumes", "Deodorants"] },
    { title: "Brands", items: ["Lakme", "Maybelline", "L'Oreal"] }
  ],

  home: [
    { title: "Bed Linen", items: ["Bedsheets", "Blankets", "Pillows"] },
    { title: "Decor", items: ["Wall Art", "Lamps", "Clocks"] },
    { title: "Kitchen", items: ["Cookware", "Storage"] },
    { title: "Bath", items: ["Towels", "Bath Mats"] },
    { title: "Brands", items: ["Spaces", "Home Centre"] }
  ],

  genz: [
    { title: "Trending", items: ["Oversized T-Shirts", "Baggy Jeans"] },
    { title: "Streetwear", items: ["Hoodies", "Cargo Pants"] },
    { title: "Footwear", items: ["Sneakers", "Slides"] },
    { title: "Accessories", items: ["Caps", "Chains"] },
    { title: "Brands", items: ["H&M", "Urban Monkey"] }
  ]
};

function MegaMenu({ type }) {
  return (
    <div className="mega-menu">
      {menuData[type]?.map((section, index) => (
        <div key={index} className="menu-column">
          <h4>{section.title}</h4>
          {section.items.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MegaMenu;
