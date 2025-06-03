
import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxStars?: number
  size?: number
  className?: string
}

export default function StarRating({ rating, maxStars = 5, size = 20, className = "" }: StarRatingProps) {
  // Asegurar que el rating esté entre 0 y maxStars
  const clampedRating = Math.max(0, Math.min(rating, maxStars))

  const stars = []

  for (let i = 1; i <= maxStars; i++) {
    const difference = clampedRating - i + 1

    if (difference >= 1) {
      // Estrella completa
      stars.push(<Star key={i} size={size} className="fill-yellow-400 text-yellow-400" />)
    } else if (difference > 0) {
      // Media estrella
      stars.push(
        <div key={i} className="relative">
          <Star size={size} className="text-gray-300" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${difference * 100}%` }}>
            <Star size={size} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      )
    } else {
      // Estrella vacía
      stars.push(<Star key={i} size={size} className="text-gray-300" />)
    }
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {stars}
      <span className="ml-2 text-sm text-gray-600 font-medium">{clampedRating.toFixed(1)}</span>
    </div>
  )
}
