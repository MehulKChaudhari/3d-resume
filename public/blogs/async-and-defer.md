Hi Folks, In this blog I am going to explain what are async and defer. In this blog, you will learn how async and defer works and then you can choose which to use based on your requirements. So let us get started.

While loading javascript on the HTML page, we need to be careful because when and where you have added the script might affect the loading performance of the webpage. Which we don't want to harm.

#### We use script tag in HTML this way:

```xml
 <script src="index.js"></script>
```

Whenever the parser finds this tag while parsing HTML. A request is made to fetch the script and then the script is executed. Once this process is done then the parser again starts to parse the remaining HTML. As you would have imagined that this whole process might take affect the loading speed of the webpage. If the user network is not stable, is a bit slow or the user is using a mobile device and the script might take a little bit longer to load and execute, and in that time user can see a blank screen.

### The position of script tag matters

When we first learn HTML, We are told that a script tag should be placed in the Head section.

```plaintext
<html>
  <head>
    <title>Title</title>
    <script src="script.js"></script>
  </head>
  <body>
   <h1>Hello World!</h1>
  </body>
</html>
```

I told you earlier that when the HTML parser finds the script tag It goes to fetch and execute the script. After execution, it continues to parse the body.

This is not good because this process introduces a lot of delays. And a common solution to overcome this to put the `<script>` tag at the bottom of the HTML just before the closing `</body>` tag.

Doing this way increases user experience as all the pages are parsed first then the script is loaded and executed which is a huge improvement over the `<head>` tag.

The best way you can do this is by using two relatively recent features of HTML: `Async` and `Defer`. Which supports old and small browsers as well.

## Async and Defer:

Both are boolean attributes, usage of both `Async` and `Defer` are the same.

```plaintext
// How to use async
<script async src="index.js"></script>

// How to use defer
<script defer src="index.js"></script>
```

if you specify both in one HTML, `async` takes precedence on modern browsers, while old browsers which support `defer` but not the `async` will fall back to `defer`.

## Comparison on the basis of performance.

#### Not using `async` and `defer`, in the `<head>` tag.

Here is how the script is loaded, without async and defer, put the script tag in the head section of the page.

![Screenshot from 2021-07-11 18-34-33 (2).png](/blogs/images/async-defer-head-no-attr.png)

In this way, parsing is stopped till the script loads and executes. once this process is done parsing continues.

#### Not using `async` and `defer`, in the `<body>` tag.

here is how the page is loaded when the script is at the bottom just before the `<body>` tag closes.

![Screenshot from 2021-07-11 18-43-51 (1).png](/blogs/images/async-defer-body-no-attr.png)

HTML is parsed in one go, then the script is loaded and executed at the end. In this way, the user can see the page before even the script is download. Users can see pages faster than the case discussed before.

#### Script tag with `Async` in `<head>` section.

here's how the page is loaded with an `async` script tag in the `head`.

![Screenshot from 2021-07-11 18-51-31 (1).png](/blogs/images/async-defer-head-async.png)

The script is fetched asynchronously, and when it's ready the HTML parsing is stopped to execute the script, then it again continues to parse HTML.

#### Script tag with `Defer` in `<head>` section.

here's how the page is loaded with a `defer` script tag in the `head`.

![Screenshot from 2021-07-11 18-58-48 (1).png](/blogs/images/async-defer-head-defer.png)

The script is asynchronously fetched but unlike async, it's executed after parsing of HTML is done.

Parsing finishes just like when we put the script at the end of the `<body>` tag, but overall the script execution finishes well before, because the script has been downloaded in parallel with the HTML parsing.

`async` blocks the parsing of the page while `defer` does not.

#### Execution order:

Another case pro defer: script tags marked with `async` are executed in casual order, when they are found while parsing. But Script tags marked with `defer` are executed (after parsing completes) in the order which they are defined in the markup.

#### domInteractive:

Script tags marked with `defer` are executed after the domInteractive event, which happens after the HTML is loaded, parsed and the DOM is built.

CSS and images at this point are not parsed and loaded yet.Once the process is done, the browser emits the domComplete event, and then the onLoad.

domInteractive is important because its timing is recognized as a measure of perceived loading speed.

## The best way

The best thing to speed up the loading of page when using script is to put them in the `head` section with `defer` attribute in `<script>` tag.

```plaintext
<script defer src="index.js"></script>
```

This is the case that triggers the domInteractive event faster.

Looking at the pros of `defer`, defer seems to be a better choice over `async` in different types of cases.

Unless we are fine with delaying the first render of the page, make sure that when the page is parsed the JavaScript you want is already executed.

