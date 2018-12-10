let mobBrand = ["Samsung", "Nokia", "Micromax"];
let category = {
  "Electronics": {
    "Mobiles": ["Samsung", "Nokia", "Micromax"],
    "Laptop": ["Corei5", "Corei9", "Corei7"],
    "Home Entertainment": ["Home Audio Speakers, Home Theaters",
      "Bluetooth Speakers"
    ]
  },
  "Appliances": {
    "TV": {
      "By Brand": ["Sony", "LG", "Samsung"],
      "By Screen Size": ["48-Above", "39-43", "32"]
    },
    "Washing Machine": ["Fully Automatic", "Semi Automatic"],
    "Refrigerators": {
      "Footwear": ["Sports", "Formal", "Casual"]
    },
    "Men": {
      "Footwear": ["Casual", "Sports", "Formal"],
      "Clothing": ["T-shirts", "Shirts", "Kurtas"],
      "Fabrics": ["Kurta Fabric", "Sherwani Fabric"]
    },
    "Women": {
      "Cloting": ["Western Wear", "Winter Wear"],
      "Ethnic Wear": ["Sarees", "Kurti"],
      "Footwear": ["Footwear", "Sandals"]
    }
  }
}

//console.log(category);

// Access Electronics
let v1 = category["Electronics"];
//console.log(v1);
//Add one more category
v1["Camera"] = [];
//console.log(category);

// Adding new Type in electronics
let v2 = v1["Camera"];
v2.push("Sony");
v2.push("Canon");
v2.push("Nikon");
console.log(category);
