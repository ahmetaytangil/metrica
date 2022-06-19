import React from 'react';
import Mcard from "../../UI/organisms/Mcard";
import StartFault from "./start_fault";
import EndFault from "./end_fault";

const Fault = () => {
    return (
        <Mcard headers={[{head: "ARIZA/DURUŞ"}, {items: []}]}>
            <StartFault />
            <EndFault />
        </Mcard>
    );
};

export default Fault;