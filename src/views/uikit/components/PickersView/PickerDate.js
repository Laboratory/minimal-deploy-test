import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Block from '~/components/Block';
import isWeekend from 'date-fns/isWeekend';
import { TextField } from '@material-ui/core';
import {
  DatePicker,
  StaticDatePicker,
  MobileDatePicker,
  DesktopDatePicker
} from '@material-ui/lab';

// ----------------------------------------------------------------------

function PickerDate() {
  const [value, setValue] = useState(new Date());

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <Block title="Basic">
          <DesktopDatePicker
            label="For desktop"
            value={value}
            minDate={new Date('2017-01-01')}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField {...params} fullWidth margin="normal" />
            )}
          />
          <MobileDatePicker
            orientation="portrait"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                label="For mobile"
              />
            )}
          />
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Views playground">
          <DatePicker
            views={['year']}
            label="Year only"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                helperText={null}
              />
            )}
          />
          <DatePicker
            views={['year', 'month']}
            label="Year and Month"
            minDate={new Date('2012-03-01')}
            maxDate={new Date('2023-06-01')}
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                helperText={null}
              />
            )}
          />
          <DatePicker
            openTo="year"
            views={['year', 'month', 'date']}
            label="Year, month and date"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                helperText={null}
              />
            )}
          />
          <DatePicker
            views={['date', 'month', 'year']}
            label="Invert the order of views"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                helperText={null}
              />
            )}
          />
          <DatePicker
            views={['date']}
            label="Just date"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                helperText={null}
              />
            )}
          />
        </Block>
      </Grid>

      <Grid item xs={12}>
        <Block title="Static mode">
          <StaticDatePicker
            orientation="landscape"
            openTo="date"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => <TextField {...params} />}
          />
        </Block>
      </Grid>
    </Grid>
  );
}

export default PickerDate;
