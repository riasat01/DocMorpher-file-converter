
import Dnd2 from "./dnd2/Dnd2";
import Categories from "./home-sections/categories/Categories";
import Dnd from "./home-sections/dnd/Dnd";



const Home = () => {
    return (
        <div>
            <Dnd2></Dnd2>
            <Dnd></Dnd>
            <Categories />
           

        </div>
    );
};

export default Home;