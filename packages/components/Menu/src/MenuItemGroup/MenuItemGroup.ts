import type { ExtractPropTypes, Prop, PropType } from "vue";

export const Props = {
    title: {
        type: String as PropType<string>,
        default: ''
    }
}

export type MenuItemGroupPropType = ExtractPropTypes<typeof Props>