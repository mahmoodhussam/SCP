"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Industrial Products",
    description: "High-quality industrial products and components for manufacturing.",
    image: "/images/procedure-1.png",
    features: ["Precision Components", "Custom Manufacturing", "Quality Assurance", "Fast Delivery"],
  },
  {
    title: "Plastic Solutions",
    description: "Comprehensive plastic manufacturing and processing solutions.",
    image: "/images/procedure-2.png",
    features: ["Plastic Products", "Custom Molding", "Packaging Solutions", "Bulk Orders"],
  },
  {
    title: "Industrial Services",
    description: "Expert industrial services and technical support for your operations.",
    image: "/images/procedure-3.png",
    features: ["Consulting", "Technical Support", "Maintenance", "Training"],
  },
]

export default function Procedures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="products"
      ref={ref}
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Quality industrial solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              product={product}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  index,
  isInView,
}: {
  product: typeof products[0]
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-red-100"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground">
          {product.title}
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          {product.description}
        </p>
        <ul className="space-y-2">
          {product.features.map((feature) => (
            <li key={feature} className="text-sm text-foreground/60 flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2"
          onClick={() => {
            const element = document.querySelector("#contact")
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}
