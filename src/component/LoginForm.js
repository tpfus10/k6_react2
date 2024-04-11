import { useRef } from "react"
export default function LoginForm({hadleLogin}) {
    const emailRef = useRef();
    const pwdRef = useRef();

    const hadleClick = () => {
        if(emailRef.current.value === '') {
            alert("email을 입력하세요.")
            emailRef.current.focus();
            return;
        }
        if(pwdRef.current.value === '') {
            alert("password를 입력하세요.")
            pwdRef.current.focus();
            return;
        }

        hadleLogin(emailRef.current.value)
    }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 pb-14">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input ref = {emailRef} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">

                                </div>
                            </div>
                            <div className="mt-2">
                                <input ref = {pwdRef} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={hadleClick}
                            className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
