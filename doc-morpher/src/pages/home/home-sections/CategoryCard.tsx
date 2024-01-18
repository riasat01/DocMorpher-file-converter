import { Link } from "react-router-dom";

interface categoryType {
    title: string,
    link: string
}
const CategoryCard = ({title, link}: categoryType) => {
    return (
        <Link to={link}>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;