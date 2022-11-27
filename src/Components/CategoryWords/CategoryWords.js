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

class CategoryWords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            categories: [],
        }
    }
    componentDidMount() {
        // this.convertArray();
    }
    render() {
        return (
            <Box sx={{ minWidth: 300, marginTop: '30px' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.category}
                        label="Category"
                        // onChange={(event)=> this.handleChange(event)}
                    >
                        {this.state.categories.map((item, index) => (
                            <MenuItem
                                key={index}
                                value={item}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        );
    }

    // convertArray() {
    //     let arr = [];
    //     this.props.params.words.forEach((item) => {
    //         arr.push(item.category);
    //     });
    //     let arrNew = arr.filter((item, index) => {
    //         return index === arr.indexOf(item);
    //     });
    //     this.setState({
    //         categories: arrNew,
    //     })
    //     console.log('arrNew',arrNew);
    // }
    // handleChange(event) {
    //     this.setState({
    //         category: event.target.value,
    //     })
    // }
}

export default connect(mapStateToProps, null)(CategoryWords);
