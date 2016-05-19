/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var clipeace = __webpack_require__(1);
	var target = document.getElementById('target');
	var copyBtn = document.getElementById('copyBtn');
	
	copyBtn.addEventListener('click', function () {
	  clipeace(target).then(function (res) {
	    console.log(res);
	  }).catch(function (error) {
	    console.log(error);
	  });
	}, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var clipeace = function clipeace(elem) {
	  return new Promise(function (resolve, reject) {
	
	    var text = undefined;
	    var copy = false;
	
	    if (['INPUT', 'TEXTAREA'].includes(elem.nodeName)) {
	      // フォームにフォーカスを当てて、フォームの中身を選択
	
	      elem.focus();
	      elem.setSelectionRange(0, elem.value.length);
	      text = elem.value;
	
	      // 選択部分をクリップボードにコピーする
	      copy = document.execCommand('copy');
	
	      // フォーカス解除
	      elem.blur();
	    } else {
	      // Elementの中身を選択
	
	      var selection = window.getSelection();
	      var range = document.createRange();
	
	      range.selectNodeContents(elem);
	      selection.removeAllRanges();
	      selection.addRange(range);
	      text = selection.toString();
	
	      // 選択部分をクリップボードにコピーする
	      copy = document.execCommand('copy');
	
	      // 選択解除
	      selection.removeAllRanges();
	    }
	
	    // response 作成して返却
	    var res = {
	      text: text,
	      copy: copy
	    };
	
	    if (copy) resolve(res);else reject(res);
	  });
	};
	
	module.exports = clipeace;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjU3NGNiODk0ZTgwMzIzNGM0OTQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaXBlYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0EsS0FBTSxXQUFXLG9CQUFRLENBQVIsQ0FBakI7QUFDQSxLQUFNLFNBQVMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxLQUFNLFVBQVUsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQWhCOztBQUVBLFNBQVEsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUMxQyxZQUFTLE1BQVQsRUFDRyxJQURILENBQ1EsVUFBQyxHQUFELEVBQVM7QUFDYixhQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0QsSUFISCxFQUdLLEtBSEwsQ0FHVyxVQUFDLEtBQUQsRUFBVztBQUNsQixhQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsSUFMSDtBQU1ELEVBUEQsRUFPRyxLQVBILEU7Ozs7OztBQ0pBOztBQUVBLEtBQUksV0FBVyxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDckMsVUFBTyxJQUFJLE9BQUosQ0FBWSxVQUFVLE9BQVYsRUFBbUIsTUFBbkIsRUFBMkI7O0FBRTVDLFNBQUksT0FBTyxTQUFYO0FBQ0EsU0FBSSxPQUFPLEtBQVg7O0FBRUEsU0FBSSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLFFBQXRCLENBQStCLEtBQUssUUFBcEMsQ0FBSixFQUFtRDs7O0FBR2pELFlBQUssS0FBTDtBQUNBLFlBQUssaUJBQUwsQ0FBdUIsQ0FBdkIsRUFBMEIsS0FBSyxLQUFMLENBQVcsTUFBckM7QUFDQSxjQUFPLEtBQUssS0FBWjs7O0FBR0EsY0FBTyxTQUFTLFdBQVQsQ0FBcUIsTUFBckIsQ0FBUDs7O0FBR0EsWUFBSyxJQUFMO0FBQ0QsTUFaRCxNQVlPOzs7QUFHTCxXQUFJLFlBQVksT0FBTyxZQUFQLEVBQWhCO0FBQ0EsV0FBSSxRQUFRLFNBQVMsV0FBVCxFQUFaOztBQUVBLGFBQU0sa0JBQU4sQ0FBeUIsSUFBekI7QUFDQSxpQkFBVSxlQUFWO0FBQ0EsaUJBQVUsUUFBVixDQUFtQixLQUFuQjtBQUNBLGNBQU8sVUFBVSxRQUFWLEVBQVA7OztBQUdBLGNBQU8sU0FBUyxXQUFULENBQXFCLE1BQXJCLENBQVA7OztBQUdBLGlCQUFVLGVBQVY7QUFDRDs7O0FBR0QsU0FBSSxNQUFNO0FBQ1IsYUFBTSxJQURFO0FBRVIsYUFBTTtBQUZFLE1BQVY7O0FBS0EsU0FBSSxJQUFKLEVBQVUsUUFBUSxHQUFSLEVBQVYsS0FBNEIsT0FBTyxHQUFQO0FBQzdCLElBMUNNLENBQVA7QUEyQ0QsRUE1Q0Q7O0FBOENBLFFBQU8sT0FBUCxHQUFpQixRQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjU3NGNiODk0ZTgwMzIzNGM0OTRcbiAqKi8iLCJjb25zdCBjbGlwZWFjZSA9IHJlcXVpcmUoJy4uL2xpYi9jbGlwZWFjZScpO1xuY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpO1xuY29uc3QgY29weUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5QnRuJyk7XG5cbmNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICBjbGlwZWFjZSh0YXJnZXQpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbn0sIGZhbHNlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZS9hcHAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjbGlwZWFjZSA9IGZ1bmN0aW9uIGNsaXBlYWNlKGVsZW0pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgIHZhciB0ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHZhciBjb3B5ID0gZmFsc2U7XG5cbiAgICBpZiAoWydJTlBVVCcsICdURVhUQVJFQSddLmluY2x1ZGVzKGVsZW0ubm9kZU5hbWUpKSB7XG4gICAgICAvLyDjg5Xjgqnjg7zjg6Djgavjg5Xjgqnjg7zjgqvjgrnjgpLlvZPjgabjgabjgIHjg5Xjgqnjg7zjg6Djga7kuK3ouqvjgpLpgbjmip5cblxuICAgICAgZWxlbS5mb2N1cygpO1xuICAgICAgZWxlbS5zZXRTZWxlY3Rpb25SYW5nZSgwLCBlbGVtLnZhbHVlLmxlbmd0aCk7XG4gICAgICB0ZXh0ID0gZWxlbS52YWx1ZTtcblxuICAgICAgLy8g6YG45oqe6YOo5YiG44KS44Kv44Oq44OD44OX44Oc44O844OJ44Gr44Kz44OU44O844GZ44KLXG4gICAgICBjb3B5ID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblxuICAgICAgLy8g44OV44Kp44O844Kr44K56Kej6ZmkXG4gICAgICBlbGVtLmJsdXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRWxlbWVudOOBruS4rei6q+OCkumBuOaKnlxuXG4gICAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsZW0pO1xuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgIHRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcblxuICAgICAgLy8g6YG45oqe6YOo5YiG44KS44Kv44Oq44OD44OX44Oc44O844OJ44Gr44Kz44OU44O844GZ44KLXG4gICAgICBjb3B5ID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblxuICAgICAgLy8g6YG45oqe6Kej6ZmkXG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gcmVzcG9uc2Ug5L2c5oiQ44GX44Gm6L+U5Y20XG4gICAgdmFyIHJlcyA9IHtcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICBjb3B5OiBjb3B5XG4gICAgfTtcblxuICAgIGlmIChjb3B5KSByZXNvbHZlKHJlcyk7ZWxzZSByZWplY3QocmVzKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaXBlYWNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2NsaXBlYWNlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==