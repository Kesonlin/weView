import type { ExtractPropTypes, PropType } from "vue";

export const Props = {
    to: {
        type: String as PropType<string | null>,
        default: null
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
}

export type SubMenuPropsType = ExtractPropTypes<typeof Props>