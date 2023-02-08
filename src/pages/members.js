import { useState } from "react";
import Table from "./comps/table";

const Members = () => {
    const [data, setData] = useState([
        {Members: "meriem", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"379247",JoiningDate:"May10,2019",Department:"ui/ux"},
        {Members: "bilal", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "mokrane", IDK:"2342134",JoiningDate:"May9,2020",Department:"dev"},
        {Members: "cheima", IDK:"29374",JoiningDate:"May9,2018",Department:"events"},
        {Members: "amani", IDK:"29374",JoiningDate:"May9,2019",Department:"dev"},
        {Members: "ali", IDK:"243522",JoiningDate:"March9,2019",Department:"dev"},
        {Members: "ali", IDK:"29374",JoiningDate:"May19,2019",Department:"dev"}


    ])
    return (
        <Table data ={data} />
    );
}
 
export default Members;