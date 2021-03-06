var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStores');

var Movie = React.createClass({
    render: function() {
      var link = 'https://www.imdb.com/title/' + this.props.movie.imdbID;
      return(
        <div className="well">
            <div className="row">
                <div className="col-md-5">
                    <h4>Poster</h4>
                    <img className="thumbnail" src={this.props.movie.Poster} />

                </div>
                <div className="col-md-7">
                    <h4><strong>{this.props.movie.Title}</strong></h4>
                    <ul className="list-group">
                        <li className="list-group-item"><h5>Year: {this.props.movie.Year}</h5></li>
                        <li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
                    </ul>
                        <a className="btn btn-primary" href={link} target="_blank">View on IMDB</a>
                </div>
            </div>
        </div>
      )
    }
});

module.exports = Movie;
