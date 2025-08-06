"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

interface ImageGalleryPopupProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageGalleryPopup({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ImageGalleryPopupProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getFileName = (src: string) => {
    return src.split("/").pop()?.split(".")[0] || "";
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-4xl w-full h-full max-h-screen p-0 bg-gray/95 border-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 z-50 bg-white/10 text-white hover:bg-white/20 w-14 h-14"
            onClick={onClose}
          >
            <X style={{ width: "32px", height: "32px" }} />
          </Button>

          {/* Previous Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 hover:text-white w-16 h-16 flex items-center justify-center"
              onClick={goToPrevious}
            >
               <ChevronLeft style={{ width: isMobile ? "32px" : "64px", height: isMobile ? "32px" : "64px" }} />
            </Button>
          )}
          <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
            <div className="max-h-[90vh] max-w-[80%] flex items-center justify-center">
              <img
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                className="max-h-[90vh] max-w-[80%] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 hover:text-white w-16 h-16 flex items-center justify-center"
              onClick={goToNext}
            >
             <ChevronRight style={{ width: isMobile ? "32px" : "64px", height: isMobile ? "32px" : "64px" }} />

            </Button>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm text-center space-y-1">
              <div>
                {currentIndex + 1} / {images.length}
              </div>
              <div className="text-xs opacity-80">
                {getFileName(currentImage.alt)}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
