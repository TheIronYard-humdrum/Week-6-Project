#### Week 6 Project
### CageSmash

**[Surge](http://tiy-humdrum-cagesmashrefactor.surge.sh)**

**_javaScript Tools_**
* Used a 'repeater' to show gophers one after the other.
    
```javascript
var repeater = setInterval(function() {
  if(callCount < desiredCalls) {
    do desired things
    callCount += 1;
  } else {
    clearInterval(repeater);
  }
}, times between repeats);