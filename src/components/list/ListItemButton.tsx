import type { FC, JSX } from 'react';

import { transformToString } from '../../helpers';

type ListItemButtonProps = {
    styles: string[];
    icon: JSX.Element;
    onCLick: () => void;
}

const ListItemButton: FC<ListItemButtonProps> = ({ onCLick, styles, icon }) => {
    return (
        <button className={transformToString(styles)} onClick={onCLick}>
            {icon}
        </button>
    );
};

export default ListItemButton;