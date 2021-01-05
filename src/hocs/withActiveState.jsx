import React, {useState} from 'react';

const withActiveState = Component => props => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveState = () => setIsActive(() => !isActive);
  return (
    <Component
      {...props}
      isActive={isActive}
      onChangeActive={handleActiveState}
    />
  );
};

export default withActiveState;
