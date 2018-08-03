import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  const poke = state.entities.pokemon[ownProps.match.params.pokemonId];
  return ({
    poke: poke
  });
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
