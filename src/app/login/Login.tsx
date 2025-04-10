import Button from "@/widgets/button/Button";
import Hr from "@/widgets/hr/Hr";
import LoginInput from "@/widgets/input/LoginInput";
import Caption from "@/widgets/typography/Caption";
import H3 from "@/widgets/typography/H3";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[350px] mt-[29px] border border-gray-600 px-12 pt-10 pb-8 space-y-7">
        <H3 className="text-center">Snap-Social</H3>

        <div className="space-y-4">
          <LoginInput placeholder="Email" type="email" />
          <LoginInput placeholder="Password" type="password" />
        </div>

        <Button>Log in</Button>

        <div className="flex items-center space-x-4">
          <Hr /> <Caption>OR</Caption> <Hr />
        </div>

        <Caption className="cursor-pointer text-center">
          Forgot Password?
        </Caption>
      </div>
    </div>
  );
};

export default Login;
