import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  return ({
    item: selectPokemonItem(state, ownProps.match.params.itemId)
  });
};

const mapDispatchToProps = dispatch => ({
  // requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
