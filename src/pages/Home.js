import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Background from "./users/background";
import Base from "./home/base";
import TopBar from "./home/topbar";
import BottomBar from "./home/bottombar";
import Data from "./home/data";
import Submit from "./home/submit";

const Home = () => {
  return (
    <Background>
      <Base>
        <TopBar>
          <h1>GroupSync</h1>
        </TopBar>
        <BottomBar>
          <Data type="text"></Data>
          <Submit>            
          <FontAwesomeIcon icon={faPaperPlane} />
          </Submit>
        </BottomBar>
      </Base>
    </Background>
  );
};

export default Home;
