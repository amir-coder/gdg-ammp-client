import { useState } from "react";
import Table from "./comps/table";

const Members = () => {
    const [data, setData] = useState([
        {Members: "meriem", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"379247",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "bilal", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"2342134",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"243522",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"}


    ])
    return (
        <Table data ={data} />
    );
}
 
export default Members;