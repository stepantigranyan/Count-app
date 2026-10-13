import type { FC } from 'react';
import type { TopButtonInner } from "../../types";

import { transformToString } from '../../helpers';

type TopButtonProps<T> = {
    onCLick: () => void;
    styles: string[];
    disabled?: boolean;
    inner: T;
};

const TopButton: FC<TopButtonProps<TopButtonInner>> = ({ onCLick, styles, inner, disabled }) => {
    const { icon, text } = inner;

    return (
        <button disabled={disabled} className={transformToString(styles)} onClick={onCLick}>
            <span>{text}</span>
            {icon}
        </button>
    );
};

export default TopButton;