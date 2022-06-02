import React from "react";

const Left = (
  <div className="flex items-center gap-x-2">
    <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2016%2F01%2FStunning-Coastal-Wallpaper.jpg&f=1&nofb=1"
      className="aspect-square w-[35px] object-cover rounded-full"
    />
    <p className="max-w-sm px-4 py-2 break-words rounded-md bg-chatBg">
      Hello worlds
    </p>
    <div className="text-sm text-lightGray">8:12AM</div>
  </div>
);
const Right = (
  <div className="flex flex-row-reverse items-center gap-x-2">
    <img
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpapers13.com%2Fwp-content%2Fuploads%2F2016%2F01%2FStunning-Coastal-Wallpaper.jpg&f=1&nofb=1"
      className="aspect-square w-[35px] object-cover rounded-full"
    />
    <p className="max-w-sm px-4 py-2 break-words rounded-md bg-chatBg">
      Hello worlds
    </p>
    <div className="text-sm text-lightGray">8:12AM</div>
  </div>
);

const ChatMessage = () => {
  return Right;
};

export default ChatMessage;
