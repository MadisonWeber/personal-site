import React from "react";
import { Mail, Send, MessageCircleMore } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

const ContactMe = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="fixed bottom-8 right-4 z-50 flex flex-row items-center justify-center gap-x-2 border-1 border-gray-200 bg-white w-50 py-2 rounded-top-md rounded-bottom-0 cursor-pointer  shadow-[1px_0px_4px_2px_rgba(0,0,0,0.15)]">
          <span className="text-gray-800 text-sm font-bold">Contact Me</span>
          <MessageCircleMore
            height={11}
            width={11}
            className="text-primary-500"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top" // Position above trigger
        align="end"
        sideOffset={10}
        alignOffset={10}
        className="p-0 border-0"
      >
        <div className="flex flex-col items-start justify-start p-4 min-h-80  border-gray-200 rounded-lg border-1 bg-white">
          <span className="font-semibold">Contact me</span>
          <div className="w-full h-[1px] bg-gray-200 mt-2 mb-4" />
          <div className="flex-1 w-full gap-y-4 flex flex-col">
            <div className="bg-gray-200 w-full min-h-10 rounded-lg" />
            <div className="bg-gray-200 w-full min-h-10 flex-1 rounded-lg" />
          </div>
          <Button className="w-full bg-primary-500 text-white mt-4">
            Send Message
            <Send height={10} width={10} />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ContactMe;
