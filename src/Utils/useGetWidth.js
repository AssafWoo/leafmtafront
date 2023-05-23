/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const useGetWidth = (element) => {
    const [itemWidth, setItemWidth] = useState(-1);
    const [itemHeight, setItemHeight] = useState(-1);

    useEffect(() => {
        function updateSize(){
            setItemWidth((element.current)?.offsetWidth);
            setItemHeight((element.current)?.offsetHeight);
        }
         window.addEventListener('resize', updateSize);
         updateSize();
         return () => window.removeEventListener('resize', updateSize);
    },[]);
    return {itemWidth, itemHeight};
  };

  export default useGetWidth;