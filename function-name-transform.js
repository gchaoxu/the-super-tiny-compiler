const core = require("@babel/core");

const sourceCode = `const hello = () => {};`;

const myPlugin = {
  visitor: {
    // Identifier: 代表标识符，如变量名、函数名等。
    Identifier: (path) => {
      if (path.node.name === "hello") {
        path.node.name = "world";
      }
    },
  },
};

const targetSource = core.transform(sourceCode, {
  plugins: [myPlugin],
}).code;

console.log(targetSource);
