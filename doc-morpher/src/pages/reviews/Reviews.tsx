import { useLoaderData } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import ReviewBox from "./ReviewBox";

const Reviews = () => {
  const review = useLoaderData();
  console.log(review);
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {review.map((review) => (
          <ReviewCard key={review.reviewer_name} review={review}></ReviewCard>
        ))}
      </div>
      <div className="mt-8 ml-72">
        <ReviewBox></ReviewBox>
      </div>
    </div>
  );
};

export default Reviews;
