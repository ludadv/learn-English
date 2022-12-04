import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import s from './About.module.scss';
import WordTable from '../../WordTable/WordTable';
import SelectCategoriesWords from '../../SelectCategoriesWords/SelectCategoriesWords'
import {Container, TextField} from '@mui/material';


// redux
import {addWords, resetAction} from '../../../action';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        params: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (event) => {
            event.preventDefault();
            let data = event.target.elements;
            dispatch(
                addWords(
                    data.category.value,
                    data.word.value,
                    data.transcription.value,
                    data.translation.value,
                )
            )
            data.category.value = '';
            data.word.value = '';
            data.transcription.value = '';
            data.translation.value = '';
        },
        clearState: () => {
            dispatch(resetAction())
        }
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    componentDidUpdate() {
        console.log('params', this.props.params.words);
    }
    render() {
        return (
            <div className={s.wrapper}>
                <Container maxWidth='lg'>
                    <Button type="button"
                            variant="contained"
                            sx={{fontSize: '50px', marginRight: '30px'}}
                            onClick={()=> this.handleOpen()}
                    >
                        add words
                    </Button>
                    <Button type="button" variant="contained"
                            sx={{fontSize: '50px'}}
                            onClick={event => this.props.clearState(event)}
                    >
                        Clear table
                    </Button>
                    <Modal
                        open={this.state.open}
                        onClose={()=> this.handleClose()}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className={s.popup_form}>
                            <form className={s.popup_content} onSubmit={(event => this.props.onSubmit(event))}>
                                <div className={s.popup_input}>
                                    <TextField
                                        className={s.input}
                                        type='text'
                                        name='category'
                                        placeholder='category'
                                        value={this.props.params.words.category}
                                        required
                                    />
                                </div>
                                <div className={s.popup_input}>
                                    <TextField
                                        className={s.input}
                                        type='text'
                                        name='word'
                                        placeholder='word'
                                        value={this.props.params.words.word}
                                        required
                                    />
                                </div>
                                <div className={s.popup_input}>
                                    <TextField
                                        className={s.input}
                                        type="text"
                                        name='transcription'
                                        placeholder='transcription'
                                        value={this.props.params.words.transcription}
                                        required
                                    />
                                </div>
                                <div className={s.popup_input}>
                                    <TextField
                                        className={s.input}
                                        type="text"
                                        name='translation'
                                        placeholder='translation'
                                        value={this.props.params.words.translation}
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    sx={{fontSize: '25px', width: '100%'}}
                                    variant="contained"
                                >
                                    ADD NEW WORD
                                </Button>
                            </form>
                        </div>
                    </Modal>
                </Container>
                <SelectCategoriesWords />
                <WordTable />
            </div>
        );
    }
    handleOpen(){
        this.setState({
            open: true,
        })
    }
    handleClose(){
        this.setState({
            open: false,
        })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(About);
