"use client"

import { useState } from "react"
import { artworks } from "@/data/artworks"
import { Button } from "@/components/ui/button"
import ImageGalleryPopup from "@/components/ImageGalleryPopup" // yolunu doğru yaz

export const WorksSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupIndex, setPopupIndex] = useState(0)

  const openPopup = (index: number) => {
    setPopupIndex(index)
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const heights = [
    ["h-[40%]", "h-[60%]"],
    ["h-[60%]", "h-[40%]"],
    ["h-[40%]", "h-[60%]"],
    ["h-[60%]", "h-[40%]"],
  ]

  return (
    <section id="works" className="relative z-0 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Çalışmalarımız
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Algoritmalar ve kod ile yarattığımız sanat eserlerini keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[600px] mb-12">
          {Array.from({ length: 4 }).map((_, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 h-full">
              {[0, 1].map((rowIdx) => {
                const index = colIdx * 2 + rowIdx
                const height = heights[colIdx][rowIdx]
                const art = artworks[index]

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-xl bg-muted cursor-pointer ${height}`}
                    onClick={() => openPopup(index)}
                  >
                    <img
                      src={art.image}
                      alt={art.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <ImageGalleryPopup
        images={artworks.map((art, idx) => ({
          id: idx,
          src: art.image,
          alt: art.alt,
        }))}
        initialIndex={popupIndex}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </section>
  )
}
