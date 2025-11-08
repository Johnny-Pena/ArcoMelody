export default function GuitarTestimonialSnippet() {
  return (
    <div className="bg-base-100 p-4 rounded-lg mb-4">
      <p className="text-sm font-semibold">💬 Rosalinda, parent of son taking guitar lessons</p>
      <p className="text-sm italic">
      "Mr. Pena is not only an amazing teacher but also a gifted musician."
      </p>
    
    <div className="rating rating-sm mt-3">
                  {[...Array(5)].map((_, i) => (
                    <input key={i} type="radio" className="mask mask-star-2 bg-yellow-400" disabled checked />
                  ))}
    </div>
    </div>
  );
}