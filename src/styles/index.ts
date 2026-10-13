const averageListItemInnerStyles: string[] = [
    'flex', 'justify-center', 'items-center', 'size-10', 'rounded-xl', 'text-white',
];

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