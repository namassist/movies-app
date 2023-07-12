/* eslint-disable react/prop-types */
export default function Ratings({ ratings }) {
  let rates = [];

  for(let i = 1; i <= 5; i++) {
    if (i > Math.round(ratings / 2)) {
      rates.push(
        <i className="fa-regular fa-star text-yellow-500 text-sm"></i>
      );
    } else {
      rates.push(
        <i className="fa-solid fa-star text-yellow-500 text-sm"></i>
      );
    }
  }

  return (
    <div className="flex gap-x-1 items-center">
      {rates}
      <span className="ml-2">({ratings})</span>
    </div>
  );
}
