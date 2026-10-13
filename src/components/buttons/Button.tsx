import type {FC, ReactNode} from 'react';

import { transformToString } from '../../helpers';

type ButtonProps = {
    onCLick: () => void;
    styles: string[];
    disabled: boolean;
    children: ReactNode;
};

const Button: FC<ButtonProps> = ({ onCLick, styles, disabled, children }) => {
    return (
        <button disabled={disabled} className={transformToString(styles)} onClick={onCLick}>
            {children}
        </button>
    );
};

export default Button;