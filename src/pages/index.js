import React, { useState } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
    const router = useRouter();

    const handleShow = () => {
        router.push(`/anotherPage`);
    }
    return (
        <>
            <div>
                Body
           </div>
            <div>
                <button onClick={handleShow}>Click me</button>
            </div>
        </>
    )
}

export default IndexPage