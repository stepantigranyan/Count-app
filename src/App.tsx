import { useEffect, useState } from 'react';
import type { Item, TopButtonInner } from './types';

import TopButton from './components/topButtons/TopButton.tsx';
import List from './components/list/List.tsx';

import { refreshButtonStyles, restoreButtonStyles } from './styles';
import { RefreshIcon, RestoreIcon } from './components/icons';

const createInitialList = (quantity: number): Item[] => {
    const arr: Item[] = [];

    for (let i = 0; i < quantity; i++) {
        const item: Item = { id: i + 1, count: 0}
        arr.push(item);
    }

    return arr;
};

const refreshButtonInner: TopButtonInner = {
    icon: <RefreshIcon />,
    text: 'Refresh Numbers',
};

const restoreButtonInner: TopButtonInner = {
    icon: <RestoreIcon />,
    text: 'Restore',
};

const App = () => {
    const [list, setList] = useState<Item[]>(createInitialList(5));
    const [disable, setDisable] = useState<boolean>(true);

    useEffect(() => {
        if (list.length === 0) {
            setDisable(false);
        }
    }, [list]);

    const countAll = (arr: Item[]):number => {
        return arr.reduce((acc, current) => acc + current.count, 0);
    };

    const refresh = (): void => {
        const refreshedList = list.map((item: Item) => {
            item.count = 0;
            return item;
        });

        setList(refreshedList);
    }

    const restore = (): void => {
        setList(createInitialList(5));
    }


    return (
        <main className={'h-screen flex items-center justify-center'}>
            <div className="size-100 flex flex-col gap-y-10">
                <div className={'flex gap-x-5 items-center'}>
                    <i className={'fa-solid fa-cart-shopping text-2xl'} />
                    <span className={'px-5 py-1 bg-blue-500 rounded-xl text-white text-md'}>{countAll(list)}</span>
                    <span className={'text-2xl'}>Items</span>
                </div>
                <div className={'flex items-center gap-x-5'}>
                    <TopButton onCLick={refresh} styles={refreshButtonStyles} inner={refreshButtonInner} />
                    <TopButton disabled={disable} onCLick={restore} styles={restoreButtonStyles} inner={restoreButtonInner} />
                </div>
                <List list={list} changeList={setList} />
            </div>
        </main>
    )
};

export default App;
