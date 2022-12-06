import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// redux
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        params: state,
    }
}
class SelectCategoriesWords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    componentDidMount() {
        console.log('params', this.props.params.words);
    }
    render() {
        return (
            <div>
                <Box sx={{ minWidth: 300, marginTop: '30px'}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.value}
                            label="Category"
                            onChange={(event) => this.handleChange(event)}
                        >
                            {this.props.params.words.map((item, index) => (
                                <MenuItem key={index} value={item.category}>{item.category}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </div>
        );
    }
    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }
}

export default connect(mapStateToProps, null)(SelectCategoriesWords);
