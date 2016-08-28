var meats = [
  "Ham",
  "Turkey",
  "Roast Beef",
  "Pastrami",
  "Salami",
  "Chicken Breast"
];

var breads = [
  "White",
  "Wheat",
  "Rye",
  "French",
  "Wrap"
];

var cheeses = [
  "Provolone",
  "Swiss",
  "Cheddar",
  "American"
];

var toppings = [
  "Lettuce",
  "Onions",
  "Pickles",
  "Tomato",
  "Sprouts"
];

var condiments = [
  "Mayonnaise",
  "Mustard"
];

var sides = [
  "Potato salad",
  "Pasta salad",
  "Chips",
  "Apple",
  "Cookie"
];

var options = [
  "Meat",
  "Bread",
  "Cheese",
  "Toppings",
  "Condiments",
  "Side"
];
//
// var data = [
//   [
//     "Ham",
//     "Turkey",
//     "Roast Beef",
//     "Pastrami",
//     "Salami",
//     "Chicken Breast"
//   ],
//   [
//     "White",
//     "Wheat",
//     "Rye",
//     "French",
//     "Wrap"
//   ],
//   [
//     "Provolone",
//     "Swiss",
//     "Cheddar",
//     "American"
//   ],
//   [
//     "Lettuce",
//     "Onions",
//     "Pickles",
//     "Tomato",
//     "Sprouts"
//   ],
//   [
//     "Mayonnaise",
//     "Mustard"
//   ],
//   [
//     "Potato salad",
//     "Pasta salad",
//     "Chips",
//     "Apple",
//     "Cookie"
//   ]
// ];
//
// var OptionGroupMeat = React.createClass({
//   displayName: "Option Group Meat",
//   propTypes: {
//     meats: React.PropTypes.arrayOf(
//       React.PropTypes.string
//     ),
//   },
//
//   getInitialState: function(){
//     return {
//       meats: this.props.meats
//     }
//   },
//
//   render: function(){
//     return (
//       this.props.meats.map(function(meat, idx){
//         return (
//           <div className="MeatOptions">
//             <p className="MeatOption">
//               {this.props.meats}
//             </p>
//           </div>
//         )
//       })
//     )
//   }
// })

var OrderFlow = React.createClass({
  displayName: "Order Flow",
  propTypes: {
    options: React.PropTypes.arrayOf(
      React.PropTypes.string
    )
  },

  getInitialState: function(){
    return {
      meats: this.props.meats,
      breads: this.props.breads,
      cheeses: this.props.cheeses,
      toppings: this.props.toppings,
      condiments: this.props.condiments,
      sides: this.props.sides,
      options: this.props.options
    };
  },

  render: function() {
    var props = this.props;
    var state = this.state;

    var meatMap = this.props.meats.map(function(meat, index){
      return (
        <div className="tile lrg-4 med-3 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text abs pos-btm-0 sml-btm-pad center width-100">{meat}</p>
        </div>
      )
    });

    var breadMap = this.props.breads.map(function(bread, index){
      return (
        <div className="tile lrg-4 med-3 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text abs pos-btm-0 sml-btm-pad center width-100">{bread}</p>
        </div>
      )
    });

    var cheeseMap = this.props.cheeses.map(function(cheese, index){
      return (
        <div className="tile lrg-4 med-3 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text abs pos-btm-0 sml-btm-pad center width-100">{cheese}</p>
        </div>
      )
    });

    var toppingMap = this.props.toppings.map(function(topping, index){
      return (
        <div className="tile lrg-4 med-3 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text abs pos-btm-0 sml-btm-pad center width-100">{topping}</p>
        </div>
      )
    });

    var condimentMap = this.props.condiments.map(function(condiment, index){
      return (
        <div className="tile lrg-4 med-3 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text abs pos-btm-0 sml-btm-pad center width-100">{condiment}</p>
        </div>
      )
    });

    var sideMap = this.props.sides.map(function(side, index){
      return (
        <div className="tile lrg-4 med-3 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text abs pos-btm-0 sml-btm-pad center width-100">{side}</p>
        </div>
      )
    });

    var optionMap = this.props.options.map( function(option, index){
      return (
        <div key={index}>
          <p>Select any {option}</p>
        </div>
        )
      });
    return (
      <div className="orderFlow">
        <div className="lrg-6 med-8">
          <div className="row">
            {optionMap}
          </div>
          <div className="row med-btm-margin">
            {meatMap}
          </div>
          <div className="row med-btm-margin">
            {breadMap}
          </div>
          <div className="row med-btm-margin">
            {cheeseMap}
          </div>
          <div className="row med-btm-margin">
            {toppingMap}
          </div>
          <div className="row med-btm-margin">
            {condimentMap}
          </div>
          <div className="row med-btm-margin">
            {sideMap}
          </div>
      </div>
      <div className="tile lrg-4 lrg-push-2">Hi!</div>
    </div>
    )
  }
});


ReactDOM.render(
  <OrderFlow meats={meats} cheeses={cheeses} breads={breads} toppings={toppings} condiments={condiments} sides={sides} options={options} />,
  document.getElementById('app')
)
