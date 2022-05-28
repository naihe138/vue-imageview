import { Ref } from 'vue';
declare const _sfc_main: import("vue").DefineComponent<{
    images: {
        type: ArrayConstructor;
        required: true;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    visible: {
        type: BooleanConstructor;
        required: true;
    };
}, {
    props: {
        images: string[];
        src: string;
        visible: boolean;
    };
    emit: (event: "update:visible", ...args: any[]) => void;
    preview: Ref<HTMLDivElement>;
    state: {
        currenImage: string;
        containerStyle: {
            transform: string;
            '--init-coord': string;
        };
        imgStyle: {
            scale: number;
            translate: {
                x: number;
                y: number;
            };
        };
        showIndex: number;
        imagesArr: never[];
        scaleMax: number;
        scaleMin: number;
    };
    close: () => void;
    next: () => void;
    prev: () => void;
    change: (data: any) => void;
    scheduledAnimationFrame: boolean;
    scroll: (e: any) => void;
    overWidth: number;
    overHeight: number;
    startX: number;
    startY: number;
    boxLeft: number;
    boxTop: number;
    dragImage: (e: any) => void;
    dragAnimationFrame: boolean;
    imageMove: (e: any) => void;
    imageUp: (e: MouseEvent) => void;
    toScaleMax: () => void;
    toScaleMin: () => void;
    realScreen: () => void;
    toScaleOfStep: (step: any) => void;
    toDownload: () => void;
    loadImage: (src: string) => Promise<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    images: {
        type: ArrayConstructor;
        required: true;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    visible: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
