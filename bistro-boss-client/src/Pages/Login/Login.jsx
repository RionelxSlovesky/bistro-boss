import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [loginBtnClass, setLoginBtnClass] = useState(
    "btn btn-primary btn-disabled"
  );

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
    .then(res => {
      const user = res.user;
      console.log(user)
    })
  };

  const handleValidateCaptcha = (event) => {
    event.preventDefault();
    const user_captcha_value = captchaRef.current.value;

    if (user_captcha_value.length >= 6) {
      if (validateCaptcha(user_captcha_value)) {
        setLoginBtnClass("btn btn-primary");
      } else {
        setLoginBtnClass("btn btn-primary btn-disabled");
      }
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                ref={captchaRef}
                onChange={handleValidateCaptcha}
                maxLength={6}
                placeholder="type captcha..."
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className={loginBtnClass} type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
