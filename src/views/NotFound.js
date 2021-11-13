import React from "react";
import Routes from "../components/Routes";
import { Link } from "react-router-dom";
import url from "../utils/path.json";

let styles = {
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    fontSize: 46,
  },
};

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.status}>404</h1>
      <img src={url.noImage} alt="404 page" width="200" />
      <p>{<Link to={{ pathname: `${Routes.home}` }}>HOME</Link>}</p>
    </div>
  );
}
