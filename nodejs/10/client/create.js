document.getElementById('blog-posts-btn').addEventListener('click', () => {
    location.replace('./index.html');
});
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        img: document.getElementById('img').value,
        title: document.getElementById('title').value,
        description: document.getElementById('dsc').value,
    };
    try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const post = await response.json();
        if (post.error) {
            alert('Ivyko klaida');
            return;
        } else {
            location.replace('./index.html');
        }
    } catch (err) {
        console.log(err);
    }
    console.log(data);
});
