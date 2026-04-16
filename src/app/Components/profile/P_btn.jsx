"use client";

import { useTimeline } from "@/app/context/TimelineProvider";
import { MessageCircle, Phone, Video } from "lucide-react";

const P_btn = ({ friend }) => {
  const { addTimeline } = useTimeline();

  return (
    <div className="flex gap-3 items-center justify-evenly">

      <button className="flex-1 flex flex-col items-center justify-center p-10 shadow-lg cursor-pointer space-y-2 hover:bg-green-600 hover:text-white transition-all duration-300" onClick={() => addTimeline("Call", friend.name)}>
        <Phone size={30} />
        <p className="text-xl">Call</p>
      </button>

      <button className="flex-1 flex flex-col items-center justify-center p-10 shadow-lg cursor-pointer space-y-2 hover:bg-green-600 hover:text-white transition-all duration-300" onClick={() => addTimeline("Text", friend.name)}>
        <MessageCircle size={30} />
        <p className="text-xl">Text</p>
      </button>

      <button className="flex-1 flex flex-col items-center justify-center p-10 shadow-lg cursor-pointer space-y-2 hover:bg-green-600 hover:text-white transition-all duration-300" onClick={() => addTimeline("Video", friend.name)}>
        <Video size={30} />
       <p className="text-xl">Video</p>
      </button>

    </div>
  );
};

export default P_btn;