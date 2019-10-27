import React, { useState, useEffect } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
import './confirm.css';


// function confirmComp(props) {
//   return <div>confirm component</div>
// }
function Comp(){
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
      // resolve(true)
    }
    return () => setIsMount(false);
  }, []);
  return (<div className="confirm"></div>)
}
function confirm(mountedNode=document.body.root) {
  // const isMounted = confirmComp(props)

  return new Promise((resolve, reject) => {
    resolve(true)
    // return ReactDOM.render(<Comp />, mountedNode)
  });
}
export default confirm


