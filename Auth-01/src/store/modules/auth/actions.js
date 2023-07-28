let timer; // one global variable!

export default {
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }
    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        // tokenExpiration: null,
      });
    }
  },
  async signin(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signin',
    });
  },
  async signup(context, payload) {
<<<<<<< HEAD
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDNFIFcsoZZveDXx32swDMlbbazaLij-b4',
      {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
=======
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNFIFcsoZZveDXx32swDMlbbazaLij-b4';

    if (mode === 'sugnup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNFIFcsoZZveDXx32swDMlbbazaLij-b4';
    }
>>>>>>> ad902d0fc4343dd36ec00c7dbb1e60d987bc914f

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      // console.log(responseData);
      const error = new Error(
        responseData.message || 'Failed to authenticate. Check your login data.'
      );
      throw error;
    }
    // console.log(responseData);

    const expiresIn = +responseData.expiresIn * 1000; // + convert to number right expression ( ms )
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;

    //Use LocalStorage Browser
    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate); // store it in only localStorage!

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      // tokenExpiration: expirationDate,
    });
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer); // destroy timeout only ones

    context.commit('setUser', {
      token: null,
      userId: null,
      // tokenExpiration: null,
    });
  },
  autoLogout(context) {
    context.dispatch('logout'); // invoke actions
    context.commit('setAutoLogout'); // invoke mutations
  },
};
