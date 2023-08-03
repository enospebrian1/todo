import { useState } from "react";
import "../components/style.css";
import { useNavigate } from "react-router-dom";
import account from "../components/Account";

function HandleLogin(email, password, users, setLogin, navigate) {
  //get index
  const index = users.findIndex((user) => user.email == email);
  console.log(index);
  if (index !== -1) {
    const user = users[index];
    if (user && user.password == password) {
      setLogin(user);
      alert("You are logged in");
      return navigate(`/dashboard/${user.name}`);
    }
  }

  alert("invalid username or password");
  return navigate(`/login`);
}

function getVal(input_text) {
  const value = document.getElementById(input_text).value;
  console.log(value);
  return value;
}

function Login({ users, setUser, setLogin }) {
  const navigate = useNavigate();

  return (
    <div
      id="login-container"
      classNameName="container"
      style={{ width: "40%", minWidth: "360px" }}
    >
      <div
        className="d-flex align-items-center py-4 bg-body-tertiary"
        data-new-gr-c-s-check-loaded="14.1117.0"
        data-gr-ext-installed=""
        style={{
          width: "60%",
          minWidth: "360px",
          borderRadius: "15px",
          padding: "15px",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
          <symbol id="check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
          </symbol>
          <symbol id="circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
          </symbol>
          <symbol id="moon-stars-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
          </symbol>
          <symbol id="sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
          </symbol>
        </svg>

        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
          <button
            className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
            id="bd-theme"
            type="button"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            aria-label="Toggle theme (dark)"
          >
            <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
              <use href="#moon-stars-fill"></use>
            </svg>
            <span className="visually-hidden" id="bd-theme-text">
              Toggle theme
            </span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end shadow"
            aria-labelledby="bd-theme-text"
          >
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center"
                data-bs-theme-value="light"
                aria-pressed="false"
              >
                <svg
                  className="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#sun-fill"></use>
                </svg>
                Light
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center active"
                data-bs-theme-value="dark"
                aria-pressed="true"
              >
                <svg
                  className="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#moon-stars-fill"></use>
                </svg>
                Dark
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item d-flex align-items-center"
                data-bs-theme-value="auto"
                aria-pressed="false"
              >
                <svg
                  className="bi me-2 opacity-50 theme-icon"
                  width="1em"
                  height="1em"
                >
                  <use href="#circle-half"></use>
                </svg>
                Auto
                <svg className="bi ms-auto d-none" width="1em" height="1em">
                  <use href="#check2"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <main className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal text-center">Welcome back!</h1>
            <p className="mb-3 fw-normal text-center">
              Let's help you meet your tasks
            </p>
            <div className="flex-row-center my-3">
              <svg
                width="172"
                height="170"
                viewBox="0 0 172 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_216)">
                  <path
                    d="M84.7664 40.3983H83.8321V14.8099C83.8321 10.8822 82.2718 7.11536 79.4945 4.33805C76.7172 1.56073 72.9503 0.000457764 69.0226 0.000457764H14.81C10.8822 0.000457764 7.1154 1.56073 4.33809 4.33805C1.56077 7.11536 0.000488281 10.8822 0.000488281 14.8099V155.19C0.000488281 159.118 1.56077 162.885 4.33809 165.662C7.1154 168.439 10.8822 170 14.81 170H69.0224C72.9501 170 76.7169 168.439 79.4943 165.662C82.2716 162.885 83.8318 159.118 83.8318 155.19V58.6125H84.7662L84.7664 40.3983Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M69.6201 3.85301H62.5436C62.8692 4.65092 62.9935 5.51667 62.9057 6.37396C62.8178 7.23125 62.5204 8.05378 62.0398 8.76906C61.5591 9.48434 60.9099 10.0704 60.1493 10.4757C59.3887 10.8809 58.5402 11.0928 57.6784 11.0928H26.6208C25.7591 11.0928 24.9107 10.8808 24.1503 10.4756C23.3898 10.0704 22.7407 9.48434 22.26 8.76916C21.7794 8.05398 21.482 7.23157 21.3941 6.37439C21.3062 5.51721 21.4304 4.65157 21.7559 3.85371H15.1454C12.2121 3.85371 9.39895 5.01895 7.32481 7.09308C5.25067 9.16722 4.08545 11.9804 4.08545 14.9136V155.087C4.08545 158.02 5.25067 160.833 7.32481 162.908C9.39895 164.982 12.2121 166.147 15.1454 166.147H69.618C72.5513 166.147 75.3644 164.982 77.4385 162.908C79.5127 160.833 80.6779 158.02 80.6779 155.087V14.9129C80.6779 11.9796 79.5127 9.16652 77.4385 7.09238C75.3644 5.01825 72.5513 3.85301 69.618 3.85301H69.6201Z"
                    fill="white"
                  />
                  <path
                    d="M73.7502 31.4147H11.0162V138.585H73.7502V31.4147Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M42.4763 158.314C45.8305 158.314 48.5496 155.594 48.5496 152.24C48.5496 148.886 45.8305 146.167 42.4763 146.167C39.1221 146.167 36.403 148.886 36.403 152.24C36.403 155.594 39.1221 158.314 42.4763 158.314Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M71.5075 150.057L70.8137 156.764L74.7452 156.301L75.2077 150.751L71.5075 150.057Z"
                    fill="#FFB9B9"
                  />
                  <path
                    d="M61.1007 99.1771C61.1007 99.1771 40.9799 118.604 53.6999 124.617H57.6314C57.6314 124.617 66.1884 110.508 70.3514 110.741L71.5077 124.155L70.814 151.214L75.902 151.445C75.902 151.445 78.9085 137.8 78.6772 130.168L83.9965 101.952L61.1007 99.1771Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M54.8557 123.692L57.631 124.617C57.631 124.617 68.5007 122.073 69.1936 122.305L71.3456 122.29L71.2755 116.754H62.0255L54.8557 123.692Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M75.2078 155.377C75.2078 155.377 71.0448 153.526 70.351 155.377C69.6572 157.227 69.8885 162.546 69.8885 162.546C70.4434 163.613 70.607 164.84 70.351 166.015C69.8885 167.865 72.2013 168.79 75.2078 167.865C78.2143 166.94 78.2143 164.627 78.2143 164.627L75.2078 155.377Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M78.6767 116.29C78.6767 116.29 81.9145 114.44 81.6832 117.215C81.4913 119.048 81.0235 120.842 80.2955 122.535C80.2955 122.535 83.302 130.398 80.2955 131.092C77.289 131.785 74.9763 130.167 74.9763 129.01C74.9763 127.854 78.6767 116.29 78.6767 116.29Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M68.5007 52.9228L68.9635 61.7113L72.895 65.1799L77.2893 58.9356V52.6916L68.5007 52.9228Z"
                    fill="#FFB9B9"
                  />
                  <path
                    d="M71.5073 61.7111L68.8598 59.7438L67.1132 62.4048L59.25 67.0299L63.875 79.0559L64.1063 90.8509C64.1063 90.8509 55.5493 99.6392 60.6373 100.796C65.7253 101.952 83.7645 104.496 84.6895 102.415C85.6145 100.333 83.5333 78.8249 83.5333 78.8249L84.227 60.5544L77.2895 58.0459L71.5073 61.7111Z"
                    fill="#FAA885"
                  />
                  <path
                    d="M57.3997 76.3587C57.3997 76.3587 55.5494 89.4629 59.0187 89.4629C61.0789 89.47 63.121 89.0773 65.0317 88.3067L62.2564 81.1372L63.4127 76.2804L57.3997 76.3587Z"
                    fill="#FFB9B9"
                  />
                  <path
                    d="M62.7189 87.8449L65.2629 88.3074C65.2629 88.3074 72.6637 83.6823 73.1262 83.4506C73.5887 83.2189 65.7254 79.2876 65.7254 79.2876L60.4062 81.3691L62.7189 87.8449Z"
                    fill="#FFB9B9"
                  />
                  <path
                    opacity="0.1"
                    d="M65.7255 79.2876L62.3852 80.5945L63.413 76.2811L57.4 76.3584C57.4 76.3584 55.5497 89.4627 59.019 89.4627C61.0792 89.4697 63.1213 89.0771 65.032 88.3064L65.0145 88.2611L65.2632 88.3064C65.2632 88.3064 72.664 83.6814 73.1265 83.4497C73.589 83.218 65.7255 79.2876 65.7255 79.2876Z"
                    fill="black"
                  />
                  <path
                    d="M73.8511 57.308C77.4983 57.308 80.455 54.3512 80.455 50.704C80.455 47.0567 77.4983 44.1 73.8511 44.1C70.2038 44.1 67.2471 47.0567 67.2471 50.704C67.2471 54.3512 70.2038 57.308 73.8511 57.308Z"
                    fill="#FFB9B9"
                  />
                  <path
                    d="M68.0123 43.2537L66.722 42.7372C66.722 42.7372 69.4199 39.7669 73.1734 40.0253L72.1176 38.8629C72.1176 38.8629 74.6983 37.8298 77.0442 40.5417C78.2776 41.9666 79.7043 43.6431 80.5947 45.5307H81.9767L81.3999 46.8005L83.4179 48.071L81.346 47.8427C81.5422 48.9391 81.475 50.0664 81.15 51.1317L81.2056 52.1361C81.2056 52.1361 78.8041 48.4204 78.8041 47.9039V49.1954C78.8041 49.1954 77.5137 48.0331 77.5137 47.2583L76.8099 48.1623L76.457 46.7395L72.1169 48.16L72.8207 46.9976L70.1228 47.3851L71.1786 45.9647C71.1786 45.9647 68.1289 47.6435 68.0114 49.0642C67.8939 50.4848 66.3692 52.2926 66.3692 52.2926L65.6654 51.0011C65.6654 51.0011 64.6106 45.1908 68.0123 43.2537Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M79.6018 72.3496C78.4345 73.7916 77.7832 75.5826 77.7515 77.4376L65.494 76.9751C65.494 76.9751 62.2562 76.5126 62.2562 78.8253V81.1379C62.2562 81.1379 63.8752 80.4441 64.8002 81.1379C65.7252 81.8316 75.67 87.8449 80.5268 85.5321C85.3835 83.2194 86.5398 74.1998 86.5398 74.1998C86.5398 74.1998 82.1458 70.4994 79.6018 72.3496Z"
                    fill="#FFB9B9"
                  />
                  <path
                    d="M82.3782 60.7858L84.2284 60.5546C84.2284 60.5546 87.9287 61.0171 87.4662 68.1866C87.0037 75.3561 86.7724 75.8186 86.7724 75.8186C86.7724 75.8186 81.9157 71.4244 78.4467 73.5061L82.3782 60.7858Z"
                    fill="#FAA885"
                  />
                  <path
                    d="M60.175 67.031H59.25C58.0514 68.545 57.3994 70.4194 57.3997 72.3503C57.3785 74.4184 57.1067 76.4763 56.5903 78.4789L63.8755 77.2071L60.175 67.031Z"
                    fill="#FAA885"
                  />
                  <path
                    d="M171.86 31.4087H104.706V44.6674H171.86V31.4087Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M106.137 43.2359H170.429V32.8413H106.137V43.2359Z"
                    fill="white"
                  />
                  <path
                    d="M111.765 33.9917C112.549 33.9917 113.314 34.224 113.966 34.6591C114.617 35.0943 115.125 35.7129 115.424 36.4366C115.724 37.1602 115.803 37.9566 115.65 38.7248C115.497 39.4931 115.12 40.1988 114.566 40.7526C114.012 41.3065 113.306 41.6837 112.538 41.8365C111.77 41.9894 110.973 41.9109 110.25 41.6112C109.526 41.3114 108.908 40.8038 108.472 40.1525C108.037 39.5012 107.805 38.7355 107.805 37.9522C107.805 36.9018 108.222 35.8944 108.965 35.1517C109.708 34.4089 110.715 33.9917 111.765 33.9917V33.9917Z"
                    fill="#FAA885"
                  />
                  <path
                    d="M160.323 36.4023H121.236V37.2633H160.323V36.4023Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M160.323 38.6408H121.236V39.5018H160.323V38.6408Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M171.86 50.3293H104.706V63.588H171.86V50.3293Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M106.137 62.1565H170.429V51.7619H106.137V62.1565Z"
                    fill="white"
                  />
                  <path
                    d="M111.765 60.8333C113.953 60.8333 115.726 59.0601 115.726 56.8728C115.726 54.6855 113.953 52.9123 111.765 52.9123C109.578 52.9123 107.805 54.6855 107.805 56.8728C107.805 59.0601 109.578 60.8333 111.765 60.8333Z"
                    fill="#FAA885"
                  />
                  <path
                    d="M160.323 55.3229H121.236V56.1839H160.323V55.3229Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M160.323 57.5614H121.236V58.4224H160.323V57.5614Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M171.86 69.2499H104.706V82.5086H171.86V69.2499Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M106.137 81.0771H170.429V70.6824H106.137V81.0771Z"
                    fill="white"
                  />
                  <path
                    d="M111.765 79.7538C113.953 79.7538 115.726 77.9807 115.726 75.7934C115.726 73.606 113.953 71.8329 111.765 71.8329C109.578 71.8329 107.805 73.606 107.805 75.7934C107.805 77.9807 109.578 79.7538 111.765 79.7538Z"
                    fill="#FAA885"
                  />
                  <path
                    d="M160.323 74.2435H121.236V75.1045H160.323V74.2435Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M160.323 76.482H121.236V77.343H160.323V76.482Z"
                    fill="#E6E6E6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_216">
                    <rect width="171.86" height="170" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="form-floating mx-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mx-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3 mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>

            <div
              className="form-check text-center my-3"
              style={{ marginLeft: "0", paddingLeft: "0", color: "red" }}
            >
              <a
                href="/"
                style={{ marginLeft: "0", paddingLeft: "0", color: "red" }}
              >
                <label className="form-check-label" for="flexCheckDefault">
                  Forget Password
                </label>
              </a>
            </div>

            <button
              onClick={() =>
                HandleLogin(
                  getVal("floatingInput"),
                  getVal("floatingPassword"),
                  users,
                  setLogin,
                  navigate
                )
              }
              className="btn btn-primary w-100 py-2"
              type="submit"
              style={{ backgroundColor: "#FAA885" }}
            >
              Sign in
            </button>
            <div
              className="form-check text-center my-3"
              style={{ marginLeft: "0", paddingLeft: "0" }}
            >
              <label>
                {" "}
                Don't have an account ?
                <a
                  href="/register"
                  className="form-check-label"
                  for="flexCheckDefault"
                  style={{
                    marginLeft: "0",
                    paddingLeft: "4px",
                    color: "red",
                  }}
                >
                  Sign Up
                </a>
              </label>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;
