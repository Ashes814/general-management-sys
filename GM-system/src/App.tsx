import { useState } from "react";

import { Button } from "antd";
import { VerticalRightOutlined } from "@ant-design/icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button type="primary">button</Button>

      <VerticalRightOutlined style={{ fontSize: "40px", color: "red" }} />
    </div>
  );
}

export default App;
