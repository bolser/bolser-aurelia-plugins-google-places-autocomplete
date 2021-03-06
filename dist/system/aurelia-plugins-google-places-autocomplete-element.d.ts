export declare class GooglePlacesAutocomplete {
    _config: any;
    _element: any;
    _eventAggregator: any;
    _initialized: boolean;
    _scriptPromise: any;
    _service: any;
    _servicePromise: any;
    _serviceResolve: any;
    placeholder: string;
    selectClass: string;
    value: any;
    disabled: boolean;
    index: number;
    predictions: any[];
    selected: boolean;
    show: boolean;
    constructor(element: any, config: any, eventAggregator: any);
    valueChanged(newValue: any, oldValue: any): Promise<void>;
    blur(): void;
    focus(): void;
    keydown(event: any): boolean;
    select(prediction: any, submit?: boolean): void;
    _clear(keep?: boolean, show?: boolean): void;
    _dispatchEvent(): void;
    _initialize(): Promise<void>;
    _loadApiScript(): void;
}
