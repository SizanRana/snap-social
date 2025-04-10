import React from "react";
import { SidebarItem } from "./models/sidebarItem.model";
import ButtonText from "@/widgets/typography/ButtonText";

const SingleSidebarItem: React.FC<SidebarItem> = ({ outlineIcon, title }) => {
  const Icon = outlineIcon;
  return (
    <button className="px-3.5 py-3 flex items-center rounded-md space-x-3 cursor-pointer w-full hover:bg-hover-gray">
      <Icon className="h-6" />
      <ButtonText>{title}</ButtonText>
    </button>
  );
};

export default SingleSidebarItem;
