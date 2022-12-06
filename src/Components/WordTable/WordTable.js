import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import {Container} from '@mui/material';

// redux
import {connect} from "react-redux";
import {removeWords} from "../../action";

const mapStateToProps = (state) => {
    return {
        params: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleRemove: (id) => {
            dispatch(removeWords(id));
        }
    }
}

class WordTable extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('params', this.props.params.words);
    }
    render() {
        return (
            <Container maxWidth='lg'>
                <Box sx={{paddingTop: '30px'}}>
                    {this.props.params.words.length > 0 &&
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Word</TableCell>
                                    <TableCell align="right">Transcription</TableCell>
                                    <TableCell align="right">Translation</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.params.words.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">{row.word}</TableCell>
                                        <TableCell align="right">{row.transcription}</TableCell>
                                        <TableCell align="right">{row.translation}</TableCell>
                                        <TableCell>
                                            <Tooltip title="Delete">
                                                <Button
                                                    type="button"
                                                        onClick={() => this.props.handleRemove(row.id)}>
                                                    <DeleteIcon />
                                                </Button>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    }
                </Box>
            </Container>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WordTable);
