
import { useContext } from "react";
import Categories from "./home-sections/categories/Categories";
import { userContext } from "../../provider/auth-provider/AuthProvider";
import Dnd from "./home-sections/dnd/Dnd";


const Home = () => {
    const {ll} = useContext(userContext);
    return (
        <div>
            <Dnd></Dnd>
            <Categories />
        </div>
    );
};

export default Home;