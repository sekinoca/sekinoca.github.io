import { connect } from 'react-redux';
import { openSidemenu, closeSidemenu } from '../actions/sidemenu';
import Sidemenu from '../components/Sidemenu';

const mapStateToProps = state => {
    return {
        open: state.sidemenu.open,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpen: () => {
            dispatch(openSidemenu());
        },
        onClose: () => {
            dispatch(closeSidemenu());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);
