import React from 'react'
import Head from "next/head"
export default function SeoHead({title, keywords, content}) {
    return (
        <Head>
            <title>
                {title}
            </title>
            <meta name={keywords} content={content}/>
        </Head>
    )
}
