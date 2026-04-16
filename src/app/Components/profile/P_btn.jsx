"use client";

import { useTimeline } from "@/app/context/TimelineProvider";
import { MessageCircle, Phone, Video } from "lucide-react";

const P_btn = ({ friend }) => {
  const { addTimeline } = useTimeline();

  return (
    <div className="flex gap-3">

      <button onClick={() => addTimeline("Call", friend.name)}>
        <Phone className="w-5 h-5" />
        Call
      </button>

      <button onClick={() => addTimeline("Text", friend.name)}>
        <MessageCircle className="w-5 h-5" />
        Text
      </button>

      <button onClick={() => addTimeline("Video", friend.name)}>
        <Video className="w-5 h-5" />
        Video
      </button>

    </div>
  );
};

export default P_btn;