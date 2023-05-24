import { useState } from "react";
import usePostMessage from "../hooks/usePostMessage";
import { useAccount } from "wagmi";

const PostMessageForm = (): JSX.Element => {
  const [content, setContent] = useState("");

  const { postMessage, isError, error, isSuccess } = usePostMessage();
  const { address, isConnected } = useAccount();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (address === undefined) return;
    if (content === "") return;

    try {
      postMessage(content, address);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col self-center mb-10"
    >
      <label htmlFor="content" className="mb-2">
        Content
      </label>

      <textarea
        id="content"
        name="message"
        placeholder="Write your message here"
        className="border p-2 mb-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {isSuccess && <p className="mb-2">Message sent!</p>}

      {isError && <p className="mb-2">{error?.message}</p>}

      {isConnected ? (
        <input
          type="submit"
          value="Post"
          disabled={content === ""}
          className="text-lg self-center px-2 py-1"
        />
      ) : (
        <div className="text-center">Login to post messages</div>
      )}
    </form>
  );
};

export default PostMessageForm;
