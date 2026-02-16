"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    name: "أحمد محمد",
    rating: 5,
    text: "SCP Industries delivered exceptional quality and service. Their products met all our specifications and the delivery was on time. Highly recommended.",
    company: "Manufacturing Corp",
  },
  {
    name: "فاطمة علي",
    rating: 5,
    text: "Professional team and excellent industrial solutions. They understand our needs and deliver consistently high-quality results.",
    company: "Tech Industries",
  },
  {
    name: "خالد حسن",
    rating: 5,
    text: "Outstanding partnership with SCP Industries. Their expertise and reliability make them our preferred supplier.",
    company: "Global Manufacturing",
  },
  {
    name: "سارة إبراهيم",
    rating: 5,
    text: "Quality products and excellent customer service. SCP Industries has been a trusted partner for our operations.",
    company: "Industrial Solutions",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" })

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-red-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            What our clients say about us
          </p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1.33rem)] min-w-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: typeof testimonials[0]
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-red-100 h-full flex flex-col">
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-red-500 text-red-500" />
        ))}
      </div>
      <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
        "{testimonial.text}"
      </p>
      <div className="border-t border-red-100 pt-4">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-foreground/60">{testimonial.company}</p>
      </div>
    </div>
  )
}
