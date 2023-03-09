import type { ExtractPropTypes, Prop, PropType } from "vue";
import { isColor, isSize } from '../../../utils/RegExp';
export const Props = {
    modelValue: {
        type: String as PropType<string>,
        default: (): string => ''
    },
    placeholder: {
        type: String as PropType<string>,
        default: (): string => '请输入...'
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: (): boolean => false
    },
    clearable: {
        type: Boolean as PropType<boolean>,
        default: (): boolean => false
    },
    showPassword: {
        type: Boolean as PropType<boolean>,
        default: (): boolean => false
    },
    maxlength: {
        type: Number as PropType<number>
    },
    activeColor: {
        type: String as PropType<string>,
        default: (): string => '#000',
        validator(value: string): boolean {
            return isColor(value)
        }
    },
    width: {
        type: String as PropType<string>,
        default: (): string => '180px',
        validator(value: string): boolean {
            return isSize(value)
        }
    },
    fontSize: {
        type: String as PropType,
        default: (): string => '12px',
        validator(value: string): boolean {
            return isSize(value)
        }
    }
}

export type InputPropsType = ExtractPropTypes<typeof Props>