"use client";
import { Dropdown } from "flowbite-react";
import React from "react";
const LangDrop = () => {
  return (
    <>
      {" "}
      <Dropdown label="Language" inline>
        <Dropdown.Item>English</Dropdown.Item>
        <Dropdown.Item>French</Dropdown.Item>
        <Dropdown.Item>Arabic</Dropdown.Item>
        <Dropdown.Item>German</Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default LangDrop;
