/// <reference types="react" />
import { UndoManager } from 'mobx-keystone';
import { TModel } from './model';
import { TModule } from './module';
import { TField } from './field';
import { TSys } from './sys';
import { TGraph } from './graph';
import { SysConfig, ModelConfig, ModuleConfig } from './config';
declare const RootInstance_base: import("mobx-keystone")._Model<unknown, {
    sys: import("mobx-keystone").MaybeOptionalModelProp<TSys, TSys>;
    Models: import("mobx-keystone").OptionalModelProp<import("mobx-keystone").ObjectMap<TModel>, import("mobx-keystone").ObjectMap<TModel>>;
    Modules: import("mobx-keystone").OptionalModelProp<import("mobx-keystone").ObjectMap<TModule>, import("mobx-keystone").ObjectMap<TModule>>;
    Fields: import("mobx-keystone").OptionalModelProp<import("mobx-keystone").ObjectMap<TField>, import("mobx-keystone").ObjectMap<TField>>;
    graph: import("mobx-keystone").OptionalModelProp<TGraph, TGraph>;
}>;
export declare class RootInstance extends RootInstance_base {
    undoManager: UndoManager;
    setUndoManager(undoManager: UndoManager): void;
    get moduleList(): TModule[];
    get Nodes(): {
        id: string;
        type: string;
        isKeySharp: boolean;
        visible: boolean;
        selected: boolean;
        showNameOrLabel: boolean;
        config: {
            width: number;
            headerHeight: number;
            fieldHeight: number;
            labelSize: number;
            styleConfig: {
                naviWidth: number;
                default: {
                    node: {
                        fill: string;
                        shadowColor: string;
                        shadowBlur: number;
                        shadowOffsetX: number;
                        shadowOffsetY: number;
                        radius: number;
                        lineWidth: number;
                        opacity: number;
                        stroke: string;
                    };
                    edge: {
                        lineWidth: number;
                        size: number;
                        lineAppendWidth: number;
                        endArrow: {
                            path: string;
                            d: number;
                        };
                        opacity: number;
                        radius: number;
                        labelCfg: {
                            autoRotate: boolean;
                            style: {
                                fontSize: number;
                            };
                        };
                        stroke: string;
                    };
                };
                inactive: {
                    edge: {
                        stroke: string;
                    };
                };
                selected: {
                    node: {
                        stroke: string;
                    };
                };
                active: {
                    edge: {
                        stroke: string;
                    };
                };
                noSelected: {
                    node: {
                        stroke: string;
                    };
                };
                isNoModule: {
                    node: {
                        opacity: number;
                    };
                };
            };
        };
        data: {
            moduleKey: string;
            label: string;
            fields: any[];
            key: string;
            name: string;
            tag: string;
            nodeSize: number;
        };
        size: number;
    }[];
    get edges(): any;
    findModelByName(name: string): TModel;
    renderModelTitle(model: TModel): string | JSX.Element;
    init({ modelData, moduleData, height }: {
        modelData: any;
        moduleData: any;
        height: any;
    }): void;
    initData(models: ModelConfig[], modules: ModuleConfig[], sys?: SysConfig): void;
    undo(): void;
    redo(): void;
    checkAllFun(): void;
    checkAllCancleFun(): void;
    setCheckedKeys: (keys: string[]) => void;
}
export declare const createStore: (props?: {
    sys: {};
    graph: {};
}) => RootInstance;
export {};