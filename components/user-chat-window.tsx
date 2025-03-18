"use client";

import React, { useState, useRef, useEffect } from "react";
import { User, Message } from "@/data/messages/user-messages";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserChatWindowProps {
  activeUser?: User;
}

const UserChatWindow: React.FC<UserChatWindowProps> = ({ activeUser }) => {
  const [newMessage, setNewMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Message[]>(
    activeUser?.messages || []
  );

  useEffect(() => {
    if (activeUser) {
      setMessages(activeUser.messages);
    }
  }, [activeUser]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeUser) return;

    const message: Message = {
      id: crypto.randomUUID(),
      senderId: "me",
      receiverId: activeUser.id,
      content: newMessage,
      timestamp: new Date(),
      type: "text",
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeUser) {
      const message: Message = {
        id: crypto.randomUUID(),
        senderId: "me",
        receiverId: activeUser.id,
        content: `File: ${file.name}`,
        timestamp: new Date(),
        type: "file",
        fileName: file.name,
      };

      setMessages([...messages, message]);
    }
  };

  if (!activeUser) {
    return (
      <div className="flex items-center justify-center h-full text-zinc-500">
        Select a conversation to start messaging
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="p-4 border-b border-white">
        <h2 className="text-sm font-semibold text-white">{activeUser.name}</h2>
      </div>

      <div className="flex-1 w-full overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => {
          const isFirstOfDay =
            index === 0 ||
            !isSameDay(messages[index - 1].timestamp, message.timestamp);

          return (
            <React.Fragment key={message.id}>
              {isFirstOfDay && (
                <div className="flex justify-center">
                  <span className="text-xs text-muted-foreground">
                    {format(message.timestamp, "EEEE, d MMM yyyy")}
                  </span>
                </div>
              )}
              <div
                className={cn(
                  "flex",
                  message.senderId === "me" ? "justify-end" : "justify-start"
                )}
              >
                <div className="flex flex-col max-w-[500px] items-end">
                  <div
                    // className="flex flex-row items-center gap-2"
                    className={cn(
                      "flex gap-2",
                      message.senderId === "me"
                        ? "flex-row-reverse"
                        : "flex-row"
                    )}
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={activeUser.avatar}
                        alt={activeUser.name}
                      />
                      <AvatarFallback className="text-sm">
                        {activeUser.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={cn(
                        "rounded-lg p-3",
                        message.senderId === "me"
                          ? "bg-custom-gold text-black"
                          : "bg-zinc-800 text-white"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                  <div className="text-xs mt-1 opacity-70 text-white">
                    {format(message.timestamp, "HH:mm")}&nbsp;PM
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="border-t border-b border-zinc-800">
        <div className="bg-zinc-900 flex items-center gap-2 w-full">
          <div className="w-[20%] flex border-r border-r-white">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileSelect}
            />
            <Button
              variant="default"
              size="icon"
              className="w-auto h-full p-2 text-custom-gold rounded-none"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip className="h-4 w-4" />
              <span className="text-muted-foreground">Attach Files +</span>
            </Button>
          </div>
          <div className="w-[70%] flex border-r border-r-white">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type message here"
              className="bg-zinc-900 rounded-none border-none outline-none text-white"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
          </div>
          <div className="w-[10%] flex border-r border-r-white">
            <Button
              className="w-full bg-transparent text-black"
              onClick={handleSendMessage}
            >
              <Send className="text-custom-gold h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export default UserChatWindow;
