export default function ViolinTestimonialSnippet() {
  return (
    <div className="bg-base-100 p-4 rounded-lg mb-4">
      <p className="text-sm font-semibold">💬 Roberta:</p>
      <p className="text-sm italic">
      "Jenny has helped me grow as a musician starting at age 48. I really cannot say enough about her!"
      </p>
      <p className="text-sm font-semibold mt-2">— Violin for 2 years • Google review</p>
    
    <div className="rating rating-sm mt-3">
                  {[...Array(5)].map((_, i) => (
                    <input key={i} type="radio" className="mask mask-star-2 bg-yellow-400" disabled checked />
                  ))}
    </div>
    </div>
  );
}