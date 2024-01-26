import Categories from "./home-sections/categories/Categories";
import Dnd from "./home-sections/dnd/Dnd";



const Home = () => {
    return (
        <div>
            <Dnd></Dnd>
            <Categories />
        </div>
    );
};

export default Home;