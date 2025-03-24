import Hr from "@/widgets/hr/Hr";
import LoginInput from "@/widgets/input/LoginInput";
import Caption from "@/widgets/typography/Caption";
import H3 from "@/widgets/typography/H3";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="border border-gray-600 px-12 pt-10 pb-8">
        <H3 className="text-center">Snap-Social</H3>

        <div className="mt-7 space-y-4">
          <LoginInput placeholder="Email" type="email" />
          <LoginInput placeholder="Password" type="password" />
        </div>

        <div className="mt-7 flex items-center space-x-4">
          <Hr /> <Caption>OR</Caption> <Hr />
        </div>
      </div>
    </div>
  );
};

export default Login;
