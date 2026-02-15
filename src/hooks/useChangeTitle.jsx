import React from 'react';
function useChangeTitle(title = "Nutritionist - Home") {
    React.useEffect(() => {
        window.document.title = "Nutritionist - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;