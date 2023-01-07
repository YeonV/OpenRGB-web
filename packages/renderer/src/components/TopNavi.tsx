import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Devices from '@/views/Devices'
import { Button } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { useStore } from '@/store/useStore'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const ipcRenderer = window.ipcRenderer || false

export default function TopNavi() {
  const { darkMode, setDarkMode } = useStore((state) => state.ui)
  const [value, setValue] = React.useState(0)

  const toggleDarkmode = () => {
    if (ipcRenderer) {
      ipcRenderer.sendSync('toggle-darkmode', 'try')
    } else {
      setDarkMode(!darkMode)
    }
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  React.useEffect(() => {
    if (ipcRenderer) {
      async function getDarkMode() {
        const dark = await ipcRenderer.sendSync('get-darkmode')
        setDarkMode(dark === 'yes')
      }
      getDarkMode()
    }
    return () => {
      if (ipcRenderer) {
        ipcRenderer.removeAllListeners('ping-pong')
        ipcRenderer.removeAllListeners('get')
      }
    }
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{
            'flexBasis': '250px',
            '& .MuiTab-root': { textTransform: 'none' },
          }}
        >
          <Tab label='Devices' {...a11yProps(0)} />
          <Tab label='Information' {...a11yProps(1)} />
          <Tab label='SDK Server' {...a11yProps(2)} />
          <Tab label='SDK Client' {...a11yProps(3)} />
          <Tab label='Settings' {...a11yProps(4)} />
        </Tabs>
        <Button
          variant='text'
          sx={{ width: 60, position: 'absolute', top: 10, right: 0 }}
          onClick={toggleDarkmode}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </Button>
      </Box>
      <TabPanel value={value} index={0}>
        <Devices />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  )
}
