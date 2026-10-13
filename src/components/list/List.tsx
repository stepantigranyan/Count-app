import type { FC } from 'react';
import type { Item } from '../../types';
import ListItem from "./ListItem.tsx";

type ListProps = {
    list: Item[];
    changeList: (arr: Item[]) => void;
};

const List: FC<ListProps> = ({ list, changeList }) => {
    return (
        <ul className={'flex flex-col gap-y-3'}>
            {list.map((item) => <ListItem list={list} id={item.id} key={item.id} changeList={changeList} />)}
        </ul>
    );
};

export default List;