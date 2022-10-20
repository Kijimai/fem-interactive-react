import React, { useState } from "react"
import starIcon from "../../assets/images/icon-star.svg"
import thankYouImg from "../../assets/images/illustration-thank-you.svg"

const Rating = () => {
  const [chosenRating, setChosenRating] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const ratings = [1, 2, 3, 4, 5]

  const handleClick = (e) => {
    setChosenRating(Number(e.target.value))
  }

  const handleSubmit = () => {
    console.log(chosenRating)
    setIsSubmitted(true)
  }

  if (!isSubmitted) {
    return (
      <div className="rating">
        <img className="rating__star-icon rounded" src={starIcon} alt="star" />
        <div className="rating__info">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="rating__btn-container">
          {ratings.map((rating, index) => {
            return (
              <button
                aria-pressed={chosenRating === rating ? true : false}
                className="rating__number rounded"
                value={rating}
                onClick={handleClick}
                key={index}
              >
                {rating}
              </button>
            )
          })}
        </div>
        <button
          disabled={chosenRating === null ? true : false}
          onClick={handleSubmit}
          className="rating__submit-button uppercase"
        >
          Submit
        </button>
      </div>
    )
  }

  return (
    <div className="rating">
      <img className="rating__submit-img" src={thankYouImg} alt="" />
      <div className="rating__display">
        <p>You selected {chosenRating} out of 5</p>
      </div>
      <div className="rating__success">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  )
}

export default Rating
