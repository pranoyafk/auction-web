import { LucideGitGraph, LucideHome } from "lucide-react";
import { Shoe, UserBid } from "./types";

export const mockShoes: Shoe[] = [
  {
    id: '1',
    name: "Air Jordan 1 Retro High",
    description:
      "Classic Air Jordan 1 in excellent condition. Original box included. No major scuffs or wear. A true collector's piece.", brand: "Nike",
    size: "10",
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
    lowestBid: 280,
    category: "Lifestyle",
    image: "https://dawntown.co.in/cdn/shop/files/tenis_masculino_on_running_cloudtilt_black_ivory_11511_1_d25582d82da9590232050b362e9e825d.webp?v=1749479506&width=600",
    auctionEndTime: '2025-09-12T07:58:50+00:00',
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



export const mockUserBids: UserBid[] = [
  {
    id: "1",
    shoeId: "1",
    shoeName: "Air Jordan 1 Retro High",
    brand: "Nike",
    size: "10",
    get image() {
      return mockShoes.find(shoe => shoe.id === this.id)?.image
    },
    userBid: 450,
    currentHighestBid: 450,
    isUserHighest: true,
    auctionEndTime: "2024-12-20T18:00:00Z",
    status: "active", // active, won, lost, ended
    bidPlacedTime: "2024-12-15T10:30:00Z",
  },
  {
    id: "2",
    shoeId: "2",
    shoeName: "Yeezy Boost 350 V2",
    brand: "Adidas",
    size: "9.5",
    get image() {
      return mockShoes.find(shoe => shoe.id === this.id)?.image
    },
    userBid: 260,
    currentHighestBid: 280,
    isUserHighest: false,
    auctionEndTime: "2024-12-21T12:00:00Z",
    status: "active",
    bidPlacedTime: "2024-12-14T15:45:00Z",
  },
  {
    id: "3",
    shoeId: "3",
    shoeName: "Off-White x Nike Dunk Low",
    brand: "Nike",
    size: "11",
    get image() {
      return mockShoes.find(shoe => shoe.id === this.id)?.image
    },
    userBid: 800,
    currentHighestBid: 800,
    isUserHighest: true,
    auctionEndTime: "2024-12-10T18:00:00Z",
    status: "won",
    bidPlacedTime: "2024-12-08T09:15:00Z",
  },
  {
    id: "4",
    shoeId: "4",
    shoeName: "Travis Scott x Air Jordan 1",
    brand: "Nike",
    size: "10.5",
    get image() {
      return mockShoes.find(shoe => shoe.id === this.id)?.image
    },
    userBid: 1100,
    currentHighestBid: 1200,
    isUserHighest: false,
    auctionEndTime: "2024-12-12T20:00:00Z",
    status: "lost",
    bidPlacedTime: "2024-12-11T14:20:00Z",
  },
]

export const navLinks = [
  { name: 'Home', to: '/', icon: LucideHome },
  {
    name: 'Bids', to: '/my-bids', icon: LucideGitGraph
  }]