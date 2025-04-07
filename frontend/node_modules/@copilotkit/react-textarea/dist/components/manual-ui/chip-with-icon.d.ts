import * as react_jsx_runtime from 'react/jsx-runtime';

interface ChipWithIconProps {
    label: string;
    onDelete: () => void;
    iconUrl: string;
}
declare const ChipWithIcon: ({ label, onDelete, iconUrl }: ChipWithIconProps) => react_jsx_runtime.JSX.Element;

export { ChipWithIcon, ChipWithIconProps };
