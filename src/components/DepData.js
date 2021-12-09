
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

const DepData = (props) => {

    const depDataFromStore = useSelector((state) => state.dep.depState);

    return (
        <div>
            <h1 className="display-4 text-primary mt-3" >Department Data Component</h1>
            <p>Department data component</p>
            <p>Data from store: {depDataFromStore.dName}</p>
        </div>
    );
}
export default DepData;

