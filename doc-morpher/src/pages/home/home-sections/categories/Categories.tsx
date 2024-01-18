import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-8 md:mx-14 lg:mx-24">
            {
                ["PDF", "DOC", "PPT", "IMAGE"].map(item => <CategoryCard key={item} title={item} link={`/${item.toLowerCase()}`} />) 
            }
        </div>
    );
};

export default Categories;