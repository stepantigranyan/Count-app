import type { JSX } from 'react';

export type Item = {
    id: number;
    count: number;
};

export type TopButtonInner = {
    icon: JSX.Element;
    text: string;
};
