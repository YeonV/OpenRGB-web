import styles from '@/styles/app.module.scss'
import pkg from '../../../../../package.json'
import { useState, useEffect } from 'react'
import { Button, Paper, Box } from '@mui/material'
import { useStore } from '../../store/useStore'
import { Link as RouterLink } from 'react-router-dom'
import { InfoOutlined, Brightness4, Brightness7 } from '@mui/icons-material'
import TopNavi from '@/components/TopNavi'

const ipcRenderer = window.ipcRenderer || false

const Home = () => {
  // React's useState
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('hacked by Blade')
  const [data, setData] = useState(0)

  // Electron-Store
  const onClickSetStore = () => {
    ipcRenderer.send('set', ['count', count])
    onClickGetStore()
  }
  const onClickGetStore = () => {
    ipcRenderer.send('get')
  }

  // IPC Home
  const onClickWithIpc = () => {
    ipcRenderer.send('ping-pong', 'some data from ipcRenderer')
  }
  const onClickWithIpcSync = () => {
    const message = ipcRenderer.sendSync(
      'ping-pong-sync',
      'some data from ipcRenderer'
    )
    setMessage(message)
  }

  // DarkMode mui & nativeTheme

  // set React-state from Electron-Store
  useEffect(() => {
    if (ipcRenderer) {
      if (data) {
        setCount(data)
      }
    }
  }, [data])

  // IPC init
  useEffect(() => {
    if (ipcRenderer) {
      ipcRenderer.on('ping-pong', (event: any, data: any) => {
        setMessage(data)
      })
      ipcRenderer.on('get', (event: any, data: any) => {
        setData(data.count)
      })
    }
    return () => {
      if (ipcRenderer) {
        ipcRenderer.removeAllListeners('ping-pong')
        ipcRenderer.removeAllListeners('get')
      }
    }
  }, [])

  useEffect(() => {
    if (ipcRenderer) {
      onClickGetStore()
    }
  }, [])

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        overflowX: 'hidden',
      }}
      className={styles.app}
    >
      <header
        className={styles.appHeader}
        style={{
          minHeight:
            ipcRenderer && pkg.env.VITRON_CUSTOM_TITLEBAR
              ? 'calc(100vh - 30px)'
              : '100vh',
        }}
      >
        <TopNavi />
      </header>
    </Box>
  )
}

export default Home
