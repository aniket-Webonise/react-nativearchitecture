import {connect} from 'react-redux';
import {callGameAPI} from '../actions/service-call-action';
import GamesScreen from '../features/tabNavigation/GamesScreen/GamesScreen';

const mapStateToProps = state => ({
  isLoading: state.serviceReducer.isLoading,
  error: state.serviceReducer.error,
  data: state.serviceReducer.data,
});

const mapDispatchToProps = {
  callGameAPI,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamesScreen);
