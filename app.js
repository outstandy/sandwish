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

var OrderBox = React.createClass({

  displayName: "Order Box",

  getInitialState: function(){
    return {
      time: "now",
      meat: "No meat",
      bread: "no bread",
      cheese: "No cheese",
      toppings: "no toppings",
      condiments: "no condiments",
      side: "No sides",
      price: "$0.00",
    };
  },

  render: function(){
    return (
      <div className="lrg-12 tile bg-white med-btm-margin med-pad order-card">
        <p id="time" className="text type-gamma red sml-btm-margin">Delivery for {this.state.time}</p>
        <p id="primarysandwich" className="text type-gamma blue">{this.state.meat} on {this.state.bread}</p>
        <p id="secondarysandwich" className="text lgt-blue type-beta sml-btm-margin">{this.state.cheese}, {this.state.toppings}, {this.state.condiments} </p>
        <p id="sides" className="text type-gamma blue sml-btm-pad btm-border">{this.state.side}</p>
        <p id="price" className="text red sml-top-pad type-delta right">{this.state.price}</p>
      </div>
    )
  }
})

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
      options: this.props.options,
      price: null
    };

  },

  render: function() {
    var props = this.props;
    var state = this.state;
    var capProp;
    var childArray;

    var meatMap = this.props.meats.map(function(meat, index){
      return (
        <div className="tile lrg-4 med-3 small-4 sml-btm-margin bg-white center rlv" key={index}>
          <img className="width-100 med-pad sml-btm-margin" src="/icons/meat-smile.svg" />
          <p className="text type-gamma abs pos-btm-0 sml-btm-pad center width-100">{meat}</p>
        </div>
      )
    });

    var breadMap = this.props.breads.map(function(bread, index){
      return (
        <div className="tile lrg-4 med-3 small-4 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text type-gamma abs pos-btm-0 sml-btm-pad center width-100">{bread}</p>
        </div>
      )
    });

    var cheeseMap = this.props.cheeses.map(function(cheese, index){
      return (
        <div className="tile lrg-4 med-3 small-4 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text type-gamma abs pos-btm-0 sml-btm-pad center width-100">{cheese}</p>
        </div>
      )
    });

    var toppingMap = this.props.toppings.map(function(topping, index){
      return (
        <div className="tile lrg-4 med-3 small-4 sml-btm-margin bg-white center rlv" key={index}>
          <img className="width-100 med-pad sml-btm-margin" src="/icons/tomato-smile.svg" />
          <p className="text type-gamma abs pos-btm-0 sml-btm-pad center width-100">{topping}</p>
        </div>
      )
    });

    var condimentMap = this.props.condiments.map(function(condiment, index){
      return (
        <div className="lrg-6 med-6 small-12 sml-btm-margin" key={index}>
          <label className="text lgt-blue type-beta tracked caps type-bold">{condiment}</label>
          <input className="bg-white border width-100 sml-top-margin" type="range" min="1" max="4" step="1" />
        </div>
      )
    });

    var sideMap = this.props.sides.map(function(side, index){
      return (
        <div className="tile lrg-4 med-3 small-4 sml-btm-margin bg-white center rlv" key={index}>
          <p className="text type-gamma abs pos-btm-0 sml-btm-pad center width-100" >{side}</p>
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
        <div className="lrg-6 med-8 sml-12">
          <div className="row med-btm-margin">
            <p className="text lgt-blue type-beta tracked caps type-bold sml-btm-margin">Pick a meat</p>
            {meatMap}
          </div>
          <div className="row med-btm-margin">
            <p className="text lgt-blue type-beta tracked caps type-bold sml-btm-margin">Pick a bread</p>
            {breadMap}
          </div>
          <div className="row med-btm-margin">
            <p className="text lgt-blue type-beta tracked caps type-bold sml-btm-margin">Pick a cheese</p>
            {cheeseMap}
          </div>
          <div className="row med-btm-margin">
            <p className="text lgt-blue type-beta tracked caps type-bold sml-btm-margin">Pick any toppings</p>
            {toppingMap}
          </div>
          <div className="row med-btm-margin">
            {condimentMap}
          </div>
          <div className="row med-btm-margin">
            <p className="text lgt-blue type-beta tracked caps type-bold sml-btm-margin">Pick a side</p>
            {sideMap}
          </div>
      </div>
      <div className="lrg-4 sml-12 lrg-push-2">
        <OrderBox />
        <a href="./confirm">
          <button className="lrg-12 bg-red center headline text-400 type-delta sml-pad white border-none lrg-btm-margin">Place Order</button>
        </a>
      </div>
    </div>
    )
  },
});


ReactDOM.render(
  <OrderFlow meats={meats} cheeses={cheeses} breads={breads} toppings={toppings} condiments={condiments} sides={sides} options={options} />,
  document.getElementById('app')
)

$('.tile').on('click', function(){
  if(!$(this).hasClass('added')){
    $(this).addClass('added');
    $(this).siblings('.tile').removeClass('added');
  }
});
