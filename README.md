# ModuleConcatenationPluginNameCollision
This repo demonstrates bug in webpack 5.2.0

## Steps to reproduce

1. Install packages

    npm i

2. Start webpack server

    npm run serve

3. Open http://localhost:9000 and see exception in console

```
index.js:2 Uncaught ReferenceError: Cannot access 't' before initialization
    at e (index.js:2)
    at Function.mixin (index.js:2)
    at index.js:2
    at index.js:2
    at index.js:2
```

Problem is that this code without name collision
```
// ExtendedProduct/Mixin.js
import BaseMixin from '../BaseProduct/Mixin';

export default target => class Mixin extends target.mixin(BaseMixin) {
    get name() {
        return 'ExtendedMixin';
    }
}
```
turns to this code with name collision:
```
const e = e=>class t extends (e.mixin(t)) {
    get name() {
        return "ExtendedMixin"
    }
}
```

Problem can be avoided if I disable ModuleConcatenationPlugin:

```
module.exports = {
    optimization: {
        concatenateModules: false
    }
}
```
