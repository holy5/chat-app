import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import ChatMessage from "./ChatMessage";

const MainChat = () => {
  return (
    <div className="text-white absolute left-[200px] h-[calc(100%-50px)] top-[50px] w-[900px] p-5 pr-0 border-r-2">
      <div className="flex flex-col justify-between h-full pr-1">
        <div className="flex flex-col overflow-auto gap-y-3 max-h-[76vh] pr-2">
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
        </div>
        <TextareaAutosize
          maxRows={5}
          className="px-3 py-2 text-black rounded-md min-h-[20px] resize-none"
          placeholder="Type something"
        />
      </div>
    </div>
  );
};

export default MainChat;
