const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "Our Craft",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Old Monk Rum",
	country: "IN",
	detail: "750 ml",
	price: "₹750",
 },
 {
	name: "Kingfisher Premium",
	country: "IN",
	detail: "650 ml",
	price: "₹180",
 },
 {
	name: "Sula Shiraz",
	country: "IN",
	detail: "750 ml",
	price: "₹950",
 },
 {
	name: "Amrut Fusion Whisky",
	country: "IN",
	detail: "750 ml",
	price: "₹3,000",
 },
];

const mockTailLists = [
 {
	name: "Masala Shikanji",
	country: "IN",
	detail: "Glass",
	price: "₹80",
 },
 {
	name: "Aam Panna",
	country: "IN",
	detail: "Glass",
	price: "₹100",
 },
 {
	name: "Rose Lassi",
	country: "IN",
	detail: "Glass",
	price: "₹120",
 },
 {
	name: "Tender Coconut Cooler",
	country: "IN",
	detail: "Glass",
	price: "₹90",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Authentic Indian flavors",
 "Fresh & seasonal ingredients",
 "Chilled to perfection",
 "Blended with passion",
];

const goodLists = [
 "Locally sourced ingredients",
 "Traditional Indian techniques",
 "Bartending artistry",
 "Refreshing desi twists",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "12 MG Road, Pune, Maharashtra 411001, India",
 contact: {
	phone: "+91 98765 43210",
	email: "contact@indibar.com",
 },
};

const openingHours = [
 { day: "Mon-Thu", time: "12:00pm - 11:00pm" },
 { day: "Fri", time: "12:00pm - 1:00am" },
 { day: "Sat", time: "11:00am - 1:00am" },
 { day: "Sun", time: "11:00am - 11:00pm" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Mango Mojito",
	image: "/images/drink1.png",
	title: "India’s Summer in a Glass",
	description:
	 "Refreshing mojito infused with fresh mangoes, mint, and lime—perfect for beating the Indian summer heat.",
 },
 {
	id: 2,
	name: "Masala Margarita",
	image: "/images/drink2.png",
	title: "A Spicy Desi Twist",
	description:
	 "Classic margarita upgraded with a hint of chaat masala and chili salt rim for that true Indian zing.",
 },
 {
	id: 3,
	name: "Rose and Cardamom Martini",
	image: "/images/drink3.png",
	title: "Floral Elegance",
	description:
	 "A fragrant mix of rose syrup, cardamom, and vodka—blending tradition with sophistication.",
 },
 {
	id: 4,
	name: "Coconut Toddy",
	image: "/images/drink4.png",
	title: "From the Coasts of Kerala",
	description:
	 "Inspired by Kerala’s famous toddy, crafted with coconut water, rum, and subtle spices.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
