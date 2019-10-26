import React, { useState, useEffect } from 'react';
import './confirm.css';

function useIsMounted(){

  // return (
  //   <div className="confirm">
  //     <div  ref={(node) => ref = node}>
  //     </div>
  //   </div>
  // )
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
    }
    return () => setIsMount(false);
  }, []);
  return isMount
}

function confirm(props) {
  const isMounted = useIsMounted();
  return <div>isMounted: {isMounted ? "true" : "false"}</div>;
}
export default confirm


