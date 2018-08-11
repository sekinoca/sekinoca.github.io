import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = state => {
    return {
        sidemenu: state.sidemenu.open,
    }
}

export default connect(mapStateToProps)(Content);
