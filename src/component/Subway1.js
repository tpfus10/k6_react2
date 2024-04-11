import { useRecoilValue } from "recoil"
import { isLogin } from "./StAtom"
import Login from "./Login";
// 모든 로그인 상태는 login에서 관리되고 있음

export default function Subway1() {
  const isLoginCheck = useRecoilValue(isLogin);

  return (
    <div>
      {isLoginCheck
        ? "Subway"
        : <Login />} 
    </div>
  );
}