"use client";

import { useState } from "react";

const messages = [
  {
    id: 1,
    time: "Today, 10:45",
    title: "Your order has been processed",
    preview: "You will receive a confirmation email shortly.",
    unread: true,
    category: "system",
  },
  {
    id: 2,
    time: "Today, 10:37",
    title: "รับเลย เงินคืน 15%",
    preview: "กดใช้โค้ด NY15 รับ cashback 15% เมื่อเดินทางในช่วง Happy hor เท่านั้น",
    unread: true,
    category: "marketing",
  },
  {
    id: 3,
    time: "Today, 11:00",
    title: "Scheduled maintenance notice",
    preview: "Our services will be temporarily unavailable from 2 PM to 3 PM.",
    unread: true,
    category: "system",
  },
  {
    id: 4,
    time: "Tomorrow, 14:22",
    title: "รับเลย ส่วนลด 20%",
    preview: "ใช้โค้ด SAVE20 รับส่วนลด 20% สำหรับการจองที่พัก",
    unread: false,
    category: "marketing",
  },
  {
    id: 5,
    time: "Saturday, 09:15",
    title: "พิเศษ! เงินคืน 10%",
    preview: "ใช้โค้ด WEEKEND10 รับเงินคืน 10% เมื่อช้อปปิ้งในวันเสาร์",
    unread: true,
    category: "marketing",
  },
  {
    id: 6,
    time: "Today, 10:52",
    title: "Our support team is here to help",
    preview: "Feel free to reach out with any questions.",
    unread: true,
    category: "system",
  },
  {
    id: 7,
    time: "Next Monday, 16:50",
    title: "โปรเด็ด! ลด 25%",
    preview: "ใช้โค้ด FLASH25 ลด 25% สำหรับสินค้าทุกชิ้นในร้าน",
    unread: true,
    category: "marketing",
  },
  {
    id: 8,
    time: "Today, 10:37",
    title: "We apologize for the delay service",
    preview: "We apologize for the delay due to a high volume of customers.",
    unread: false,
    category: "system",
  },
];

type Tab = "message" | "support";
type Filter = "all" | "marketing" | "system";

export default function InboxPage() {
  const [activeTab, setActiveTab] = useState<Tab>("message");
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? messages
      : messages.filter((m) => m.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* iOS Status Bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1 shrink-0">
        <span className="text-[17px] font-semibold">9:41</span>
        <div className="w-[80px]" />
        <div className="flex items-center gap-[5px]">
          {/* Signal bars */}
          <svg width="17" height="12" viewBox="0 0 17 12" fill="black">
            <rect x="0" y="7" width="3" height="5" rx="1" />
            <rect x="4.5" y="4.5" width="3" height="7.5" rx="1" />
            <rect x="9" y="2" width="3" height="10" rx="1" />
            <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.3" />
          </svg>
          {/* Wifi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="black">
            <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
            <path d="M3.5 6.3A6.5 6.5 0 0 1 12.5 6.3" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M1 3.7A10 10 0 0 1 15 3.7" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          {/* Battery */}
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="black" strokeOpacity="0.35" />
            <rect x="2" y="2" width="16" height="8" rx="2" fill="black" />
            <path d="M23 4v4a2 2 0 0 0 0-4z" fill="black" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-center relative h-14 border-b border-black/[0.08] shadow-[0px_1px_0px_rgba(0,0,0,0.08)] shrink-0">
        <button className="absolute left-4 flex items-center justify-center w-6 h-6">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none">
            <path d="M9.5 1L1.5 9L9.5 17" stroke="#0D57E2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="text-[20px] font-semibold text-[#4F4F4F] leading-[30px]">
          Inbox
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex shrink-0 border-b border-[#E7EEFC]">
        <button
          onClick={() => setActiveTab("message")}
          className={`flex-1 h-[46px] flex items-center justify-center text-[16px] font-semibold tracking-[0.25px] transition-colors ${
            activeTab === "message"
              ? "text-[#0D57E2] border-b-2 border-[#0D57E2]"
              : "text-[#4F4F4F]"
          }`}
        >
          Message
        </button>
        <button
          onClick={() => setActiveTab("support")}
          className={`flex-1 h-[46px] flex items-center justify-center text-[16px] font-semibold tracking-[0.25px] transition-colors ${
            activeTab === "support"
              ? "text-[#0D57E2] border-b-2 border-[#0D57E2]"
              : "text-[#4F4F4F]"
          }`}
        >
          Support
        </button>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 px-4 py-3 border-b border-[#E7EEFC] shrink-0">
        {(["all", "marketing", "system"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1 rounded-full text-[14px] font-semibold tracking-[0.25px] border transition-colors capitalize ${
              activeFilter === f
                ? "bg-[#E7EEFC] border-[#0D57E2] text-[#0D57E2]"
                : "border-[#909090] text-[#909090]"
            }`}
          >
            {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto">
        {filtered.map((msg) => (
          <div
            key={msg.id}
            className="relative flex flex-col gap-1 px-4 py-4 border-b border-[#EEEEEE] active:bg-gray-50 cursor-pointer"
          >
            <span className="text-[12px] font-medium text-[#909090] tracking-[0.25px] truncate">
              {msg.time}
            </span>
            <span className="text-[16px] font-semibold text-[#4F4F4F] tracking-[0.25px] leading-6">
              {msg.title}
            </span>
            <span className="text-[14px] font-medium text-[#909090] tracking-[0.25px] leading-[22px] truncate">
              {msg.preview}
            </span>
            {msg.unread && (
              <span className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#0D57E2]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
