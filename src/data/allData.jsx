import shirt from "../assets/menshirts.jpg";
// Note: Neenga vera vera images use pannum podhu mela import pannikonga.
// Ipo test-kaga ellaathukum 'shirt' image-aye potruken.

export const allProducts = {
  men: {
    title: "Men's Fashion",
    sections: [
      { rowTitle: "Top Wear", items: [{ id: 101, name: "Formal Shirt", price: 899, image: shirt }, { id: 102, name: "Polo T-Shirt", price: 499, image: shirt }] },
      { rowTitle: "Bottom Wear", items: [{ id: 103, name: "Slim Fit Jeans", price: 1299, image: shirt }, { id: 104, name: "Cotton Chinos", price: 999, image: shirt }] },
      { rowTitle: "Footwear", items: [{ id: 105, name: "Sneakers", price: 1999, image: shirt }, { id: 106, name: "Formal Shoes", price: 2499, image: shirt }] }
    ]
  },
  women: {
    title: "Women's Fashion",
    sections: [
      { rowTitle: "Ethnic Wear", items: [{ id: 201, name: "Cotton Saree", price: 1599, image: shirt }, { id: 202, name: "Anarkali Kurti", price: 899, image: shirt }] },
      { rowTitle: "Western Wear", items: [{ id: 203, name: "Midi Dress", price: 1200, image: shirt }, { id: 204, name: "Denim Jacket", price: 1800, image: shirt }] },
      { rowTitle: "Beauty & Makeup", items: [{ id: 205, name: "Lipstick Set", price: 599, image: shirt }, { id: 206, name: "Eyeshadow Palette", price: 999, image: shirt }] }
    ]
  },
  kids: {
    title: "Kids Corner",
    sections: [
      { rowTitle: "Boys Clothing", items: [{ id: 301, name: "Superhero Tee", price: 399, image: shirt }, { id: 302, name: "Cargo Shorts", price: 599, image: shirt }] },
      { rowTitle: "Girls Clothing", items: [{ id: 303, name: "Party Frock", price: 999, image: shirt }, { id: 304, name: "Floral Top", price: 450, image: shirt }] },
      { rowTitle: "Toys & Games", items: [{ id: 305, name: "Building Blocks", price: 1200, image: shirt }, { id: 306, name: "Remote Car", price: 1500, image: shirt }] }
    ]
  },
  genz: {
    title: "Gen-Z Trends",
    sections: [
      { rowTitle: "Oversized Collection", items: [{ id: 401, name: "Graphic Hoodie", price: 1100, image: shirt }, { id: 402, name: "Baggy Jeans", price: 1499, image: shirt }] },
      { rowTitle: "Streetwear", items: [{ id: 403, name: "Cargo Pants", price: 1300, image: shirt }, { id: 404, name: "Bucket Hat", price: 299, image: shirt }] }
    ]
  },
  home: {
    title: "Home & Living",
    sections: [
      { rowTitle: "Bed Linen", items: [{ id: 501, name: "Cotton Bedspread", price: 899, image: shirt }, { id: 502, name: "Cushion Covers", price: 299, image: shirt }] },
      { rowTitle: "Decor", items: [{ id: 503, name: "Wall Clock", price: 1200, image: shirt }, { id: 504, name: "Scented Candles", price: 499, image: shirt }] }
    ]
  }
};