import { OptionTypeBase } from 'react-select';

export interface MetricsState {
    selected: string[];    
}

export interface SelectPayload {
    selected: string[];
    newMetric: string;
}

export interface Option extends OptionTypeBase {
    label: string;
    value: string;
  }