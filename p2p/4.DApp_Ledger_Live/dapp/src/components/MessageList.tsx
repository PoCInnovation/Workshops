import Message from "../types/Message";
import getHashPreview from "../utils/getHashPreview";

type MessageProps = {
  message: Message;
};

const MessageItem = ({ message }: MessageProps) => (
  <div className="flex border p-2 mb-4 justify-between items-center">
    <p className="text-lg mx-2">{message.content}</p>

    <div className="flex">
      <div className="mr-2">by {getHashPreview(message.author)}</div>
      <div>
        at{" "}
        {new Date(
          parseInt(message.timestamp.toString(), 10) * 1_000
        ).toLocaleDateString("en-US")}
      </div>
    </div>
  </div>
);

type MessageListProps = {
  messages: Message[];
};

const MessageList = ({ messages }: MessageListProps): JSX.Element => {
  if (messages.length === 0) {
    return <div>No messages</div>;
  }

  return (
    <div className="self-center">
      {messages.map((message) => (
        <MessageItem key={message.id.toNumber()} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
