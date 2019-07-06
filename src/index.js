import React from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";
import QRCode2 from "qrcode-react";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>第一种：扫描如下二维码</h2>
      <QRCode
        value="http://www.baidu.com"
        renderAs="canvas"
        size={156}
        bgColor={"red"}
        fgColor={"blue"}
        level={"L"}
        includeMargin={true}
      />
      <h2>第二种：扫描如下二维码</h2>
      <QRCode2
        value="http://www.baidu.com"
        size={156}
        bgColor={"#f2c467"}
        fgColor={"blue"}
        logo={require("./assets/img/0.jpg")}
        logoWidth={20}
        logoHeight={20}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
