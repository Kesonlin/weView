import Input from '../src/Input.vue'
export const InputDemo: VueElement = function (template: string) {
    return {
        components: { Input },
        template,
        data() {
            return {
                inputText: ''
            }
        }
    }
}