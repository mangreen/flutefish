var React = require('react'),
    constants = require('../config/constants'),
    mixins = require('goflux').mixins,

    Link = require('./Link.jsx');

module.exports = React.createClass({
  mixins: [mixins.GofluxMixin(React)],

  render: function() {
    var products = this.gofluxStore('ProductStore').all()
                       .map(function(product, idx) {
      return (
        <li key={product.id}>
          <Link to="product" params={{id: product.id}}>{product.name}</Link>
        </li>
      );
    });

    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products}
        </ul>
      </div>
    );
  }
});