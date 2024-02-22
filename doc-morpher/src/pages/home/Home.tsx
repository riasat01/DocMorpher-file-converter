
// import Dnd2 from "./dnd2/Dnd2";
import Categories from "./home-sections/categories/Categories";
import HomeUpper from "./home-sections/homeUpper/HomeUpper";
// import Dnd from "./home-sections/dnd/Dnd";



const Home = () => {
    return (
        <div>
            <div >

            <HomeUpper></HomeUpper>
            </div>
            {/* <Dnd2></Dnd2> */}
            {/* <Dnd></Dnd> */}
            <Categories />
           

        </div>
    );
};

export default Home;