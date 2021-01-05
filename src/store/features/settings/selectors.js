import {useSelector} from 'react-redux';

const useMenuState = () => useSelector(state => state.settings.menu);

export default useMenuState;
