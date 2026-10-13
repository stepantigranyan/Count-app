import type { FC } from 'react';
import type { Item } from '../../types';
import ListItem from "./ListItem.tsx";

type ListProps = {
    list: Item[];
    changeItem: (id: number, operation: 'increment' | 'decrement') => void;
    delItem: (id: number) => void;
};

const List: FC<ListProps> = ({ list, changeItem, delItem }) => {
    return (
        <ul className={'flex flex-col gap-y-3'}>
            {list.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    changeItem={changeItem}
                    delItem={delItem}
                />
            ))}
        </ul>
    );
};

export default List;