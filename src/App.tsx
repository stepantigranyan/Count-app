import { useState } from 'react';
import type { Item } from './types';

import Button from './components/buttons/Button.tsx';
import List from './components/list/List.tsx';

import { refreshButtonStyles, restoreButtonStyles } from './styles';
import { RefreshIcon, RestoreIcon } from './components/icons';

const createList = (quantity: number): Item[] => {
    const arr: Item[] = [];

    for (let i = 0; i < quantity; i++) {
        const item: Item = { id: i + 1, count: 0}
        arr.push(item);
    }

    return arr;
};

const initialList = createList(5);

const App = () => {
    const [list, setList] = useState<Item[]>(initialList);

    const countAll = (arr: Item[]):number => {
        return arr.reduce((acc, current) => {
            if (current.count > 0) {
                return acc + 1;
            }

            return acc;
        }, 0);
    };

    const refresh = (): void => {
        const refreshedList = list.map((item): Item => ({ id: item.id , count: 0 }));
        setList(refreshedList);
    };

    const restore = (): void => {
        setList(initialList);
    };

    const changeItem = (id: number, operation: 'increment' | 'decrement') => {
        const changedList = list.map((item): Item => {
            if (item.id === id) {
                if (operation === 'increment') {
                    return { id: item.id, count: item.count + 1 };
                }

                if (operation === 'decrement') {
                    if (item.count !== 0) {
                        return { id: item.id, count: item.count - 1 };
                    }
                }
            }

            return { id: item.id, count: item.count };
        })

        setList(changedList);
    };

    const delItem = (id: number): void => {
        const newList = list.filter(item => item.id !== id)!;
        setList(newList);
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
                    <Button disabled={list.length === 0} onCLick={refresh} styles={refreshButtonStyles}>
                        <span>Refresh Numbers</span>
                        <RefreshIcon />
                    </Button>
                    <Button disabled={list.length !== 0} onCLick={restore} styles={restoreButtonStyles}>
                        <span>Restore</span>
                        <RestoreIcon />
                    </Button>
                </div>
                <List list={list} changeItem={changeItem} delItem={delItem} />
            </div>
        </main>
    )
};

export default App;
