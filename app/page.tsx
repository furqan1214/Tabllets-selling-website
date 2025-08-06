"use client";


import { useState } from "react";

import Link from "next/link";


// Inline SVG Icons (no react-icons needed)

const CartIcon = () => (

<svg

xmlns="http://www.w3.org/2000/svg"

width="20"

height="20"

viewBox="0 0 24 24"

fill="none"

stroke="currentColor"

strokeWidth="2"

>

<circle cx="9" cy="21" r="1"></circle>

<circle cx="20" cy="21" r="1"></circle>

<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>

</svg>

);


const CloseIcon = () => (

<svg

xmlns="http://www.w3.org/2000/svg"

width="24"

height="24"

viewBox="0 0 24 24"

fill="none"

stroke="currentColor"

strokeWidth="2"

>

<line x1="18" y1="6" x2="6" y2="18"></line>

<line x1="6" y1="6" x2="18" y2="18"></line>

</svg>

);


export default function Home() {

// Mock tablet data

const tablets = [

{

id: 1,

name: "iPad Pro 12.9",

brand: "Apple",

price: 999,

image: "/images/tablllet.jpg",

specs: ["M2 Chip", "12.9-inch Retina", "1TB Storage"],

},

{

id: 2,

name: "Samsung Galaxy Tab S8",

brand: "Samsung",

price: 699,

image: "/images/tabllets8.jpg",

specs: ["Snapdragon 8 Gen 1", "11-inch AMOLED", "256GB Storage"],

},

{

id: 3,

name: "Microsoft Surface Pro 9",

brand: "Microsoft",

price: 1099,

image: "/images/surfacepro9.jpg",

specs: ["12th Gen Intel Core", "13-inch Touchscreen", "512GB SSD"],

},

{

id: 4,

name: "Alcatel 3T10",

brand: "Alacatel",

price: 999,

image: "/images/Alcatel.jpg",

specs: ["Snapdragon 8 Gen 1", "11-inch AMOLED", "256GB Storage"],

},

{

id: 5,

name: "leveno Tab P11",

brand: "leveno",

price: 400,

image: "/images/Leveno.jpg",

specs: ["Snapdragon 8 Gen 1", "11-inch AMOLED", "256GB Storage"],

},

{

id: 6,

name: "Samsung Galaxy Tab A7",

brand: "Samsung",

price: 299,

image: "/images/taba8.jpg",

specs: ["Snapdragon 662", "10.4-inch Display", "64GB Storage"],

},

];


const [brandFilter, setBrandFilter] = useState("All");

const [maxPrice, setMaxPrice] = useState(2000);


// Filter products

const filteredTablets = tablets.filter(

(tablet) =>

(brandFilter === "All" || tablet.brand === brandFilter) &&

tablet.price <= maxPrice

);


return (

<div className="min-h-screen bg-gray-50">

{/* Navbar */}

<header className="bg-white shadow-sm p-4 sticky top-0 z-10">

<div className="container mx-auto flex justify-between items-center">

<h1 className="text-xl font-bold text-blue-600">TechTablets</h1>

</div>

</header>


<main className="container mx-auto p-4">

{/* Filters */}

<div className="mb-6 p-4 bg-white rounded-lg shadow-sm">

<div className="flex flex-wrap gap-4">

<div>

<label className="block text-sm font-medium mb-1">Brand</label>

<select

value={brandFilter}

onChange={(e) => setBrandFilter(e.target.value)}

className="p-2 border rounded-lg"

>

<option value="All">All Brands</option>

<option value="Apple">Apple</option>

<option value="Samsung">Samsung</option>

<option value="Microsoft">Microsoft</option>

<option value="Alacatel">Alcatel</option>

<option value="leveno">Lenovo</option>

</select>

</div>

<div>

<label className="block text-sm font-medium mb-1">

Max Price: ${maxPrice}

</label>

<input

type="range"

min="299"

max="1099"

value={maxPrice}

onChange={(e) => setMaxPrice(Number(e.target.value))}

className="w-40"

/>

</div>

</div>

</div>


{/* Product Grid with Order Now buttons */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{filteredTablets.map((tablet) => (

<div

key={tablet.id}

className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"

>

<img

src={tablet.image}

alt={tablet.name}

className="w-full h-100 object-contain p-4"

/>

<div className="p-4">

<h2 className="text-xl font-semibold">{tablet.name}</h2>

<p className="text-gray-600">{tablet.brand}</p>

<p className="text-lg font-bold mt-2">${tablet.price}</p>

<ul className="mt-2 text-sm text-gray-600">

{tablet.specs.map((spec, i) => (

<li key={i}>✓ {spec}</li>

))}

</ul>

{/* Updated Order Now button with Link */}

<Link

href={`/order`} // Dynamic link to order page with tablet ID

className="mt-4 block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-center"

>

Order Now

</Link>

</div>

</div>

))}

</div>

</main>

</div>

);

}

