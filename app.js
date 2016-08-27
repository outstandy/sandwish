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
  "Condiments,",
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
      options: this.props.options
    };
  },

  render: function(){
    var optionMap = function(){
      this.props.options.map(function(){
        return(
          <p key={index}>Hi!</p>
        )
      })
    };
    return (
      <div className="orderFlow">
      </div>
    )
  }
});


ReactDOM.render(
  <OrderFlow options={options} />,
  document.getElementById('app')
)
