"use client";
import { Link, usePathname } from "@/navigation";
import { Dropdown } from "flowbite-react";
import React from "react";
const LangDrop = () => {
  const pathname = usePathname();
  return (
    <>
      {" "}
      <Dropdown label="Language" inline>
        <Link href={pathname} locale="en">
          <Dropdown.Item>English</Dropdown.Item>
        </Link>
        <Link href={pathname} locale="ar">
          <Dropdown.Item>Arabic</Dropdown.Item>
        </Link>
      </Dropdown>
    </>
  );
};

export default LangDrop;
