
const words = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WORDS':
            console.log(state)
            return [
                ...state,
                {
                    id: action.id,
                    category: action.category,
                    word: action.word,
                    transcription: action.transcription,
                    translation: action.translation,
                }
            ]
        case  'REMOVE_WORDS':
            return state.filter((item) => item.id !== action.id);
        case 'RESET_ACTION':
            return [];
        case 'SORT_LIST_WORDS':
            console.log('SORT_LIST_WORDS');
        //     // let arr = [];
        //     // this.props.params.words.forEach((item) => {
        //     //     arr.push(item.category);
        //     // });
        //     // let arrNew = arr.filter((item, index) => {
        //     //     return index === arr.indexOf(item);
        //     // });
        //     return state;
        default:
            return state;
    }
}
export default words;
