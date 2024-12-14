onmessage = (e) => {
  try {
    const result = eval(e.data);
    postMessage({ result });
  } catch (error) {
    postMessage({ result: `Error: ${error.message}` });
    console.log(error);
  }
};
