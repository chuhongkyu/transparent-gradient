import React, { useEffect, useRef } from 'react';
import { TGradient } from './transparentGradient'; 

export function Tgradient({dir, children, wrapperClass, className}){
    const gradientRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (gradientRef.current) {
            new TGradient(gradientRef.current, dir || "right");
        }
    }, [dir]);

    return(
        <div className={wrapperClass} style={{ position: "relative;"}}>
            <div className={className} ref={gradientRef}>{children}</div>
        </div>
    )
}
