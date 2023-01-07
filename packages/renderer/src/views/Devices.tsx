import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DevicesSettings from '@/components/DeviceSettings'
import { useState } from 'react'

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
const Devices = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        'width': '100%',
        'display': 'flex',
        '& div[role="tabpanel"]': { flex: 1 },
      }}
    >
      <Box sx={{ borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{
            '.MuiTab-root': {
              textTransform: 'none',
              alignSelf: 'flex-start',
            },
          }}
          orientation='vertical'
        >
          <Tab label='MSI RTX 4090 24G' {...a11yProps(0)} />
          <Tab label='WD Black SN850X' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DevicesSettings device='MSI RTX 4090 24G' />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DevicesSettings device='WD Black SN850X' />
      </TabPanel>
    </Box>
  )
}

export default Devices
