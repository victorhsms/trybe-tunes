import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './Card';

class AlbumList extends Component {
  render() {
    const { artist, albuns } = this.props;
    const typicalRender = (
      <div>
        <p>{`Resultado de álbuns de: ${artist}`}</p>
        {albuns.map((album) => {
          const { collectionId, collectionName, artistName, artworkUrl100 } = album;
          return (
            <Link
              to={ `/album/${collectionId}` }
              data-testid={ `link-to-album-${collectionId}` }
              key={ collectionId }
            >
              <Card
                album={ collectionName }
                artist={ artistName }
                image={ artworkUrl100 }
              />
            </Link>);
        })}
      </div>
    );
    return (
      <div>
        {albuns.length !== 0
          ? typicalRender
          : <h2>Nenhum álbum foi encontrado</h2>}
      </div>
    );
  }
}

AlbumList.propTypes = {
  artist: PropTypes.string.isRequired,
  albuns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AlbumList;
