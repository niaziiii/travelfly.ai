"use client";
import { Link } from "@/navigation";
import { Dropdown } from "flowbite-react";
import React from "react";
const LangDrop = () => {
  return (
    <>
      {" "}
      <Dropdown label="Language" inline>
        <Link href="/" locale="en">
          <Dropdown.Item>English</Dropdown.Item>
        </Link>
        <Link href="/" locale="ar">
          <Dropdown.Item>Arabic</Dropdown.Item>
        </Link>
      </Dropdown>
    </>
  );
};

export default LangDrop;
