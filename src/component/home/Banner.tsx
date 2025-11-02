"use client";

import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-[var(--secondary-accent)] rounded-full opacity-50 hover:opacity-100 transition-opacity" />
    ),
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
  };

  const bannerData = [
    {
      id: 1,
      title: "Advanced Robotic Arms",
      subtitle: "Precision Engineering",
      description:
        "Professional grade robotic arms with 6-axis movement and precision control for industrial automation.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=500&fit=crop",
      ctaText: "Shop Now",
      ctaLink: "/categories/robotic-arms",
      badge: "NEW",
      price: "Starting at $2,499",
    },
    {
      id: 2,
      title: "Smart Sensors Collection",
      subtitle: "IoT Ready Solutions",
      description:
        "Complete range of sensors for robotics projects - proximity, temperature, vision, and motion sensors.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=500&fit=crop",
      ctaText: "Explore",
      ctaLink: "/categories/sensors",
      badge: "SALE",
      price: "Up to 30% OFF",
    },
    {
      id: 3,
      title: "Premium Servo Motors",
      subtitle: "High Performance",
      description:
        "Ultra-precise servo motors with feedback control for demanding robotic applications.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=500&fit=crop",
      ctaText: "Learn More",
      ctaLink: "/categories/motors",
      badge: "FEATURED",
      price: "From $89",
    },
  ];

  return (
    <div className="relative bg-[var(--background-light)] overflow-hidden w-full">
      <Slider {...settings} className="banner-slider">
        {bannerData.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-[var(--primary-brand)] to-[var(--contrast-dark)]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                  {/* Left Content */}
                  <div className="text-white space-y-6">
                    {slide.badge && (
                      <span
                        className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                          slide.badge === "NEW"
                            ? "bg-[var(--buttons-highlight)]"
                            : slide.badge === "SALE"
                            ? "bg-red-500"
                            : "bg-[var(--secondary-accent)] text-[var(--text-primary)]"
                        }`}
                      >
                        {slide.badge}
                      </span>
                    )}

                    <div>
                      <p className="text-[var(--secondary-accent)] text-lg font-medium mb-2">
                        {slide.subtitle}
                      </p>
                      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-lg text-gray-300 max-w-lg">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <Link
                        href={slide.ctaLink}
                        className="bg-[var(--buttons-highlight)] hover:bg-[var(--buttons-highlight)]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                      >
                        {slide.ctaText}
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

                      <div className="text-[var(--secondary-accent)]">
                        <p className="text-sm opacity-80">{slide.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Product Showcase */}
                  <div className="hidden md:block">
                    <div className="relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-80 object-cover rounded-lg shadow-2xl border-4 border-[var(--secondary-accent)]"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-[var(--secondary-accent)] text-[var(--text-primary)] px-4 py-2 rounded-lg font-bold shadow-lg">
                        Premium Quality
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom CSS for Slick Slider */}
      <style jsx global>{`
        .banner-slider .slick-prev,
        .banner-slider .slick-next {
          z-index: 20;
          width: 50px;
          height: 50px;
        }

        .banner-slider .slick-prev {
          left: 20px;
        }

        .banner-slider .slick-next {
          right: 20px;
        }

        .banner-slider .slick-prev:before,
        .banner-slider .slick-next:before {
          font-size: 24px;
          color: var(--secondary-accent);
        }

        .banner-slider .slick-dots {
          bottom: 20px;
        }

        .banner-slider .slick-dots li button:before {
          opacity: 0;
        }

        .banner-slider .slick-dots li.slick-active div {
          opacity: 1 !important;
          background-color: var(--buttons-highlight) !important;
        }
      `}</style>
    </div>
  );
}
