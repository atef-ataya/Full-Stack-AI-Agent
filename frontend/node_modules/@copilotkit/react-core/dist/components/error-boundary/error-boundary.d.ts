import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import { CopilotKitError, Severity } from '@copilotkit/shared';

interface Props {
    children: React.ReactNode;
    publicApiKey?: string;
    showUsageBanner?: boolean;
}
interface State {
    hasError: boolean;
    error?: CopilotKitError;
    status?: {
        severity: Severity;
        message: string;
    };
}
declare class CopilotErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props);
    static getDerivedStateFromError(error: CopilotKitError): State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | boolean | Iterable<React.ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;
}
declare function ErrorToast({ error, children }: {
    error?: Error;
    children: React.ReactNode;
}): React.ReactNode;

export { CopilotErrorBoundary, ErrorToast };
