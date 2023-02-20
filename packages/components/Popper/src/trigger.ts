/* eslint-disable no-unused-vars */
import { buildProps, definePropType } from '@weview/utils'
import { Measurable } from './tokens'

export const popperTriggerProps = buildProps({
  targetRef: {
    type: definePropType<Measurable>(Object),
  },
  targetTriggering: Boolean,
  triggerRef: {
    type: definePropType<Measurable | undefined>(Object)
  },
  id: String,
  open: Boolean,
})
type A = typeof popperTriggerProps.targetRef