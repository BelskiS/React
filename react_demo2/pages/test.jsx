import React from 'react';
import Link from "next/link";

function TestPage() {
    
    return (
        <div>
            <Link href="/">
                <a>home</a>
            </Link>
            <h1>Тестовая страница</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam alias nam earum dicta ipsam quasi eum eveniet perspiciatis, possimus placeat. Inventore itaque quaerat saepe, eveniet veritatis suscipit tempore doloribus ullam.</p>
        </div>
    )
}

export default TestPage;