import { Link } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";

interface PricingCardPropType { 
  title: string, 
  price: string, 
  storage: string, 
  conversionPerMinutes: string, 
  conversionAtTime: string, 
  mergeAtTime: string, 
  priority: string 
}

const PricingCard = ({ title, price, storage, conversionPerMinutes, conversionAtTime, mergeAtTime, priority }: PricingCardPropType) => {
  
  return (
    <div className="bg-green-100 p-5 rounded-md flex flex-col items-center  space-y-3">
      <h3 className="text-3xl font-bold">{title}</h3>
      <h2>
        <span className="text-xl font-semibold">$</span>{" "}
        <span className="text-5xl font-bold">{price}</span>
      </h2>
      <div className="flex flex-col items-center">
        <p>/month</p>
        <p>calcel anytime</p>
      </div>
      <Link to={`/payment/${price}`}>
        <button className="px-6 py-2 bg-green-700 text-white rounded-lg">
          Continue
        </button>
      </Link>
      <div>
        <ul className="leading-8">
          <li><FcCheckmark className="inline mr-2"/>{storage} GB maximum file size</li>
          <li><FcCheckmark className="inline mr-2"/>{conversionPerMinutes} conversion per minutes/month</li>
          <li><FcCheckmark className="inline mr-2"/>{conversionAtTime} conversion at a time</li>
          <li><FcCheckmark className="inline mr-2"/>Merge {mergeAtTime} files at a time</li>
          <li><FcCheckmark className="inline mr-2"/>No ads</li>
          <li><FcCheckmark className="inline mr-2"/>{priority} priority</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
