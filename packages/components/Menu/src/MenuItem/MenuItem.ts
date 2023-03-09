import type { ExtractPropTypes, PropType } from "vue";

export const Props = {
    to: {
        type: String as PropType<null | string>,
        default: null
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    }
}

export type MenuItemPropsType = ExtractPropTypes<typeof Props>