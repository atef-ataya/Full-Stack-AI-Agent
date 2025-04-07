import React__default from 'react';

interface BaseProps {
    className: string;
    [key: string]: unknown;
}
declare const Button: React__default.ForwardRefExoticComponent<Omit<React__default.PropsWithChildren<{
    active: boolean;
    reversed: boolean;
} & BaseProps>, "ref"> & React__default.RefAttributes<HTMLSpanElement>>;
declare const Icon: React__default.ForwardRefExoticComponent<Omit<React__default.PropsWithChildren<BaseProps>, "ref"> & React__default.RefAttributes<HTMLSpanElement>>;
declare const Menu: React__default.ForwardRefExoticComponent<Omit<React__default.PropsWithChildren<BaseProps>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;
declare const Portal: ({ children }: {
    children: React__default.ReactNode;
}) => React__default.ReactPortal | null;
declare const Toolbar: React__default.ForwardRefExoticComponent<Omit<React__default.PropsWithChildren<BaseProps>, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

export { Button, Icon, Menu, Portal, Toolbar };
