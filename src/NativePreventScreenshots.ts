import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  start(): Promise<boolean>;
  stop(): Promise<boolean>;
  isPrevented(): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('PreventScreenshots');
