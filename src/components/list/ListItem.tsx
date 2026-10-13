import type { FC } from 'react';
import type { Item } from '../../types'

import ListItemButton from "./ListItemButton.tsx";
import {
    counterElementStyles,
    incrementButtonStyles,
    decrementButtonStyles,
    deleteButtonStyles
} from '../../styles';
import { IncrementIcon, DecrementIcon, DeleteIcon} from '../icons';

import { transformToString } from '../../helpers';

type ListItemProps = {
    item: Item;
    changeItem: (id: number, operation: 'increment' | 'decrement') => void;
    delItem: (id: number) => void;
};

const ListItem: FC<ListItemProps> = ({ item, changeItem, delItem }) => {
    const { count, id } = item;

    const increment = () => {
        changeItem(id, 'increment');
    };

    const decrement = () => {
        changeItem(id, 'decrement');
    }

    const del = () => {
        delItem(id);
    }

    return (
        <li className={'flex items-center gap-x-3'} key={id}>
            <div className={transformToString(counterElementStyles)}>{count}</div>
            <ListItemButton styles={incrementButtonStyles} icon={<IncrementIcon />} onCLick={increment} />
            <ListItemButton styles={decrementButtonStyles} icon={<DecrementIcon />} onCLick={decrement} />
            <ListItemButton styles={deleteButtonStyles} icon={<DeleteIcon />} onCLick={del} />
        </li>
    );
};

export default ListItem;