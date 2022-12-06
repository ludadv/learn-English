let nextWordId = 0;
export const addWords = (category, word, transcription, translation) => ({
    type: 'ADD_WORDS',
    id: nextWordId++,
    category,
    word,
    transcription,
    translation,
});

export const removeWords = (id) => ({
    type: 'REMOVE_WORDS',
    id,
});

export const resetList = () => ({
    type: 'RESET_LIST',
});


