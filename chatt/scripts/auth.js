const chatUrl = document.location.href.replace('auth.html', 'chat.html');

if (!document.querySelector("#username").value) {
  const userNameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  document.querySelector("#signIn").addEventListener("click", () => {
    const login = userNameInput.value;
    const pass = passwordInput.value;

    fetch(`http://none.in.ua:7708/auth?login=${login}&pass=${pass}`)
    .then((response) => response.text())
    .then((data) => {
      if (data.length > 0) {
        document.location.href = `${chatUrl}?login=${login}&key=${data}`;
      } else {
        alert('Неверный логин или пароль');
      }
    })
    .catch(console.error)
  });

  document.querySelector("#signUp").addEventListener("click", () => {
    const login = userNameInput.value;
    const pass = passwordInput.value;

    fetch(`http://none.in.ua:7708/reg?login=${login}&pass=${pass}`)
    .then((response) => response.text())
    .then((data) => {
      if (data.length > 0) {
        document.location.href = `${chatUrl}?login=${login}&key=${data}`;
      } else {
        alert('Такой пользователь уже существует');
      }
    })
    .catch(console.error)
  });
}
