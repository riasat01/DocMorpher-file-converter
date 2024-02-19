import TextToSpeech from "../textToSpeech/TextToSpeech";
import Categories from "./home-sections/categories/Categories";
import Dnd from "./home-sections/dnd/Dnd";



const Home = () => {
    return (
        <div>
            <Dnd></Dnd>
            <TextToSpeech></TextToSpeech>
            <Categories />
        </div>
    );
};

export default Home;