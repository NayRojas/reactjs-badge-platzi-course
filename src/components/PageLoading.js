import React from "react";

import "./styles/PageLoading.css";
import Loader from "./Loader";
import Skeleton from "react-loading-skeleton";

function PageLoading() {
  return (
    <div className="PageLoading">
      <Skeleton count={5} />
    </div>
  );
}

export default PageLoading;
