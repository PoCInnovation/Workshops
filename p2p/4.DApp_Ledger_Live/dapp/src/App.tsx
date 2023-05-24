import Header from "./components/Header";
import MessageList from "./components/MessageList";
import PostMessageForm from "./components/PostMessageForm";
import useFetchMessages from "./hooks/useFetchMessages";
import TMessage from "./types/Message";

const App = (): JSX.Element => {
  const { data: messages, isLoading } = useFetchMessages();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col">
      <Header />

      <PostMessageForm />

      <MessageList messages={messages as TMessage[]} />
    </div>
  );
};

export default App;
