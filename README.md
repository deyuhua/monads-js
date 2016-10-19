# Mondas与尾递归

## Mondas

Monads是非常有用的设计模式,主要描述一系列的计算步骤,被广泛应用在函数式程序设计语言中来管理副作用,同时也可以用在多范式编程语言中来控制复杂性等;

### Monads需要遵循三个monadic laws:

1. bind(unit(x), f) = f(x)
2. bind(m, unit) = m
3. bind(bind(m, f), g) = bind(m, x ⇒ bind(f(x), g))

### Monads是什么?

Monads在js中就是普通的对象,这个对象通过closure保存value在环境中,除此之外还需要定义bind方法来对value进行操作;

```javascript
function unit(value) {

    const monads = Object.create(null);

    monads.bind = function(func, ...rest) {

        return func(value, rest);
    };

    monads.lift = function(func, ...rest) {

        const result = this.bind(func, ...rest);

        return result && result.is_monads ?
            result :
            unit(result);
    };

    return monads;
}
```

## 尾递归优化

[维基百科关于尾递归的解释](https://en.wikipedia.org/wiki/Tail_call)

在ES6规范中要求js引擎都必须实现尾递归优化,但是大部分浏览器厂商都还没完全实现此功能,但是可以采用trampolining方法来polyfill;

## 下载与运行测试

在下载和运行测试前，系统环境需要安装git, node和npm, gulp;

### 安装gulp

```
sudo npm install gulp -g
```

### 如何下载

```
git clone https://github.com/deyuhua/fp.git ./fp &&　cd fp
```

### 运行测试

```
npm install

sudo npm install gulp mocha -g

gulp
```

## 参考链接

1. [Douglas Crockford关于Monads的演讲](https://www.youtube.com/watch?v=dkZFtimgAcM)
2. [javascript中的Monads](https://curiosity-driven.org/monads-in-javascript)
