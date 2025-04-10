import React from "react";
import H3 from "@/widgets/typography/H3";
import { sidebarItems } from "./constants/sidebar.constants";
import SingleSidebarItem from "./SingleSidebarItem";
import AlexBrushFont from "@/widgets/typography/AlexBrushFont";
import SidebarProfileItem from "./SidebarProfileItem";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[245px] border-r h-screen border-charcoal px-[24px] py-[36px]">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-7">
          <AlexBrushFont>
            <H3 className="font-alex-brush">SnapSocial</H3>
          </AlexBrushFont>

          <div className="space-y-3">
            {sidebarItems.map((item) => {
              return <SingleSidebarItem key={item.id} {...item} />;
            })}

            <SidebarProfileItem />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
