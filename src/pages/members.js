import { useState } from "react";
import Table from "./table";

const Members = () => {
    const [data, setData] = useState([
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"}


    ])
    return (
        <Table data ={data} />
    );
}
 
export default Members;