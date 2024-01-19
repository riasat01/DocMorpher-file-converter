import { useContext } from "react";
import Categories from "./home-sections/categories/Categories";
import { userContext } from "../../provider/auth-provider/AuthProvider";


const Home = () => {
    const {ll} = useContext(userContext);
    return (
        <div>
            <Categories />
        </div>
    );
};

export default Home;