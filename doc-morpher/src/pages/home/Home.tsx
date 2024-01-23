import Dnd from "./dnd/Dnd";
import { useContext } from "react";
import Categories from "./home-sections/categories/Categories";
import { userContext } from "../../provider/auth-provider/AuthProvider";


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