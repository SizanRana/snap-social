import ButtonText from "@/widgets/typography/ButtonText";
import emptyProfileImage from "@/assets/images/emptyProfile.jpg";
import Image from "next/image";
import React from "react";

const SidebarProfileItem: React.FC = () => {
  return (
    <button className="px-3.5 py-3 flex items-center rounded-md space-x-3 cursor-pointer w-full hover:bg-hover-gray">
      <Image
        className="h-8 w-8 object-contain"
        alt="profile"
        src={emptyProfileImage}
      />
      <ButtonText>Profile</ButtonText>
    </button>
  );
};

export default SidebarProfileItem;
