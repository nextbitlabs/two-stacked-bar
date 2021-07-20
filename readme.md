# &lt;two-stacked-bar&gt;

![Latest Release](https://badgen.net/github/release/nextbitlabs/two-stacked-bar) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/two-stacked-bar)

Web component implementation of a two-stacked-bar.

<img width="100px" src="image.png">

## Usage

Import `two-stacked-bar` and set CSS custom properties:

```html
<head>
  <script type="module">
    import "https://cdn.skypack.dev/@nextbitlabs/two-stacked-bar";
  </script>
  <style>
    /*
      CSS custom properties penetrate the Shadow DOM.
      They are useful to provide custom styling.
    */
    two-stacked-bar {
      --color-top: #999; /* default #999 */
      --color-bottom: #333; /* default #333 */
      --background: #eee; /* default transparent */
    }
  </style>
</head>
```

Use the custom element:

```html
<body>
  <two-stacked-bar
    gap="2"
    bar-width="2"
    width="100"
    height="100"
    margin="20"
  ></two-stacked-bar>
</body>
```

Set the data to plot:

```html
<script>
  const element = document.querySelector("two-stacked-bar");
  element.data = [[1, [12, 4]], [2, [3, 10]], [3, [5, 25]]];
</script>
```

Please have a look at the [demo](https://xbbzw.csb.app/).

## License

MIT
