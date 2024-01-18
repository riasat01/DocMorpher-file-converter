import { Link } from "react-router-dom";
import cardBg from "../../../../assets/card-bg.png"

interface categoryType {
    title: string,
    link: string
}
const CategoryCard = ({title, link}: categoryType) => {
    return (
        <Link to={link}>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={cardBg} alt="card background image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;