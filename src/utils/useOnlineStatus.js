import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
    // check if online using event listener
    useEffect(() => {
      window.addEventListener("offline", () => {
        setIsOnline(false)
      })
      window.addEventListener("online", () => {
        setIsOnline(true)
      })
    }, [])
    return isOnline;
}

export default useOnlineStatus;