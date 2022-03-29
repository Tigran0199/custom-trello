import React , {useEffect}  from "react";
import BoardsHeader from "./prePages/BoardsHeader";
import BoardsLeftMenu from "./BoardsLeftMenu";
import BoardsCentralMenu from "./BoardsCentralMenu";
import {useNavigate} from "react-router-dom";

function Boards() {
    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem("isLoggedIn")){
            navigate("/")
        }
    });
  return (
      <>
          <BoardsHeader />
          <div className="flex">
          <BoardsLeftMenu />
          <BoardsCentralMenu  />
          </div>
</>
  );
}
export default Boards;