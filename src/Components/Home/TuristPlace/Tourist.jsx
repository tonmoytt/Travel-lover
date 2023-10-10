import { useLoaderData } from "react-router-dom";

 

const Tourist = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Bangladesh tourisom Place</h1>
        </div>
    );
};

export default Tourist;