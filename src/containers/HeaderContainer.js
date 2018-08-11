import { connect } from 'react-redux';
import { openSidemenu } from '../actions/sidemenu';
import Header from '../components/Header';

const mapStateToProps = state => {
    return {
        sidemenu: state.sidemenu.open,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenSidemenu: () => {
            dispatch(openSidemenu());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
