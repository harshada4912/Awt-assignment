
async function asyncFunction() {
    
    return 'Async operation completed';
  }
  
  
  function convertToPromise() {
    return Promise.resolve(asyncFunction()); 
  }
  
 
  convertToPromise()
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error(error);
    });
  