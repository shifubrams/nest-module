export interface LoggerConfig {
  appName: string;
  appVersion: string;
  username: string;
  password: string;
  debug?: boolean;
  host?: string;
  environment: 'DEV' | 'PROD' | 'Preprod' | 'Testing' | 'Accept';
  customerId?: number;
  appId?: string;
  service: string;
  indexName?: string;
}
