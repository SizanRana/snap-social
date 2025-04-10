import Caption from "@/widgets/typography/Caption";
import H6 from "@/widgets/typography/H6";
import smilyFaceImage from "@/assets/images/smily-face.png";
import React from "react";
import Image from "next/image";
import Hr from "@/widgets/hr/Hr";
import SearchInput from "@/widgets/input/SearchInput";

const FindFriendsPage: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-xl flex justify-center">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              className="h-24 w-24 object-contain"
              src={smilyFaceImage}
              alt="Smily Face"
            />
            <div>
              <H6 className="font-bold">Find friends and accounts you like</H6>
              <Caption className="-mt-2 text-[16px]">
                Try following 5 or more accounts for a personalized experience.
              </Caption>
            </div>
          </div>

          <Hr />

          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default FindFriendsPage;
