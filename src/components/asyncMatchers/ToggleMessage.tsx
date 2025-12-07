import { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ToggleMessage = () => setIsVisible((prev) => !prev);

  return (
    <div>
      <button onClick={ToggleMessage}>Toggle Message</button>
      {isVisible && <p>This message is visible!</p>}
    </div>
  );
};

export default ToggleMessage;
