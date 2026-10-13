import {type FC, memo} from 'react';
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
    list: Item[];
    id: number;
    changeList: (list: Item[]) => void;
};

const ListItem: FC<ListItemProps> = ({ list, id, changeList }) => {
    const increment = () => {
        const incrementedItem = list.find((item) => item.id === id)!;
        incrementedItem.count += 1;
        changeList([...list]);
    };

    const decrement = () => {
        const decrementedItem = list.find((item) => item.id === id)!;
        if (decrementedItem.count === 0) {
            return;
        }

        decrementedItem.count -= 1;
        changeList([...list]);
    }

    const del = () => {
        const newList = list.filter((item) => item.id !== id);
        changeList(newList);
    }

    const { count } = list.find((item) => item.id === id)!;

    return (
        <li className={'flex items-center gap-x-3'} key={id}>
            <div className={transformToString(counterElementStyles)}>{count}</div>
            <ListItemButton styles={incrementButtonStyles} icon={<IncrementIcon />} onCLick={increment} />
            <ListItemButton styles={decrementButtonStyles} icon={<DecrementIcon />} onCLick={decrement} />
            <ListItemButton styles={deleteButtonStyles} icon={<DeleteIcon />} onCLick={del} />
        </li>
    );
};

export default memo(ListItem);