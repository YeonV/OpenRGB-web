import Box from '@mui/material/Box'
import {
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Slider,
  Typography,
  styled,
} from '@mui/material'
import ReactGPicker from 'react-gcolor-picker'
import { useState } from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const DevicesSettings = ({ device }: { device: string }) => {
  const onColorChange = (value: any) => {
    console.log(value)
  }
  const [zone, setZone] = useState('0')

  const handleChangeZone = (event: any) => {
    setZone(event.target.value)
  }
  const [led, setLed] = useState('0')

  const handleChangeLed = (event: any) => {
    setLed(event.target.value)
  }
  const [color, setColor] = useState('0')

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value)
  }
  const [speed, setSpeed] = useState<number>(0)

  const handleChangeSpeed = (event: Event, newValue: number | number[]) => {
    setSpeed(newValue as number)
  }
  const [brightness, setBrightness] = useState<number>(50)

  const handleChangeBrightness = (
    event: Event,
    newValue: number | number[]
  ) => {
    setBrightness(newValue as number)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Typography variant='h6'>Zone:</Typography>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Select
                  value={zone}
                  onChange={handleChangeZone}
                  fullWidth
                  sx={{
                    'textAlign': 'left',
                    '.MuiSelect-select': { pt: '6px', pb: '6px' },
                  }}
                >
                  <MenuItem value={'0'}>All Zones</MenuItem>
                  <MenuItem value={'1'}>1</MenuItem>
                  <MenuItem value={'2'}>2</MenuItem>
                </Select>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Button
                  fullWidth
                  disabled={zone === '0'}
                  sx={{ fontSize: '16px !important' }}
                >
                  Resize
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Typography variant='h6'>LEDs:</Typography>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Select
                  value={led}
                  onChange={handleChangeLed}
                  fullWidth
                  sx={{
                    'textAlign': 'left',
                    '.MuiSelect-select': { pt: '6px', pb: '6px' },
                  }}
                >
                  <MenuItem value={'0'}>Entire Device</MenuItem>
                  <MenuItem value={'1'}>1</MenuItem>
                  <MenuItem value={'2'}>2</MenuItem>
                </Select>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Button
                  fullWidth
                  size='small'
                  disabled={zone === '0'}
                  sx={{ fontSize: '16px !important' }}
                >
                  Select All
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              ></Grid>
              <Grid
                item
                xs={5}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Select
                  value={0}
                  disabled
                  fullWidth
                  sx={{
                    'textAlign': 'left',
                    '.MuiSelect-select': { pt: '6px', pb: '6px' },
                  }}
                >
                  <MenuItem value={'0'}>Apply Colors to Selection</MenuItem>
                  <MenuItem value={'1'}>1</MenuItem>
                  <MenuItem value={'2'}>2</MenuItem>
                </Select>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Button
                  fullWidth
                  size='small'
                  disabled={zone === '0'}
                  sx={{ fontSize: '16px !important' }}
                >
                  Apply All
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Typography variant='h6'>Mode:</Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Select
                  value={0}
                  onChange={handleChangeLed}
                  fullWidth
                  sx={{
                    'textAlign': 'left',
                    '.MuiSelect-select': { pt: '6px', pb: '6px' },
                  }}
                >
                  <MenuItem value={'0'}>Direct</MenuItem>
                  <MenuItem value={'1'}>Off</MenuItem>
                  <MenuItem value={'2'}>Static</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Typography variant='h6'>Colors:</Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <RadioGroup row value={color} onChange={handleChangeColor}>
                  <FormControlLabel
                    value='0'
                    control={<Radio />}
                    label='Per-Led'
                  />
                  <FormControlLabel
                    value='1'
                    control={<Radio />}
                    label='Mode-Specific'
                  />
                  <FormControlLabel
                    value='2'
                    control={<Radio />}
                    label='Random'
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Typography variant='h6'>Speed:</Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sx={{
                  pl: 2,
                  pr: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Slider disabled value={speed} onChange={handleChangeSpeed} />
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Typography variant='h6'>Dir:</Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Select
                  value={0}
                  onChange={handleChangeLed}
                  fullWidth
                  sx={{
                    'textAlign': 'left',
                    '.MuiSelect-select': { pt: '6px', pb: '6px' },
                  }}
                >
                  <MenuItem value={'0'}>Direct</MenuItem>
                  <MenuItem value={'1'}>Off</MenuItem>
                  <MenuItem value={'2'}>Static</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                sx={{ p: 1, display: 'flex', alignItems: 'center' }}
              >
                <Typography variant='h6'>Brightness:</Typography>
              </Grid>
              <Grid
                item
                xs={9}
                sx={{
                  pl: 2,
                  pr: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Slider value={brightness} onChange={handleChangeBrightness} />
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            '& .popup_tabs': {
              background: 'transparent',
              width: 'unset !important',
            },
            '& .colorpicker': {
              background: 'transparent',
            },
            '& .colorpicker .color-picker-panel': {
              background: 'transparent',
            },
          }}
        >
          <Item>
            <ReactGPicker value='red' onChange={onColorChange} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DevicesSettings
