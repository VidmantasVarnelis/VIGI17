const blogContainer = document.querySelector('.blog-container');
const fetchBlogPosts = async () => {
    try {
        const posts = await fetch('http://localhost:8080/api/v1/posts');
        return await posts.json();
    } catch (err) {
        console.log(err);
    }
};

const displayData = (posts) => {
    posts.forEach((post, index) => {
        const divBlogEl = document.createElement('div');
        const imgEl = document.createElement('img');
        const innerDivEl = document.createElement('div');
        const headingEl = document.createElement('h1');
        const paragraphEl = document.createElement('p');
        const btnContainerEl = document.createElement('div');
        const btnEl = document.createElement('button');
        divBlogEl.classList.add('blog');
        imgEl.src = post.img;
        innerDivEl.classList.add('inner-blog-container');
        headingEl.textContent = post.title;
        paragraphEl.textContent = post.description;
        btnContainerEl.classList.add('btn-container');
        btnEl.classList.add('blog-delete');
        btnEl.textContent = 'Delete';
        btnEl.addEventListener('click', async () => {
            try {
                await fetch(`http://localhost:8080/api/v1/post/${post._id}`, {
                    method: 'DELETE',
                });
                divBlogEl.remove();
            } catch (err) {
                console.log(err);
            }
        });
        btnContainerEl.append(btnEl);
        innerDivEl.append(headingEl, paragraphEl, btnContainerEl);
        divBlogEl.append(imgEl, innerDivEl);
        blogContainer.append(divBlogEl);
    });
};

const main = async () => {
    let posts = await fetchBlogPosts();
    let count = 0;
    document.getElementById('sort-btn').addEventListener('click', async () => {
        console.log('first');
        count++;
        blogContainer.textContent = '';
        // let posts = await fetchBlogPosts();
        posts.sort((a, b) => {
            if (count % 2 === 0) {
                return new Date(a.createdAt) - new Date(b.createdAt);
            } else {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }
        });
        displayData(posts);
    });
    if (posts.length > 0) {
        displayData(posts);
    } else {
        blogContainer.textContent = 'No Blog Posts';
    }
};
main();
document.getElementById('create-blog-btn').addEventListener('click', () => {
    location.replace('./create.html');
});
