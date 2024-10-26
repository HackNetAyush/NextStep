import React from "react";
import { User } from "@nextui-org/react";
import { Input, Button } from "@nextui-org/react";
import { MailIcon, Bolt } from "lucide-react";
import { FaBolt } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const NextAI = () => {
  return (
    <div className="main w-full h-full flex flex-col items-center justify-center">
      <div className="header w-full h-[65px] flex items-center justify-center p-4 border-b-2 mt-1">
        <div className="left w-1/2">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
        <div className="right w-1/2"></div>
      </div>
      <div className="chatBody w-full h-[calc(100%-65px)] flex flex-col items-center justify-center">
        <div className="chats w-full h-[calc(100%-70px)]"></div>

        <div className="input_div w-full h-[70px] flex items-center justify-center p-4">
          <Input
            type="email"
            className="m-0 p-0"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
              <FaBolt
                size={18}
                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
              />
            }
          />
          <Button
            color="primary"
            className=" m-0 min-w-fit p-5 rounded-[15px] ml-2"
          >
            <IoSend
              size={18}
              className="text-2xl pointer-events-none flex-shrink-0"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NextAI;
