import { useNotificationValue } from '../NotificationContext'

const Notification = () => {
  const notification = useNotificationValue()

  if (!notification.message) return null

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  }

  if (notification.type === 'success') {
    style.color = 'green'
    style.borderColor = 'green'
  } else if (notification.type === 'error') {
    style.color = 'red'
    style.borderColor = 'red'
  }

  return <div style={style}>{notification.message}</div>
}

export default Notification
