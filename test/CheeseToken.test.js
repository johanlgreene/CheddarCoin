var CheeseToken = artifacts.require("contracts/CheeseToken.sol");

contract('CheeseToken', function(accounts) {
  it("should start with 10^22 wei", function() {
    return CheeseToken.deployed().then(function(instance) {
      return instance.balanceOf(accounts[0]);
    }).then(function(balance) {
      console.log(balance.toNumber());
      assert.equal(balance, 10 ** 22);
    });
  });

  // it("should send some moneys", function(accounts){
  //   return CheeseToken.deployed().then(function(instance){
  //     return instance.transfer(web3.eth.accounts[1], 10000, {from: web3.eth.accounts[0]})
  //   .then(function(result){
  //     console.log("Transaction Successful");
  //     console.log(instance.balanceOf(web3.eth.accounts[1]));
  //     console.log(instance.balanceOf(web3.eth.accounts[0]));  
  //   })
  //     .catch(function(e){
  //       console.log(e);
  //     })
  //   })
  //   });
  })

  // async function cheese(){
  //   let instance = await CheeseToken.deployed();
  //   let transferReceipt = await instance.transfer(web3.eth.accounts[1], 1000), {from: web3.eth.accounts[0]});
  //   console.log(transferReceipt);
  // }
  // cheese();