import React, { useState } from "react";

const MainComponent:React.FC = () => {
    
    const [count, setCount] = useState(0);
    
    return(
        <div className="mainComponent">
            <button 
                onClick={() => setCount(count+1)}>
                    {count}
                </button>
        </div>
    )
}

export default MainComponent