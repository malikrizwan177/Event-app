import { useNavigate } from "react-router-dom";
import { assets } from "../assets";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [currentState, setCurrentState] = useState<Boolean>(true);

  const navigate = useNavigate();

  const onSubmitFormHandler = (e: any) => {
    e.preventDefault();

    // Simulating a login process with a delay
    if (currentState) {
      setTimeout(() => {
        // Checking if the email and password are correct
        if (email === "test@example.com" && password === "password123") {
          // Redirect to the home page after successful login
          toast.success('Login successful')
          navigate("/");
        } else {
          toast.error('Invalid email or password')
        }
      }, 500);
    } else {
      setTimeout(() => {
        // Checking if the email and password are correct
        if (name === "test" && email === "test@example.com" && password === "password123") {
          // Redirect to the home page after successful login
          toast.success('Sign up successful')
          navigate("/");
        } else {
          toast.error('This user already exists')
        }
      }, 500);
    }
  };

  const signUpToggle = () => {
    setCurrentState(!currentState)
    setEmail('')
    setPassword('')
  }

  return (
    <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-login-bg bg-no-repeat bg-cover h-[770px] sm:h-lvh flex justify-center lg:justify-end">
      <div className={`py-10 px-8 sm:px-20 flex flex-col items-center justify-start gap-5 bg-white max-w-[530px] ${currentState ? 'max-h-[700px]' : 'h-[650px]'} w-full rounded-lg my-20`}>
        <p className="font-semibold text-2xl">Sign {currentState ? 'In' : 'Up'}</p>
        <form
          onSubmit={onSubmitFormHandler}
          className="w-full mt-10 flex flex-col gap-5"
        >
          {!currentState && (
            <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979]"
          />
          )}
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979]"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979]"
          />
          {currentState ? (
            <p className="text-xs text-[#797979] text-right hover:text-primary cursor-pointer">
            Forgot Password?
          </p>
          ) : (
            <div className="flex items-center gap-2">
              <input type="checkbox" name="checkbox" id="checkbox" className="" required/>
              <p className="text-xs text-[#797979]">Agree with Terms & Conditions</p>
            </div>
          )}
          <CustomButton
            text={`Sign ${currentState ? 'In' : 'Up'}`}
            text_color={"text-white"}
            bg_color={`bg-primary`}
            hover_bg_color={`bg-cyan-400`}
            hover_text_color={``}
            other_classes={`mx-auto w-full max-w-[200px] py-3`}
            onclick_func={() => {}}
          />
        </form>
        <p className="text-xs text-[#797979] mt-5">Or SignUp with</p>
        <div className="flex gap-5">
          <div className="rounded-full p-2 shadow-custom-sd cursor-pointer w-10 h-10 flex justify-center items-center bg-slate-100 hover:bg-white">
            <img src={assets.google_icon} loading="lazy" alt="google_icon" />
          </div>
          <div className="rounded-full p-2 shadow-custom-sd cursor-pointer w-10 h-10 flex justify-center items-center bg-slate-100 hover:bg-white">
            <img src={assets.facebook_icon} loading="lazy" alt="facebook_icon" />
          </div>
        </div>
        <span className="flex gap-1 text-xs text-[#797979] mt-5">
        {currentState ? "Don't have an account?" : 'Already have an account?'}{" "}
          <p className="text-primary cursor-pointer" onClick={signUpToggle}>Sign {currentState ? 'Up' : 'In'}</p>
        </span>
      </div>
    </section>
  );
};

export default Login;
