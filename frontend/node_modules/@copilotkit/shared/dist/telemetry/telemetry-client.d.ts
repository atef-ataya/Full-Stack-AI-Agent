import { Analytics } from '@segment/analytics-node';
import { AnalyticsEvents } from './events.js';

declare class TelemetryClient {
    segment: Analytics | undefined;
    globalProperties: Record<string, any>;
    cloudConfiguration: {
        publicApiKey: string;
        baseUrl: string;
    } | null;
    packageName: string;
    packageVersion: string;
    private telemetryDisabled;
    private sampleRate;
    private anonymousId;
    constructor({ packageName, packageVersion, telemetryDisabled, telemetryBaseUrl, sampleRate, }: {
        packageName: string;
        packageVersion: string;
        telemetryDisabled?: boolean;
        telemetryBaseUrl?: string;
        sampleRate?: number;
    });
    private shouldSendEvent;
    capture<K extends keyof AnalyticsEvents>(event: K, properties: AnalyticsEvents[K]): Promise<void>;
    setGlobalProperties(properties: Record<string, any>): void;
    setCloudConfiguration(properties: {
        publicApiKey: string;
        baseUrl: string;
    }): void;
    private setSampleRate;
}

export { TelemetryClient };
