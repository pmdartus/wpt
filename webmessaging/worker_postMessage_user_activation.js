"use strict";

onmessage = function(e) {
  if ((e.data == 'with' && e.userActivation !== null) ||
      (e.data == 'without' && e.userActivation === null))
    postMessage(e.data, {includeUserActivation: true});
}
