import { mount } from '@vue/test-utils'
import Notification from '../Notification.vue'


describe('Notification.vue', () => {
  it('renders notification content', () => {
    const wrapper = mount(Notification, {
      props: {
        Title: 'Hello',
        Content: 'World',
      },
    })
    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.text()).toContain('World')
  })
})
describe('Notification', () => {
    it('closes notification on click', async () => {
      const wrapper = mount(Notification, {
        props: {
          Title: 'Test Title',
          Content: 'Test Content',
          Type: 'info',
          Position: 'top-right',
          Duration: 0,
          OffsetY: 20,
          OffsetX: 20,
          ShowClose: true,
          ZIndex: 0,
          Icon: 'none'
        }
      })
      
      // Make sure the notification is initially visible
      expect(wrapper.getCurrentComponent().exposed?.IsVisible._value).toBe(true)
      
      // Simulate a click on the close button
      await wrapper.find('.NotificationClose').trigger('click')
      // Make sure the notification is no longer visible
      expect(wrapper.getCurrentComponent().exposed?.IsVisible._value).toBe(false)
    })
  })