import {
    useLoaderData,
    useParams
} from "react-router-dom";

const Details = () => {
    const datas = useLoaderData();
    const { id } = useParams()
    const data = datas.find(data => data.id == id);
    console.log(data);
    // console.log(id);
    // console.log(datas);
    return (
        <div className="grid grid-cols-7 gap-5 ">
            <div className="border min-h-[500px] col-span-4 border-pink-500">
                <img className="h-full" src={data.image} alt="" />
            </div>
            <div className="border col-span-3 border-black-500">

            </div>
        </div>
    );
};

export default Details;