import React, { useContext,useEffect ,useState} from "react";
import { StateContext } from "../Context/usecontext";
import CodingSection from "./Codingsection";
import InputSection from "./Inputsection";
import OutputSection from "./Outputsection";
import "../Styles/Maineditor.css"

const Maineditor = () => {

  const {output,setoutput} = useContext(StateContext);
  


  return (
    <div className="main-editor">
        <CodingSection/>
        <div className='input-output-container'>
        <InputSection/>
        <OutputSection data={{output,setoutput}} />
        </div>
  </div>
  );
};

export default Maineditor;