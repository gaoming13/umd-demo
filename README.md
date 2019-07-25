# umd-demo
Example of convert AMD or CommonJS to UMD

## 说明

### 文件夹

- `amd` Defines a module that works with AMD
- `commonjs` Defines a module that works in Node
- `global` Defines a module that works with browser globals
- `umd` Defines a module that works with all of above

### 模块依赖关系

```
main 依赖 a,b
a 依赖 b,c
b 依赖 c
```
