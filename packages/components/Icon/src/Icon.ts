import type { ExtractPropTypes, PropType } from "vue";
import type { IconNameType } from "./interface";
import { isColor, isSize } from '../../../utils/RegExp'

export const Props = {
    name: {
        type: String as PropType<IconNameType>,
        require: true
    },
    color: {
        type: String as PropType<string>,
        default: (): string => '#666',
        validator(value: string): boolean {
            return isColor(value)
        }
    },
    size: {
        type: (String) as PropType<string>,
        default: (): string => '1rem',
        validator(value: string): boolean {
            return isSize(value)
        }
    },
    hoverColor: {
        type: String as PropType<string>,
        default: (): string => 'default',
        validator(value: string): boolean {
            return isColor(value) || 'default'
        }
    }
}

export const Emits = {
    click: (evt: MouseEvent): MouseEvent => evt
}

export type IconPropsType = ExtractPropTypes<typeof Props>