import { Instance } from '@popperjs/core'
import { InjectionKey } from 'vue'
import { Ref } from 'vue'


export type Measurable = {
  getBoundingClientRect: () => DOMRect
}


export type IcePopperInjectionContext = {
  triggerRef: Ref<Measurable | undefined>
  contentRef: Ref<HTMLElement | undefined>
  popperInstanceRef: Ref<Instance | undefined>
}

export type IcePopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | undefined>
  arrowOffset: Ref<number | undefined>
}
export const POPPER_INJECTION_KEY: InjectionKey<IcePopperInjectionContext> = Symbol('popper')
export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<IcePopperContentInjectionContext> = Symbol('popperContent')