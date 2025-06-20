import { assets } from "../assets";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EventContext } from "../context/EventContext";
import CustomButton from "../components/CustomButton";
import axios from "axios";

const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [role, setRole] = useState("");
  const [currentState, setCurrentState] = useState<Boolean>(true);
  const [loginLoader, setLoginLoader] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { setToken, backendURL, navigate } = useContext(EventContext);

  const passwordsNotMatch = confirmPassword !== password;

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoader(true);
  
    if (!currentState && password !== confirmPassword) {
      toast.error("Passwords do not match");
      setLoginLoader(false);
      return;
    }
  
    try {
      const endpoint = currentState ? "/api/login" : "/api/register";
      const payload = currentState
        ? { email, password }
        : {
            name,
            role,
            phone_number: phoneNumber,
            email,
            password,
            password_confirmation: confirmPassword,
          };
  
      const { data } = await axios.post(`${backendURL}${endpoint}`, payload);
  
      if (data.success) {
        const expiration = Date.now() + 32400000;
        localStorage.setItem("token", data.token);
        localStorage.setItem("tokenExpiration", expiration.toString());
  
        setToken(data.token);
        toast.success(`Sign ${currentState ? "In" : "Up"} Successful`);
        setLoginLoader(false);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("");
        setPhoneNumber("");
        setIsDropdownOpen(false);
      }
      if (data.suceess) {
        if (
          !currentState &&
          data.message === "Successfully created user, check email for verification token!"
        ) {
          toast.success(data.message);
          setLoginLoader(false);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setRole("");
          setPhoneNumber("");
          setIsDropdownOpen(false);
          return;
        }
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      console.error("Auth Error:", error);
      setLoginLoader(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const expiration = localStorage.getItem("tokenExpiration");
      
      if (token && expiration && Date.now() < parseInt(expiration)) {
        navigate('/');
      }
    };
    
    checkAuth();
  }, [navigate]);

  const signUpToggle = () => {
    setCurrentState(!currentState);
    setEmail("");
    setPassword("");
  };

  const roleOptions = [
    { label: "User", value: "user" },
    { label: "Event Creator", value: "admin" },
  ];

  return (
    <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-login-bg bg-no-repeat bg-cover h-[950px] flex justify-center lg:justify-end">
      <div
        className={`py-10 px-8 sm:px-20 flex flex-col items-center justify-start gap-5 bg-white max-w-[530px] ${
          currentState ? "max-h-[600px]" : "h-[830px]"
        } w-full rounded-lg my-20`}
      >
        <p className="font-semibold text-2xl">
          Sign {currentState ? "In" : "Up"}
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="w-full mt-10 flex flex-col gap-5"
        >
          {!currentState && (
            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979]"
              />

              <input
                value={phoneNumber}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(
                    /[^0-9+\-\s]/g,
                    ""
                  );
                  setPhoneNumber(sanitizedValue);
                }}
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
                pattern="^[\d+\-\s]+$"
                inputMode="tel"
                className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979]"
              />

              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  onFocus={() => setIsDropdownOpen(true)}
                  onBlur={() => setIsDropdownOpen(false)}
                  name="roles"
                  id="roles"
                  required
                  className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979] appearance-none pr-10"
                >
                  <option value="" disabled selected>
                    Select Role
                  </option>
                  {roleOptions.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  {isDropdownOpen ? (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979]"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979]"
          />
          {!currentState && (
            <>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                required
                className="outline-none shadow-custom-sd p-4 w-full rounded-lg text-xs text-[#797979]"
              />
              {passwordsNotMatch && (
                <span className="text-red-500 text-xs">
                  Passwords do not match
                </span>
              )}
            </>
          )}
          {currentState ? (
            <p className="text-xs text-[#797979] text-right hover:text-primary cursor-pointer">
              Forgot Password?
            </p>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className=""
                required
              />
              <p className="text-xs text-[#797979]">
                Agree with Terms & Conditions
              </p>
            </div>
          )}
          <CustomButton
            text={`Sign ${currentState ? "In" : "Up"}`}
            bg_color="bg-primary"
            text_color="text-white"
            hover_bg_color="bg-cyan-400"
            hover_text_color="text-white"
            other_classes="mx-auto w-full max-w-[200px] py-3"
            isLoading={loginLoader}
            loaderColor="text-white"
            type="submit"
          />
        </form>
        <p className="text-xs text-[#797979] mt-5">Or SignUp with</p>
        <div className="flex gap-5">
          <div className="rounded-full p-2 shadow-custom-sd cursor-pointer w-10 h-10 flex justify-center items-center bg-slate-100 hover:bg-white">
            <img src={assets.google_icon} loading="lazy" alt="google_icon" />
          </div>
        </div>
        <span className="flex gap-1 text-xs text-[#797979] mt-5">
          {currentState ? "Don't have an account?" : "Already have an account?"}{" "}
          <p className="text-primary cursor-pointer" onClick={signUpToggle}>
            Sign {currentState ? "Up" : "In"}
          </p>
        </span>
      </div>
    </section>
  );
};

export default Login;
