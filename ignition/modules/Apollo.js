const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// module.exports = buildModule("Apollo", (m) => {
//   const apollo = m.contract("Rocket", ["Saturn V"]);

//   m.call(apollo, "launch", []);

//   return { apollo };
// });


module.exports = buildModule("Rocket", (m) => { 
  const a = m.contract("Rocket", ["Rocket", "RKT"]) ; 
  m.call(a,"halo") ;
  m.call(a,"fundMe", [56] , {
    value: 1_000_000_000n, // 1gwei
  }) ; 

  return { a } ; 
})




 