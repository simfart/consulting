import vikeReact from 'vike-react/config'

export default {
  // Включаем пререндеринг
  prerender: true,
  
  // Настройки для React
  extends: [vikeReact],
  
  // Настройки для гидратации
  hydrationCanBeAborted: true,
  
  // Мета-настройки
  meta: {
    title: {
      env: { server: true, client: true }
    },
    description: {
      env: { server: true, client: true }
    }
  }
} 