import React from 'react'

const ReviewList = ({ reviews }) => {

    if (reviews.length === 0) {
        return <div>No Reviews</div>
    }    

  return (
    <div>
        {reviews.map((review, idx)=>(
            <div key={idx}>
                <h3>{review.reviewerName}</h3>
                <h4>Rating: {review.rating}/5</h4>
                <p>{review.comment}</p>
                <p>{new Date(review.date).toLocaleString()}</p>
            </div>
        ))}

    </div>
  )
}

export default ReviewList