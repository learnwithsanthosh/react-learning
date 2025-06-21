import { useState } from "react";
import BookList from "./components/BooksList";
import MessageBox from "./components/MessageBox";

function App() {
  const [messageDisp, setmessageDisp] = useState(true);
  return (
    <div>
      {messageDisp && (
        <MessageBox
          title={"✅ Success"}
          message={"Your task completed."}
          onClose={() => setmessageDisp(false)}
        ></MessageBox>
      )}
      <BookList />
    </div>
  );
}

export default App;
