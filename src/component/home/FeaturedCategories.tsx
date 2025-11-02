"use client";

import Link from "next/link";

export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      name: "Robotic Arms",
      description: "Industrial & DIY robotic arms",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      productCount: 156,
      icon: "🦾",
    },
    {
      id: 2,
      name: "Sensors",
      description: "Motion, proximity & vision sensors",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      productCount: 234,
      icon: "📡",
    },
    {
      id: 3,
      name: "Motors & Servos",
      description: "High-performance motors",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
      productCount: 189,
      icon: "⚙️",
    },
    {
      id: 4,
      name: "Controllers",
      description: "Arduino, Raspberry Pi & more",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      productCount: 98,
      icon: "🎮",
    },
    {
      id: 5,
      name: "Power Supplies",
      description: "Batteries & charging systems",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      productCount: 76,
      icon: "🔋",
    },
    {
      id: 6,
      name: "Chassis & Parts",
      description: "Frames, wheels & accessories",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      productCount: 312,
      icon: "🔩",
    },
  ];

  return (
    <section className="py-16 bg-[var(--background-light)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--primary-brand)] mb-4">
            Shop by Category
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Explore our comprehensive range of robotic components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg border-2 border-[var(--secondary-accent)] bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${category.image}?w=600&h=300&fit=crop`}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--contrast-dark)] to-transparent opacity-60" />
                {/* <div className="absolute top-4 right-4 text-4xl">
                  {category.icon}
                </div> */}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--primary-brand)] mb-2 group-hover:text-[var(--buttons-highlight)] transition-colors">
                  {category.name}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] text-sm">
                    {category.productCount} Products
                  </span>
                  <span className="text-[var(--buttons-highlight)] font-semibold group-hover:translate-x-2 transition-transform">
                    View All →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
