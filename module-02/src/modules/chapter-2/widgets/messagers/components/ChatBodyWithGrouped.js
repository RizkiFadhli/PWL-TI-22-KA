import moment from "moment";
import React, { useMemo } from "react";

export default function ChatBodyWithGrouped({ data, profile }) {
  const itsme = profile.name;

  const styleChatItems = {
    chatBubleItems: {
      display: "flex",
      flexDirection: "column",
    },
    chatBubleSender: {
      textAlign: "right",
      backgroundColor: "#a198a7",
      alignSelf: "flex-end",
    },
    chatBubleReceiver: {
      backgroundColor: "#a83aef",
      alignSelf: "flex-start",
    },
    dateGroup: {
      textAlign: "center",
      margin: "1rem 0",
      color: "#666",
    },
  };

  const groupedMessages = useMemo(() => {
    const groups = {};
    data.forEach((message) => {
      const date = message.date_fmt;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });
    return groups;
  }, [data]);

  return (
    <div className="chat-items">
      {Object.keys(groupedMessages).map((date) => (
        <div key={date}>
          <div style={styleChatItems.dateGroup}>
            <span className="badge bg-light text-dark">
              {moment(date).format("DD MMMM YYYY")}
            </span>
          </div>
          {groupedMessages[date].map((v, index) => (
            <div
              className="chat-item"
              style={styleChatItems.chatBubleItems}
              key={index}
            >
              <div
                className="chat text-white rounded my-2 p-2"
                style={
                  v.from === itsme
                    ? styleChatItems.chatBubleSender
                    : styleChatItems.chatBubleReceiver
                }
              >
                <span className="me-3">{v.message}</span>
                <span className="chat-date" style={{ fontSize: "11px" }}>
                  {moment(v.date).format("HH:mm")}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
