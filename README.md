# qrcode-react-demo

react项目，生成二维码demo

### 初始化，安装依赖
```  
  npm install 
```

### 实现方式一：
```javascript
    <QRCode
        value="http://www.baidu.com"
        renderAs="canvas"
        size={156}
        bgColor={"red"}
        fgColor={"blue"}
        level={"L"}
        includeMargin={true}
      />
```
```
  注意： 此种方式不能在二维码中内嵌logo
```

### 实现方式二：
```javascript
      <QRCode2
        value="http://www.baidu.com"
        size={156}
        bgColor={"#f2c467"}
        fgColor={"blue"}
        logo={require("./assets/img/0.jpg")}
        logoWidth={20}
        logoHeight={20}
      />
```
```
  注意： 此种方式可以在二维码中内嵌logo
```

### 效果图
![效果图](https://github.com/Lucky-LYZ/qrcode-react-demo/blob/master/src/assets/img/demo.png "效果图")
