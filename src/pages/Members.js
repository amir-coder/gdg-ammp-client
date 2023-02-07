import { useState } from "react";
import Table from "./table";


const Members = () => {
    const [data, setData] = useState([
        { Members: 'Ali', IDK: 1234214, JoiningDate: 'May 19,2019', Department: 'dev' },
        { Members: 'cheima', IDK: 1234214, JoiningDate: 'May 19,2019', Department: 'design' },
        { Members: 'amani', IDK: 1234214, JoiningDate: 'May 19,2019', Department: 'logistics' },
        { Members: 'moh', IDK: 1234214, JoiningDate: 'May 19,2019', Department: 'dev' },
        { Members: 'meroua', IDK: 1234214, JoiningDate: 'May 19,2019', Department: 'ui/ux' },
        { Members: 'mokran', IDK: 1234214, JoiningDate: 'May 19,2019', Department: 'ui/ux' },
        { Members: 'massi', IDK: 1234214, JoiningDate: 'May 19,2019', Department: 'dev' },
        { Members: 'Ali', IDK: 1234214, JoiningDate: 'May 19,2019', Department: 'logistics' }

    ])
    return (

        <Table data={data} />
    );
}

export default Members;