const averageListItemInnerStyles: string[] = [
    'flex', 'justify-center', 'items-center', 'size-10', 'rounded-xl', 'text-white', 'cursor-pointer',
];

const averageTopButtonStyles: string[] = [
    'flex', 'items-center', 'gap-x-2', 'px-5', 'py-2', 'text-white', 'text-lg', 'rounded-xl', 'cursor-pointer',
]

export const counterElementStyles: string[] = [
    ...averageListItemInnerStyles, 'bg-blue-500',
];

export const incrementButtonStyles: string[] = [
    ...averageListItemInnerStyles, 'bg-gray-500', 'hover:bg-gray-700',
];

export const decrementButtonStyles: string[] = [
    ...averageListItemInnerStyles, 'bg-indigo-500', 'hover:bg-indigo-700',
];

export const deleteButtonStyles: string[] = [
    ...averageListItemInnerStyles, 'bg-red-500', 'hover:bg-red-700',
];

export const refreshButtonStyles: string[] = [
    ...averageTopButtonStyles, 'bg-green-500', 'hover:bg-green-700',
];

export const restoreButtonStyles: string[] = [
    ...averageTopButtonStyles, 'bg-violet-500', 'hover:bg-violet-700', 'disabled:bg-gray-600', 'disabled:cursor-not-allowed',
]