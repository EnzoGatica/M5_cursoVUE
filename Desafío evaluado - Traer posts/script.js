const url = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const postsContainer = document.getElementById('post-data');
    const listadoItems = data.map(post =>
      `<li>${post.id + " "}<strong>${post.title}</strong><p>${post.body}</p></li>`
    ).join('');
    postsContainer.innerHTML = `<ul>${listadoItems}</ul>`
  } catch (error) {
    console.error("Error", error);
  }
}