"use client";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useTimeline } from "../context/TimelineProvider";

const Page = () => {
  const { timeline } = useTimeline();

  const counts = { call: 0, video: 0, text: 0 };

  (timeline || []).forEach((item) => {
    const type = item.type.toLowerCase();
    if (type === "call") counts.call++;
    else if (type === "video") counts.video++;
    else if (type === "text") counts.text++;
  });

  const data = [
    { name: "Text", value: counts.text },
    { name: "Call", value: counts.call },
    { name: "Video", value: counts.video },
  ];

  const COLORS = ["#6366F1", "#22C55E", "#F97316"];

  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-7xl">
        
        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Timeline Activity
        </h2>

        {/* Chart */}
        <div className="max-w-full h-70">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius="60%"
                outerRadius="85%"
                paddingAngle={5}
                cornerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              {/* Center text */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-gray-700 text-lg font-semibold"
              >
                {total}
                <tspan x="50%" dy="20" className="text-sm font-normal">
                  Total
                </tspan>
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-around mt-4 text-sm text-gray-600">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              {item.name} ({item.value})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;