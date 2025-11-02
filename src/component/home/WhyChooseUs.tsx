"use client";

import { Truck, Lock, RotateCcw, MessageCircle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $100 worldwide",
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description: "100% secure payment methods",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day money back guarantee",
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Dedicated technical support",
    },
  ];

  return (
    <section className="py-16 bg-[var(--primary-brand)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent
                    className="w-16 h-16 text-[var(--secondary-accent)]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--secondary-accent)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
