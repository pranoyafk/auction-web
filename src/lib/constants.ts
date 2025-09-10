import { LucideGitGraph, LucideHome, LucideUser } from "lucide-react";
import { Shoe } from "./types";

export const mockShoes: Shoe[] = [
  {
    id: '1',
    name: "Air Jordan 1 Retro High",
    description:
      "Classic Air Jordan 1 in excellent condition. Original box included. No major scuffs or wear. A true collector's piece.", brand: "Nike",
    size: "10",
    condition: "Excellent",
    lowestBid: 450,
    category: "Basketball",
    image: "https://dawntown.co.in/cdn/shop/files/HQ3437_101.png_1.webp?v=1749479445&width=600",
    auctionEndTime: "2024-12-20T18:00:00Z",
    totalBids: 23,
    bidHistory: [
      { amount: 450, time: "2 hours ago", bidder: "User***23" },
      { amount: 425, time: "4 hours ago", bidder: "Sne***er" },
      { amount: 400, time: "6 hours ago", bidder: "Jor***an" },
    ],
    details: {
      colorway: "Bred",
      releaseYear: "2016",
      style: "555088-061",
      retailPrice: "$160",
    },
  },
  {
    id: '2',
    name: "Yeezy Boost 350 V2",
    description:
      "Classic Air Jordan 1 in excellent condition. Original box included. No major scuffs or wear. A true collector's piece.", brand: "Adidas",
    size: "9.5",
    condition: "Good",
    lowestBid: 280,
    category: "Lifestyle",
    image: "https://dawntown.co.in/cdn/shop/files/tenis_masculino_on_running_cloudtilt_black_ivory_11511_1_d25582d82da9590232050b362e9e825d.webp?v=1749479506&width=600",
    auctionEndTime: "2024-12-20T18:00:00Z",
    totalBids: 23,
    bidHistory: [
      { amount: 450, time: "2 hours ago", bidder: "User***23" },
      { amount: 425, time: "4 hours ago", bidder: "Sne***er" },
      { amount: 400, time: "6 hours ago", bidder: "Jor***an" },
    ],
    details: {
      colorway: "Bred",
      releaseYear: "2016",
      style: "555088-061",
      retailPrice: "$160",
    },
  },
  {
    id: '3',
    name: "Off-White x Nike Dunk Low",
    description:
      "Classic Air Jordan 1 in excellent condition. Original box included. No major scuffs or wear. A true collector's piece.", brand: "Nike",
    size: "11",
    condition: "Excellent",
    lowestBid: 850,
    category: "Lifestyle",
    image: "https://dawntown.co.in/cdn/shop/files/3MF30843714_png.webp?v=1755176492&width=600",
    auctionEndTime: "2024-12-20T18:00:00Z",
    totalBids: 23,
    bidHistory: [
      { amount: 450, time: "2 hours ago", bidder: "User***23" },
      { amount: 425, time: "4 hours ago", bidder: "Sne***er" },
      { amount: 400, time: "6 hours ago", bidder: "Jor***an" },
    ],
    details: {
      colorway: "Bred",
      releaseYear: "2016",
      style: "555088-061",
      retailPrice: "$160",
    },
  },
  {
    id: '4',
    name: "Travis Scott x Air Jordan 1",
    description:
      "Classic Air Jordan 1 in excellent condition. Original box included. No major scuffs or wear. A true collector's piece.", brand: "Nike",
    size: "10.5",
    condition: "Very Good",
    lowestBid: 1200,
    category: "Basketball",
    image: "https://dawntown.co.in/cdn/shop/files/DT-AJ.webp?v=1749479180&width=600",
    auctionEndTime: "2024-12-20T18:00:00Z",
    totalBids: 23,
    bidHistory: [
      { amount: 450, time: "2 hours ago", bidder: "User***23" },
      { amount: 425, time: "4 hours ago", bidder: "Sne***er" },
      { amount: 400, time: "6 hours ago", bidder: "Jor***an" },
    ],
    details: {
      colorway: "Bred",
      releaseYear: "2016",
      style: "555088-061",
      retailPrice: "$160",
    },
  },
  {
    id: '5',
    name: "New Balance 550",
    description:
      "Classic Air Jordan 1 in excellent condition. Original box included. No major scuffs or wear. A true collector's piece.", brand: "New Balance",
    size: "9",
    condition: "Good",
    lowestBid: 120,
    category: "Lifestyle",
    image: "https://dawntown.co.in/cdn/shop/files/air-jordan-1-low-bred-toe-20-632381_6e341637-7e9d-4e55-b66c-824d3dab337e.jpg?v=1749480449&width=600",
    auctionEndTime: "2024-12-20T18:00:00Z",
    totalBids: 23,
    bidHistory: [
      { amount: 450, time: "2 hours ago", bidder: "User***23" },
      { amount: 425, time: "4 hours ago", bidder: "Sne***er" },
      { amount: 400, time: "6 hours ago", bidder: "Jor***an" },
    ],
    details: {
      colorway: "Bred",
      releaseYear: "2016",
      style: "555088-061",
      retailPrice: "$160",
    },
  },
  {
    id: '6',
    name: "Dior x Air Jordan 1",
    description:
      "Classic Air Jordan 1 in excellent condition. Original box included. No major scuffs or wear. A true collector's piece.", brand: "Nike",
    size: "8.5",
    condition: "Excellent",
    lowestBid: 3500,
    category: "Basketball",
    image: "https://dawntown.co.in/cdn/shop/files/samba-og-white-black-gum-317292.jpg?v=1749480873&width=600",
    auctionEndTime: "2024-12-20T18:00:00Z",
    totalBids: 23,
    bidHistory: [
      { amount: 450, time: "2 hours ago", bidder: "User***23" },
      { amount: 425, time: "4 hours ago", bidder: "Sne***er" },
      { amount: 400, time: "6 hours ago", bidder: "Jor***an" },
    ],
    details: {
      colorway: "Bred",
      releaseYear: "2016",
      style: "555088-061",
      retailPrice: "$160",
    },
  },
];

export const navLinks = [
  { name: 'Home', to: '/', icon: LucideHome },
  {
    name: 'Bids', to: '/orders', icon: LucideGitGraph
  },
  {
    name: 'Profile', to: '/profile', icon: LucideUser
  },]