'use client';
import { useState, type PropsWithChildren } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import React from 'react';

const StyledComponentsRegistry = ({ children }: PropsWithChildren) => {
    const [cache] = useState(() => createCache());

    useServerInsertedHTML(() => {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `</script>${extractStyle(cache)}<script>`
                }}
            />
        );
    });

    return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
