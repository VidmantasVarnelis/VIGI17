const USER_DATA = localStorage.getItem('userData');

const fetchWord = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/word', {
            headers: {
                Authorization: `Bearer ${JSON.parse(USER_DATA).token}`,
            },
        });
        return await response.json();
    } catch (err) {
        location.replace('../login/login.html');
        console.log(err);
    }
};
const postWin = async (wordId, misses) => {
    try {
        const response = await fetch('http://localhost:8080/api/game', {
            method: 'POST',
            body: JSON.stringify({
                misses,
                word_id: wordId,
                user_id: JSON.parse(USER_DATA).user.id,
            }),
            headers: {
                Authorization: `Bearer ${JSON.parse(USER_DATA).token}`,
                'Content-Type': 'application/json',
            },
        });
        return await response.json();
    } catch (err) {
        location.replace('../login/login.html');
        console.log(err);
    }
};
const getLeaders = async (wordId) => {
    try {
        const response = await fetch(
            `http://localhost:8080/api/game/${wordId}`,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(USER_DATA).token}`,
                },
            }
        );
        return await response.json();
    } catch (err) {
        location.replace('../login/login.html');
        console.log(err);
    }
};
const displayWord = (word, guessedLetters) => {
    const secretWord = word
        .split('')
        .map((letter) =>
            guessedLetters.includes(letter.toLowerCase()) ? letter : ' _ '
        )
        .join('');
    document.getElementById('word_output').textContent = secretWord;
    return secretWord === word;
};

document.addEventListener('DOMContentLoaded', async () => {
    if (!localStorage.getItem('userData')) {
        location.replace('../login/login.html');
    }
    const { word, id } = await fetchWord();

    const guessedLetters = [];
    displayWord(word, guessedLetters);
    document
        .getElementById('keyboard')
        .querySelectorAll('button')
        .forEach((btn) => {
            btn.addEventListener('click', async (event) => {
                const value = event.target.value.toLowerCase();
                if (!guessedLetters.includes(value)) {
                    guessedLetters.push(value);
                    event.target.disabled = true;
                }
                const game = displayWord(word, guessedLetters);

                let misses = 0;
                guessedLetters.forEach((letter) => {
                    if (!word.toLowerCase().includes(letter) && !game) misses++;
                });
                if (misses > 0) {
                    document.getElementById(
                        'wrong_answers'
                    ).textContent = `Wrong answers - ${misses}`;
                    //.textContent = 'Wrong ansers - ' + misses
                }
                // if (game) {
                //     await postWin(id, misses);
                //     const leaders = await getLeaders(id);
                //     console.log(leaders);
                // }
            });
        });
    document.addEventListener('keydown', async (event) => {
        const value = event.key.toLowerCase();
        if (
            !guessedLetters.includes(value) &&
            event.keyCode >= 65 &&
            event.keyCode <= 90
        ) {
            guessedLetters.push(value);
            const buttons = [
                ...document
                    .getElementById('keyboard')
                    .querySelectorAll('button'),
            ];
            const button = buttons.find((btn) => btn.value === value);
            button.disabled = true;
        }
        const game = displayWord(word, guessedLetters);
        let misses = 0;
        guessedLetters.forEach((letter) => {
            if (!word.toLowerCase().includes(letter) && !game) misses++;
        });
        if (misses > 0) {
            document.getElementById(
                'wrong_answers'
            ).textContent = `Wrong answers - ${misses}`;
        }
        // if (game) {
        //     await postWin(id, misses);
        //     const leaders = await getLeaders(id);
        //     console.log(leaders);
        // }
    });
});
