import React from 'react';



const customerReviews = [
  {
    name: 'Aru',
    review: 'Jenny is an amazing teacher, she is very patient and always give constructive feedback that helps us to understand where we can improve upon.',
    extraContent: '(review provided from another platform)',
    stars: 5,
  },
  {
    name: 'Rosalinda',
    review: `Mr. Pena is not only an amazing teacher but also a gifted musician. He is very kind, friendly and has been great at assessing our son's interests to continuously keep him motivated. We highly recommend him!`,
    extraContent: '(review provided from another platform)',
    stars: 5,
  },
  {
    name: 'Ana',
    review: 'Jenny is great! Such a fun and productive lesson!',
    extraContent: '(review provided from another platform)',
    stars: 5,
  },
  {
    name: 'Ximena',
    review: `Mr. Johnny’s teaching style and patience have made learning the guitar a fun and enjoyable experience for my daughter Sofia. She looked forward to her lessons each week and has shown significant progress in her skills. His dedication to nurturing a love for music in children truly shines through his lessons.`,
    extraContent: '(review provided from another platform)',
    stars: 5,
  },
  {
    name: 'Carmen',
    review: ' Like alway I enjoy and learning new way to improve myself in learning the violin!! Love my teacher!!',
    extraContent: '(review provided from another platform)',
    stars: 5,
  },
  {
    name: 'Paulo',
    review: 'having great coaches (trainers) to teaching you on how to learn in easy steps and making it fun at the same time, makes the biggest difference. Because I do think some do have a hard time learning and when they do they give up and quit. But when your trainer is showing you the tricks and talents that they posses, it makes it fun to learn. Thank you Jen (Trainer) and Trala.',
    extraContent: '(review provided from another platform)',
    stars: 5,
  }
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10">Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {customerReviews.map((review, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl mb-4">
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