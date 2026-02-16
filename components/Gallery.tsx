"use client"

import { useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1-before.png",
    title: "Production Line",
  },
  {
    id: 2,
    src: "/images/gallery-2-before.png",
    title: "Manufacturing Process",
  },
  {
    id: 3,
    src: "/images/gallery-3-before.png",
    title: "Quality Control",
  },
  {
    id: 4,
    src: "/images/gallery-4-before.png",
    title: "Finished Products",
  },
  {
    id: 5,
    src: "/images/gallery-1-after.png",
    title: "Facility Overview",
  },
  {
    id: 6,
    src: "/images/gallery-2-after.png",
    title: "Warehouse",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const selectedItem = galleryImages.find((img) => img.id === selectedImage)

  return (
    <>
      <section
        id="gallery"
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
              Our Gallery
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              See our facilities and manufacturing processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative h-64 rounded-lg overflow-hidden bg-red-50 border-2 border-red-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X size={32} />
              </button>
              <div className="relative h-[80vh] rounded-lg overflow-hidden bg-red-50">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <h3 className="text-white text-center mt-4 text-xl font-semibold">
                {selectedItem.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
