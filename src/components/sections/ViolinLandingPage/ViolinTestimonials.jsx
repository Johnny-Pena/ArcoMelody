export default function ViolinTestimonials() {
  const testimonials = [
    {
      name: 'Carmen',
      review: 'Like always I enjoy and learning new way to improve myself in learning the violin!! Love my teacher!!',
      extraContent: '(Adult Student)',
      stars: 5,
    },
    {
      name: 'Maria S.',
      review: "Jenny's teaching method is amazing. My daughter has progressed so much in just a few months of virtual lessons.",
      extraContent: '(Parent)',
      stars: 5,
    },
    {
      name: 'David R.',
      review: "I never thought I could learn violin at age 45, but Jenny made it possible. The virtual format works perfectly for my schedule.",
      extraContent: '(Adult Beginner)',
      stars: 5,
    }
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10">Student Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {testimonials.map((review, index) => (
          <div key={index} className="card bg-base-100 w-full max-w-md shadow-xl mb-4">
            <div className="card-body">
              <h2 className="card-title">-{review.name}</h2>
              <p>{review.review}</p>
              <div className="card-actions justify-end">
                {[...Array(review.stars)].map((_, starIndex) => (
                  <div key={starIndex} className="mask mask-star-2 bg-orange-400 w-6 h-6"></div>
                ))}
                <div>Rating: {review.stars} out of 5 stars</div>
                <div className="text-right mt-4 text-md">
                  <p>{review.extraContent}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}