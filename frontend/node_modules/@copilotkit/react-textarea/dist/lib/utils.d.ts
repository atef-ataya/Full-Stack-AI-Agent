import { ClassValue } from 'clsx';

declare function cn(...inputs: ClassValue[]): string;
declare function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON>;
declare function formatDate(input: string | number | Date): string;
declare const arraysAreEqual: (arr1: number[], arr2: number[]) => boolean;
declare function nullableCompatibleEqualityCheck<T>(naiveEqualityCheck: (a: T, b: T) => boolean, a: T | null | undefined, b: T | null | undefined): boolean;

export { arraysAreEqual, cn, fetcher, formatDate, nullableCompatibleEqualityCheck };
