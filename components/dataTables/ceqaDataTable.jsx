import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import TablePagination from '@mui/material/TablePagination'

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {row && (
        <React.Fragment>
          <TableRow
            sx={{ '& > *': { borderBottom: 'unset' } }}
            className={row.index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}>
            <TableCell>
              <IconButton
                aria-label='expand row'
                size='small'
                onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component='th' scope='row'>
              {row.schNumber}
            </TableCell>
            <TableCell align='left'>
              {String(row.title).slice(0, 60)}...
            </TableCell>
            <TableCell align='left'>{String(row.city).slice(0, 20)}</TableCell>
            <TableCell align='left'>{row.status}</TableCell>
            <TableCell align='left'>{row.type}</TableCell>
          </TableRow>
          <TableRow className={row.index % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout='auto' unmountOnExit>
                <Box sx={{ margin: 0.5 }}>
                  <Typography variant='h6' gutterBottom component='div'>
                    Information
                  </Typography>
                  <Table size='small' aria-label='information'>
                    <TableHead></TableHead>
                    <TableBody>
                      {row.information.map((info) => (
                        <>
                          <TableRow key={info.title}>
                            <TableCell component='th' scope='row'>
                              <div className='flex flex-row gap-2'>
                                <p className='font-semibold'>Title:</p>
                                {info.title}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow key={info.leadAgency}>
                            <TableCell component='th' scope='row'>
                              <div className='flex flex-row gap-2'>
                                <p className='font-semibold'>Lead agency:</p>
                                {info.leadAgency}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow key={info.contactAddress}>
                            <TableCell component='th' scope='row'>
                              <div className='flex flex-row gap-2'>
                                <p className='font-semibold'>
                                  Contact address:
                                </p>
                                {info.contactAddress}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow key={info.contactEmail}>
                            <TableCell component='th' scope='row'>
                              <div className='flex flex-row gap-2'>
                                <p className='font-semibold'>Contact email:</p>
                                {info.contactEmail}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow key={info.contactPhone}>
                            <TableCell component='th' scope='row'>
                              <div className='flex flex-row gap-2'>
                                <p className='font-semibold'>Contact phone:</p>
                                {info.contactPhone}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow key={info.county}>
                            <TableCell component='th' scope='row'>
                              <div className='flex flex-row gap-2'>
                                <p className='font-semibold'>County:</p>
                                {info.county}
                                {', '}
                                {info.state}
                                {', '}
                                {info.zipCode}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow key={info.description}>
                            <TableCell>
                              {' '}
                              <div className='flex flex-row gap-2'>
                                <p className='font-semibold'>Description:</p>
                                {info.description}
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow key={info.received}>
                            <TableCell>
                              {' '}
                              <div className='flex flex-row gap-2'>
                                <p className='font-semibold'>Received:</p>
                                {info.received}
                              </div>
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      )}
    </>
  )
}

export default function CollapsibleTable({ dataRows }) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const rows = [
    dataRows.map((row) =>
      createData(
        row.Title,
        row.schNumber,
        row.City,
        row.potentialDeal,
        row.Type,
        row.Descriptions,
        row.LeadAgency,
        row.Reason,
        row.index,
        row.ContactAddress,
        row.ContactEmail,
        row.ContactPhone,
        row.County,
        row.State,
        row.ZipCode,
        row.Received
      )
    ),
  ]

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  console.log('table view', dataRows)

  return (
    <>
      {rows && (
        <TableContainer component={Paper}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>schNumber</TableCell>
                <TableCell align='left'>Title</TableCell>
                <TableCell align='left'>City</TableCell>
                <TableCell align='left'>Status</TableCell>
                <TableCell align='left'>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows[0]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.index} row={row} />
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component='div'
            count={rows[0].length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </>
  )
}

function createData(
  title,
  schNumber,
  city,
  status,
  type,
  descriptions,
  leadAgency,
  reason,
  index,
  contactAddress,
  contactEmail,
  contactPhone,
  county,
  state,
  zipCode,
  received
) {
  return {
    title,
    schNumber,
    city,
    status,
    type,
    descriptions,
    index,
    contactAddress,
    contactEmail,
    contactPhone,
    county,
    state,
    zipCode,
    received,
    information: [
      {
        title: title,
        contactAddress: contactAddress,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
        county: county,
        state: state,
        zipCode: zipCode,
        received: received,
        description: descriptions,
        leadAgency: leadAgency,
        reason: reason,
      },
    ],
  }
}
