
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 중요: 상대 경로('./')로 설정하면 저장소 이름이 바뀌어도 문제없이 작동합니다.
  base: './', 
})
