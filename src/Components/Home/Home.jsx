import Navbar from "../Navbar/Navbar";
import Tourist from "./TuristPlace/Tourist";
import Bg from "./bg/Bg";



const Home = () => {
    return (
        <div >
            <div className="px-10 py-4 bg-sky-200">
                <Navbar></Navbar>
            </div>
            <Bg></Bg>
            <Tourist></Tourist>

        </div>
    );
};

export default Home;