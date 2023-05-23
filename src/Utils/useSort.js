import { useEffect, useState } from "react";


const useSort = () => {
    const [currentSort, setCurrentSort] = useState('up');
    useEffect(() => {
        let nextSort;
        if (currentSort === 'down') nextSort = 'up';
        if (currentSort === 'up') nextSort = 'down';
        setCurrentSort(nextSort);
    }, [])

    return currentSort;
}

export default useSort;