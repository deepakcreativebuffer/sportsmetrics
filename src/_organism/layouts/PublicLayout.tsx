import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  BgLeftWrapper,
  BgRightWrapper,
  BgWrapper,
  PageWrapper,
} from "./styled";
import bgLeft from "../../images/stadium.png";
import AuthHeader from "../../_molecule/AuthHeader";
const PublicLayout: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100%",
    }}
  >
    <AuthHeader />
    <Suspense fallback={"Loading"}>
      <PageWrapper>
        <BgWrapper>
          <BgLeftWrapper>
            <img src={bgLeft} alt="Icon" />
          </BgLeftWrapper>
          <BgRightWrapper></BgRightWrapper>
        </BgWrapper>
        <Outlet />
      </PageWrapper>
    </Suspense>
  </div>
);

export default PublicLayout;
