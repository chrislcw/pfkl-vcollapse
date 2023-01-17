# A simple jQuery collapse plugin

## Usage

### JS codes

```
import "pfkl-vcollapse/vcollapse/vcollapse.min.js";

$('your-element').vCollapse({
  'any': false,
  'onLoad': 0,
  'speed': 300,
  'easing': 'ease-in-out',
})
```

### HTML codes

```
<div class="my-vcollapse">
    <div class="vcollapse-toggle" data-target="#cc1">Collapse 1</div>
    <div class="vcollapse-content" id="cc1">
      <div class="bg-red-100">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
	<div class="vcollapse-toggle" data-target="#cc2">Collapse 2</div>
    <div class="vcollapse-content" id="cc2">
      <div class="bg-red-100">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
	<div class="vcollapse-toggle" data-target="#cc3">Collapse 3</div>
    <div class="vcollapse-content" id="cc3">
      <div class="bg-red-100">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
</div>
```

### Settings
####any
Allowed only one/any content to expand/collapse
```
'any': true|false
```
Default is **true**
#### onLoad
Content to expand on load
```
'onLoad': integer|[interger...]|'all'|'none'
```
Default is **0**
When onLoad is set to `all` or when onLoad is array and length is greater than 1, `any` will be forced to `true`
#### speed
Collapse/expand transition speed
```
'speed': integer
```
Default is **300** (0.3s)
#### easing
Collapse/expand transition speed
```
'easing': string
```
Default is **ease-in-out**

### Important
Do not apply any padding/margin to `.vcollapse-content` element.