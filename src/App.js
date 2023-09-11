import './App.css';
import { auth } from "./firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(JSON.stringify(userData, undefined, 4));
  return (
    <div>
      <h3> firebase auth 구글 로그인 테스트</h3>
      <button onClick={handleGoogleLogin}>로그인</button>
      <h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>
      <div>
        {userData
          ? "name : " + userData.displayName+" email : "+userData.email
          : "로그인 버튼을 눌러주세요 :)"}
      </div>
    </div>
  );
}

export default App;
