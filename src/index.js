import "./index.css";

import * as rtl from "@testing-library/react";

/**
 * An asynchronous function that just runs @testing-library/react#wait()
 * and checks to see if that completes.
 */
async function runIt() {
  const timeoutHandle = setTimeout(() => {
    console.error("Five seconds on, and wait still hasn't completed");
  }, 5000);

  await rtl.wait(() => {
    console.log("This is the function we are waiting for, now complete");
  });

  clearTimeout(timeoutHandle);
  console.log("The wait function returned; it's all working fine!");
}

runIt();
