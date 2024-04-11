import { useRecoilState } from "recoil"
import { isLogin } from "./StAtom"
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import LogOut from "./LogOut";

export default function Login() {
    //로컬 저장소의 정보를 저장하는 state 변수
    const [user, setUser] = useState();

    //로그인 여부를 저장하는 state 변수
    const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin);

    //처음 한 번만 실행되는(dependency array가 []) useEffect함수
    useEffect(() => {
        //로컬 저장소의 상태에 따라 변수의 값을 설정
        const luser = localStorage.getItem('user')
        console.log(luser)

        //로그인이 돼서 로컬 저장소에 값이 있는지의 여부에 따른 변수 설정
        if (luser) { 
            //로그인이 되어 있으면 user에 로컬 저장소의 데이터를 저장하고 로그인 여부를 업데이트
            setUser(luser); 
            setIsLoginCheck(true);
        } else {
            //로그인이 안 되어 있으면 user에 null을 저장하고 로그인 여부를 업데이트
            setUser(null)
            setIsLoginCheck(false);
        }
    }, [])


    //로그인 정보를 로컬 저장소에 저장
    const handleLogin = (u) => {
        localStorage.setItem('user', u); //localStorage는 키값을 줘야함

        //로그인 상태를 업데이트
        setUser(u);
        setIsLoginCheck(true);
    }

    const handleLogout= () => {
        localStorage.removeItem('user'); // 삭제할 아이템의 키(key)를 전달해야 함

        //로그인 상태를 업데이트
        setUser(null);
        setIsLoginCheck(false);
    }

    return (
        <div>
        {isLoginCheck 
        ? <LogOut user = {user} handleLogout = {handleLogout}/> 
        : <LoginForm hadleLogin = {handleLogin}/>}
        </div>
    )
}
