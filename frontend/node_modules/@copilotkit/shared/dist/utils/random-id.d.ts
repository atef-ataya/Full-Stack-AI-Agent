declare function randomId(): string;
declare function randomUUID(): string;
declare function dataToUUID(input: string, namespace?: string): string;
declare function isValidUUID(uuid: string): boolean;

export { dataToUUID, isValidUUID, randomId, randomUUID };
