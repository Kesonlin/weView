import type { PropType, ExtractPropTypes, Prop } from "vue";
import { isColor } from "@weview/utils/RegExp";

export const Props = {
    mode: {
        type: String as PropType<string>,
        default: (): string => 'horizontal',
        validator(value: string): boolean {
            return value == 'horizontal' || value == 'vertical'
        }
    },
    textColor: {
        type: String as PropType<string>,
        default: (): string => '#2a2a2a',
        validator(value: string): boolean {
            return isColor(value)
        }
    },
    activeColor: {
        type: String as PropType<string>,
        default: (): string => '#7a45bd',
        validator(value: string): boolean {
            return isColor(value)
        }
    },
    defaultTo: {
        type: String as PropType<string>,
    },
    router: {
        type: Boolean as PropType<boolean>,
        default: (): boolean => false
    }
}

export type MenuPropsType = ExtractPropTypes<typeof Props>