import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about-us", label: "À propos de nous" },
    { href: "#products", label: "Produits" },
    { href: "#contact-us", label: "Nous contacter" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marques' },
    { value: '500+', label: 'Magasins' },
    { value: '250k+', label: 'Clients' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "€200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "€210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "€220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "€230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Livraison gratuite",
        subtext: "Faites vos achats en toute tranquillité grâce à notre service d'expédition gratuit."
    },
    {
        imgURL: shieldTick,
        label: "Paiement sécurisé",
        subtext: "Effectuez vos transactions en toute sérénité grâce à nos options de paiement sécurisées."
    },
    {
        imgURL: support,
        label: "Nous sommes la pour vous aider",
        subtext: "Notre équipe dévouée est là pour vous aider à chaque étape."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Mathieu Soussignan',
        rating: 4.5,
        feedback: "L'attention portée aux détails et la qualité du produit ont dépassé mes attentes. Hautement recommandé !"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "Le produit a non seulement répondu à mes attentes, mais les a dépassées. Je serai sans aucun doute une cliente fidèle !"
    }
];


export const footerLinks = [
    {
        title: "Produits",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Aide",
        links: [
            { name: "A propos de nous", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Comment cela fonctionne-t-il ?", link: "/" },
            { name: "Politique de confidentialité", link: "/" },
            { name: "Politique de paiement", link: "/" },
        ],
    },
    {
        title: "Prendre contact",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+33554862354", link: "tel:+33554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
