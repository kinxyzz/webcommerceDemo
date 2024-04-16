"use client";

import type { Database } from "@/lib/database.type";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useReducer } from "react";
import Button from "../components/ui/Button";
import { InitialRAction, InitialRUser } from "../utils/interface";

const initialState: InitialRUser = {
  email: "justdemo@gmail.com",
  password: "password",
  firstName: "",
  lastName: "",
  showMore: false,
  errorLogin: null,
  phoneNumber: "",
};

const reducer: React.Reducer<InitialRUser, InitialRAction<string>> = (
  state,
  action
) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    case "firstName":
      return {
        ...state,
        firstName: action.payload,
      };
    case "lastName":
      return {
        ...state,
        lastName: action.payload,
      };
    case "showMore":
      return {
        ...state,
        showMore: action.payload,
      };

    case "errorLogin":
      return {
        ...state,
        errorLogin: action.payload,
      };

    case "phoneNumber":
      return {
        ...state,
        phoneNumber: action.payload,
      };

    default:
      return state;
  }
};

export default function Login() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    email,
    password,
    firstName,
    lastName,
    showMore,
    errorLogin,
    phoneNumber,
  } = state;

  const handleSignUp = async () => {
    alert("Ini hanya demo");
  };

  const handleSignIn = async () => {
    alert("ini hanya demo");
  };

  return (
    <div className="relative block h-screen w-screen bg-slate-100 bg-cover bg-center bg-no-repeat">
      <div className=" absolute top-0 left-0 w-screen flex flex-col gap-4 justify-center items-center h-screen">
        <div className="flex flex-wrap">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-yellow-600">
            Lorem ipsum dolor
          </h2>
        </div>
        <div className="flex z-10 bg-white rounded-md justify-center flex-col items-center px-10 py-4">
          <div className="">
            <h3 className="text-2xl font-semibold text-gray-600 text-center ">
              {showMore ? "Sign Up" : "Login"}
            </h3>
            <p className="text-red-600 text-center">{errorLogin}</p>
          </div>
          <div className="">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow mb-2 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                placeholder="your email"
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
                value={email}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow mb-2 appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                placeholder="your password"
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
                value={password}
              />
            </div>

            {showMore && (
              <>
                <div
                  className={`${
                    showMore ? "h-fit" : "h-0"
                  } duration-300 transition ease-in-out `}
                >
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow mb-2 appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="phoneNumber"
                    placeholder="phone number"
                    onChange={(e) =>
                      dispatch({ type: "phoneNumber", payload: e.target.value })
                    }
                    value={phoneNumber}
                  />

                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstname"
                  >
                    First name
                  </label>
                  <input
                    className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="firstname"
                    placeholder="first name"
                    onChange={(e) =>
                      dispatch({ type: "firstName", payload: e.target.value })
                    }
                    value={firstName}
                  />

                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow mb-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="lastname"
                    placeholder="last name"
                    onChange={(e) =>
                      dispatch({ type: "lastName", payload: e.target.value })
                    }
                    value={lastName}
                  />
                </div>
              </>
            )}
            <div className="flex flex-col gap-2 mt-8">
              {!showMore ? (
                <Button className="bg-gray-700" onClick={handleSignIn}>
                  Sign in
                </Button>
              ) : (
                <Button className="bg-gray-700" onClick={handleSignUp}>
                  Sign up
                </Button>
              )}

              <p
                className="text-center cursor-pointer py-2 active:bg-slate-900 hover:text-white rounded-md hover:bg-yellow-600"
                onClick={() =>
                  dispatch({ type: "showMore", payload: !showMore })
                }
              >
                {showMore ? "Show Less" : "Sign up?"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
