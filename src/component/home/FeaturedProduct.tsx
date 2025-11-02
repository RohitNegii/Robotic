"use client";

import Link from "next/link";
import { useState } from "react";

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "6-Axis Robotic Arm Pro",
      price: 2499.99,
      originalPrice: 2999.99,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      rating: 4.8,
      reviews: 124,
      badge: "BESTSELLER",
      inStock: true,
    },
    {
      id: 2,
      name: "Ultrasonic Sensor Kit",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      rating: 4.6,
      reviews: 89,
      badge: "NEW",
      inStock: true,
    },
    {
      id: 3,
      name: "High Torque Servo Motor",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      rating: 4.9,
      reviews: 256,
      badge: "SALE",
      inStock: true,
    },
    {
      id: 4,
      name: "Arduino Mega Controller",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      rating: 4.7,
      reviews: 178,
      inStock: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[var(--primary-brand)] mb-4">
              Featured Products
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Handpicked products for your next robotics project
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[var(--buttons-highlight)] text-white rounded-lg font-semibold hover:bg-[var(--buttons-highlight)]/90 transition-colors"
          >
            View All Products
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[var(--background-light)] rounded-lg border-2 border-[var(--secondary-accent)] overflow-hidden hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Badge */}
              {product.badge && (
                <div
                  className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold ${
                    product.badge === "BESTSELLER"
                      ? "bg-[var(--buttons-highlight)] text-white"
                      : product.badge === "NEW"
                      ? "bg-blue-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {product.badge}
                </div>
              )}

              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[var(--secondary-accent)] transition-colors">
                <svg
                  className="w-5 h-5 text-[var(--text-secondary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`${product.image}?w=400&h=400&fit=crop`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--primary-brand)] mb-2 line-clamp-2">
                  {product.name}
                </h3>

            
                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-[var(--primary-brand)]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[var(--text-secondary)] line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                  {product.inStock ? (
                    <span className="text-sm text-green-600 font-medium">
                      ✓ In Stock
                    </span>
                  ) : (
                    <span className="text-sm text-red-600 font-medium">
                      ✗ Out of Stock
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    product.inStock
                      ? "bg-[var(--buttons-highlight)] text-white hover:bg-[var(--buttons-highlight)]/90"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {product.inStock ? "Add to Cart" : "Notify Me"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
