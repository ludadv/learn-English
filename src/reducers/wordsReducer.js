
const words = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WORDS':
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
        case 'RESET_LIST':
            return [];
        default:
            return state;
    }
}

export default words;
