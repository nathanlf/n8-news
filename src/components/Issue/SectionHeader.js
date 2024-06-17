import React from "react";
import { blueHeader } from "./newsletters.module.css";
import { createSlug } from "../../util/createSlug";

const SectionHeader = ({ title }) => {
  return (
    <div className={blueHeader} id={createSlug(title)}>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionHeader;
