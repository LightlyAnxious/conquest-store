import {useState} from 'react';

const useActiveState = () => {
  const [isActive, setIsActive] = useState(false);
  return {isActive, setIsActive};
};

export default useActiveState;
