export const userPostFetch = user => {
    return dispatch => {
        //отправляет информацию о пользователе в ваш бэкэнд для проверки
        // В случае успеха он ожидает ответа от объекта JSON, который выглядит следующим образом
        // {
        //     user: {
        //       username: "ImANewUser",
        //       avatar: "https://robohash.org/imanewuser.png",
        //       bio: "A new user to the app."
        //     },
        //     jwt: "aaaaaaa.bbbbbbbb.ccccccc"
        //   }
        //https://614bb851e4cc2900179eb1ab.mockapi.io/users мой мок апи тестовый с обьектами
      return fetch("https://614bb851e4cc2900179eb1ab.mockapi.io/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            //Тут прописываем логику
          } else {
            // С кодом, который мы написали в нашей функции userPostFetch, 
            // localStorage.setItem («token», data.jwt) сохранит токен 
            // («aaaaaaa.bbbbbbbb.ccccccc») в localStorage нашего пользователя. 
            // Это будет использовано позже, когда мы сохраняем логин пользователя между сессиями.
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
          }
        })
    }
  }
  
  const loginUser = userObj => ({
      type: 'LOGIN_USER',
      payload: userObj
  })