"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Factory, Users, Calendar, Award } from "lucide-react"

const stats = [
  { icon: Factory, value: "500+", label: "Projects Completed" },
  { icon: Calendar, value: "25+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Certifications" },
  { icon: Users, value: "200+", label: "Clients Served" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
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
            About SCP Industries
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Since 1996 - Leading manufacturer of plastic pipes and fittings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden border-2 border-red-100"
          >
            <Image
              src="/images/about-doctor.png"
              alt="SCP Industries Facility"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Our Company
            </h3>
            <p className="text-lg text-primary font-medium">
              Industrial Manufacturing & Solutions
            </p>
            <p className="text-foreground/70 leading-relaxed">
              SCP Industries has been a leading manufacturer of plastic pipes and fittings
              since 1996. With over 25 years of experience, we combine advanced technology
              with proven expertise to deliver high-quality products for our clients.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Our commitment to excellence and innovation drives everything we do.
              We continuously invest in our facilities and team to maintain the
              highest standards in plastic manufacturing.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Our Mission
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                To deliver superior industrial solutions with precision, reliability,
                and efficiency. We are committed to exceeding client expectations
                through innovation and quality.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isInView={isInView} delay={0.7 + index * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  isInView,
  delay,
}: {
  stat: typeof stats[0]
  isInView: boolean
  delay: number
}) {
  const Icon = stat.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6 rounded-lg bg-red-50 hover:bg-red-100 transition-colors border border-red-100"
    >
      <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
      <div className="text-4xl font-bold text-foreground mb-2">
        {stat.value}
      </div>
      <div className="text-sm text-foreground/70">{stat.label}</div>
    </motion.div>
  )
}
