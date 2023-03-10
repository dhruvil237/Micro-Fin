//var abidef = '[{"constant":true,"inputs":[],"name":"displayAllowedForLoan","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getcurrtime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"bubble_sort","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPoolMoney","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"amounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newadd","type":"address"}],"name":"onlynew","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount_","type":"uint256"}],"name":"req_Money","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_master_address","type":"address"}],"name":"list_refrences","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pay_loan","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ad1","type":"address"}],"name":"check_time","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_req_member","type":"address"},{"name":"__aadhaar","type":"uint256"}],"name":"add_Member","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_aadhaar","type":"uint256"}],"name":"init_members","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"assign_loan_amount_from_pool","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"__amount","type":"uint256"}],"name":"pool","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"personWhoTried","type":"address"},{"indexed":false,"name":"personWhoWasAdded","type":"address"}],"name":"SomeoneTriedToAddSomeone","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"personWhoSent","type":"address"},{"indexed":false,"name":"moneyHeSent","type":"uint256"}],"name":"SomeoneAddedMoneyToThePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"personWhoRequested","type":"address"},{"indexed":false,"name":"requestedM","type":"uint256"}],"name":"SomeoneRequestedForMoney","type":"event"}]';
//var bytecode = '6060604052600160035560016009556000600f55426000819055506116d9806100296000396000f3006060604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302c3d9cb146100d257806306874e8b1461013c578063162afafc14610165578063309652ec1461017a57806345f0a44f146101a357806348f1093c146101da57806350da36a9146102135780636f1863d81461023657806373bce8bd146102985780639965e15e146102ad578063b77366be146102fa578063d1eea4881461033c578063f628a31d1461035f578063fe31311214610388575b005b34156100dd57600080fd5b6100e56103a0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561012857808201518184015260208101905061010d565b505050509050019250505060405180910390f35b341561014757600080fd5b61014f61049b565b6040518082815260200191505060405180910390f35b341561017057600080fd5b6101786104ac565b005b341561018557600080fd5b61018d6105ba565b6040518082815260200191505060405180910390f35b34156101ae57600080fd5b6101c460048080359060200190919050506105d9565b6040518082815260200191505060405180910390f35b34156101e557600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105fd565b005b341561021e57600080fd5b610234600480803590602001909190505061068a565b005b341561024157600080fd5b61026d600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506107cf565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b34156102a357600080fd5b6102ab610a78565b005b34156102b857600080fd5b6102e4600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bda565b6040518082815260200191505060405180910390f35b341561030557600080fd5b61033a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c26565b005b341561034757600080fd5b61035d6004808035906020019091905050611215565b005b341561036a57600080fd5b610372611502565b6040518082815260200191505060405180910390f35b61039e600480803590602001909190505061159a565b005b6103a8611648565b60006103b2611648565b6000600a805490509250826040518059106103ca5750595b90808252806020026020018201604052509150600090505b600f548111151561049257600b6000600a8381548110151561040057fe5b906000526020600020900154815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281518110151561044957fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080806001019150506103e2565b81935050505090565b600042600881905550600854905090565b600080600091505b6001600a80549050038210156105b657600090505b600182600a8054905003038110156105a957600a600182018154811015156104ed57fe5b906000526020600020900154600a8281548110151561050857fe5b906000526020600020900154111561059c57600a8181548110151561052957fe5b906000526020600020900154600c81905550600a6001820181548110151561054d57fe5b906000526020600020900154600a8281548110151561056857fe5b906000526020600020900181905550600c54600a6001830181548110151561058c57fe5b9060005260206000209001819055505b80806001019150506104c9565b81806001019250506104b4565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b600a818154811015156105e857fe5b90600052602060002090016000915090505481565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106875760016003819055505b50565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015490506004811015156107c657600a80548060010182816106ef919061165c565b91600052602060002090016000849091909150555033600b600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fa0da870b7fcbff60609acf1d100a2afa1bc2f8c3ac1e18adb02543416f81e9e03383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a16107cb565b600080fd5b5050565b60008060008060026000600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015493509350935093509193509193565b60008062278d006000544203811515610a8d57fe5b0490506000600382811515610a9e57fe5b061415610bd157600091505b600f5482111515610bcc57600b6000600a84815481101515610ac857fe5b906000526020600020900154815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600a84815481101515610b8e57fe5b9060005260206000209001549081150290604051600060405180830381858888f193505050501515610bbf57600080fd5b8180600101925050610aaa565b610bd6565b600080fd5b5050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b336004600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541015610c7757600080fd5b610c80836105fd565b60016003541415610fb657826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101006040519081016040528042815260200160035481526020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050611167565b600260035414156110475733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611166565b6003805414156110d75733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611165565b600460035414156111645733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b5b5b6003600081548092919060010191905055507fc74df5c6414508e852097d2ccbbe13ca9dc37da175bdab8e2a4082fe47e4ed013384604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b336001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560095410156114fa5761010060405190810160405280428152602001600481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001600173ffffffffffffffffffffffffffffffffffffffff168152602001600273ffffffffffffffffffffffffffffffffffffffff168152602001600373ffffffffffffffffffffffffffffffffffffffff168152602001600473ffffffffffffffffffffffffffffffffffffffff16815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506009600081548092919060010191905055506114ff565b600080fd5b50565b600080600d819055506000600e819055505b600a80549050600e54101561159257600a600e5481548110151561153457fe5b906000526020600020900154600d5411151561157b57600a600e5481548110151561155b57fe5b906000526020600020900154600d5401600d81905550600e54600f819055505b600e60008154809291906001019190505550611514565b600d54905090565b3073ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156115da57600080fd5b7fab3779fad464c399de969e43c58d16533b72c0a6eabe2e0ffbc2aba64b8c818c3382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b602060405190810160405280600081525090565b815481835581811511611683578183600052602060002091820191016116829190611688565b5b505050565b6116aa91905b808211156116a657600081600090555060010161168e565b5090565b905600a165627a7a72305820365f4a54d266067a46e5fabdbadf65233a1784d7776311e153b17ba8559c2d920029';

var abidef =
  '[ { "constant": false, "inputs": [ { "name": "_req_member", "type": "address" }, { "name": "__aadhaar", "type": "uint256" } ], "name": "add_Member", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "bubble_sort", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_aadhaar", "type": "uint256" } ], "name": "init_members", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "newadd", "type": "address" } ], "name": "onlynew", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "pay_loan", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "__amount", "type": "uint256" } ], "name": "pool", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amount_", "type": "uint256" } ], "name": "req_Money", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": true, "stateMutability": "payable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "personWhoTried", "type": "address" }, { "indexed": false, "name": "personWhoWasAdded", "type": "address" } ], "name": "SomeoneTriedToAddSomeone", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "personWhoSent", "type": "address" }, { "indexed": false, "name": "moneyHeSent", "type": "uint256" } ], "name": "SomeoneAddedMoneyToThePool", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "personWhoRequested", "type": "address" }, { "indexed": false, "name": "requestedM", "type": "uint256" } ], "name": "SomeoneRequestedForMoney", "type": "event" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "amounts", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "assign_loan_amount_from_pool", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "ad1", "type": "address" } ], "name": "check_time", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "displayAllowedForLoan", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getcurrtime", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getPoolMoney", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_master_address", "type": "address" } ], "name": "list_refrences", "outputs": [ { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]';
var bytecode =
  "6080604052600160035560016009556000600f554260008190555061187d806100296000396000f3006080604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302c3d9cb146100d257806306874e8b1461013e578063162afafc14610169578063309652ec1461018057806345f0a44f146101ab57806348f1093c146101ec57806350da36a91461022f5780636f1863d81461025c57806373bce8bd146102c85780639965e15e146102df578063b77366be14610336578063d1eea48814610383578063f628a31d146103b0578063fe313112146103db575b005b3480156100de57600080fd5b506100e76103fb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561012a57808201518184015260208101905061010f565b505050509050019250505060405180910390f35b34801561014a57600080fd5b506101536104fa565b6040518082815260200191505060405180910390f35b34801561017557600080fd5b5061017e61050b565b005b34801561018c57600080fd5b50610195610613565b6040518082815260200191505060405180910390f35b3480156101b757600080fd5b506101d660048036038101908080359060200190929190505050610632565b6040518082815260200191505060405180910390f35b3480156101f857600080fd5b5061022d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610655565b005b34801561023b57600080fd5b5061025a600480360381019080803590602001909291905050506106e2565b005b34801561026857600080fd5b5061029d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610893565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b3480156102d457600080fd5b506102dd610b3c565b005b3480156102eb57600080fd5b50610320600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d0c565b6040518082815260200191505060405180910390f35b34801561034257600080fd5b50610381600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d58565b005b34801561038f57600080fd5b506103ae600480360381019080803590602001909291905050506113b0565b005b3480156103bc57600080fd5b506103c5611706565b6040518082815260200191505060405180910390f35b6103f96004803603810190808035906020019092919050505061179c565b005b6060600060606000600a8054905092508260405190808252806020026020018201604052801561043a5781602001602082028038833980820191505090505b509150600090505b600f54811115156104f157600b6000600a8381548110151561046057fe5b9060005260206000200154815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682828151811015156104a857fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050610442565b81935050505090565b600042600881905550600854905090565b600080600091505b6001600a805490500382101561060f57600090505b600182600a80549050030381101561060257600a6001820181548110151561054c57fe5b9060005260206000200154600a8281548110151561056657fe5b906000526020600020015411156105f557600a8181548110151561058657fe5b9060005260206000200154600c81905550600a600182018154811015156105a957fe5b9060005260206000200154600a828154811015156105c357fe5b9060005260206000200181905550600c54600a600183018154811015156105e657fe5b90600052602060002001819055505b8080600101915050610528565b8180600101925050610513565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b600a8181548110151561064157fe5b906000526020600020016000915090505481565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106df5760016003819055505b50565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905060048110151561082157600a82908060018154018082558091505090600182039060005260206000200160009091929091909150555033600b600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fa0da870b7fcbff60609acf1d100a2afa1bc2f8c3ac1e18adb02543416f81e9e03383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a161088f565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4572726f72206d7367350000000000000000000000000000000000000000000081525060200191505060405180910390fd5b5050565b60008060008060026000600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015460026000600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015493509350935093509193509193565b60008062278d006000544203811515610b5157fe5b0490506000600382811515610b6257fe5b061415610c9a57600091505b600f5482111515610c9557600b6000600a84815481101515610b8c57fe5b9060005260206000200154815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600a84815481101515610c5157fe5b90600052602060002001549081150290604051600060405180830381858888f19350505050158015610c87573d6000803e3d6000fd5b508180600101925050610b6e565b610d08565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4572726f72206d7367360000000000000000000000000000000000000000000081525060200191505060405180910390fd5b5050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050919050565b336004600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541015610e12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4572726f72206d7367310000000000000000000000000000000000000000000081525060200191505060405180910390fd5b610e1b83610655565b6001600354141561115157826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101006040519081016040528042815260200160035481526020018473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050611302565b600260035414156111e25733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611301565b6003805414156112725733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611300565b600460035414156112ff5733600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b5b5b6003600081548092919060010191905055507fc74df5c6414508e852097d2ccbbe13ca9dc37da175bdab8e2a4082fe47e4ed013384604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b336001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600560095410156116955761010060405190810160405280428152602001600481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001600173ffffffffffffffffffffffffffffffffffffffff168152602001600273ffffffffffffffffffffffffffffffffffffffff168152602001600373ffffffffffffffffffffffffffffffffffffffff168152602001600473ffffffffffffffffffffffffffffffffffffffff16815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050600960008154809291906001019190505550611703565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600a8152602001807f4572726f72206d7367320000000000000000000000000000000000000000000081525060200191505060405180910390fd5b50565b600080600d819055506000600e819055505b600a80549050600e54101561179457600a600e5481548110151561173857fe5b9060005260206000200154600d5411151561177d57600a600e5481548110151561175e57fe5b9060005260206000200154600d5401600d81905550600e54600f819055505b600e60008154809291906001019190505550611718565b600d54905090565b3073ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156117e2573d6000803e3d6000fd5b507fab3779fad464c399de969e43c58d16533b72c0a6eabe2e0ffbc2aba64b8c818c3382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1505600a165627a7a72305820123c229a82d4d0eca5f9b72555aa3729b354d08110e2dfc2f739e549fc8108820029";
var conadd = "0x76aaC0673025D7430bC17373AFa9DE1288aD87D1";

var cb;
var abiDefinition;
var contract;
var estimatedGas;
var parameterValue;
var txnObject;
var web3;
var provider;

window.addEventListener("load", async () => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      $("#constat").text("CONNECTED");
      document.getElementById("constat").style.color = "green";
      startApp();
    } catch (error) {
      console.error(error);
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use MetaMask/Mist's provider.
    web3 = window.web3;
    $("#constat").text("CONNECTED");
    document.getElementById("constat").style.color = "green !important";
    startApp();
    console.log("Injected web3 detected.");
  }
  // Fallback to localhost; use dev console port by default...
  else {
    provider = new Web3.providers.HttpProvider("http://127.0.0.1:9545");
    web3 = new Web3(provider);
    $("#constat").text("DISCONNECTED");
    document.getElementById("constat").style.color = "red";
    startApp();
    console.log("No web3 contract.methods injected, using Local web3.");
  }
});

// window.addEventListener('load', function() {

//   if (typeof web3 !== 'undefined') {
//       alert('Unlock Metamask');
//       $('#constat').text('CONNECTED');
//       startApp();
//   } else {
//       alert('Install and Unlock Metamask');
//       $('#constat').text('DISCONNECTED');
//   }})

function startApp() {
  console.log("web3: ", web3);
  // cb = web3.eth.coinbase;
  // console.log(cb);

  abiDefinition = JSON.parse(abidef);
  contract = new web3.eth.Contract(abiDefinition, conadd);
  // contract = web3.eth.contract(abiDefinition);
  // contract.methods = contract.at(conadd);
  console.log(contract);
  // console.log(contract.methods);
}

function preFunc() {
  estimatedGas = 1000000;

  txnObject = {
    from: web3.eth.coinbase,
    gas: estimatedGas,
  };
}

function AddInit2() {
  preFunc();
  parameterValue = document.getElementById("Uaadh").value;
  contract.methods.init_members.sendTransaction(
    parameterValue,
    txnObject,
    function (error, result) {
      console.log("RECVED>>", error, result);
      if (error) {
        console.log("Send Transaction:   ", error, "", true);
      } else {
        console.log(
          "Send Transaction:   ",
          parameterValue,
          result,
          result,
          false
        );
        alert("Succesful Transaction");
      }
    }
  );
}

function AddInit() {
  var aadhid = $("#Uaadh").val();
  var adVal = isValidNumber(aadhid);
  if (adVal) {
    alert("Valid Aadhar ID");
    AddInit2();
  } else {
    alert("Invalid Aadhar ID");
  }
}

function aadhar2() {
  preFunc();
  param1 = document.getElementById("Uaadr").value;
  param2 = document.getElementById("Uaadh").value;
  contract.methods.add_Member.sendTransaction(
    param1,
    param2,
    txnObject,
    function (error, result) {
      console.log("RECVED>>", error, result);
      if (error) {
        console.log("Send Transaction:   ", error, "", true);
      } else {
        console.log(
          "Send Transaction:   ",
          parameterValue,
          result,
          result,
          false
        );
        alert("Succesful Transaction");
      }
    }
  );
}

function aadhvalidation() {
  var aadhid = $("#Uaadh").val();
  var adVal = isValidNumber(aadhid);
  if (adVal) {
    alert("Valid Aadhar ID");
    aadhar2();
  } else {
    alert("Invalid Aadhar ID");
  }
}

function PolDep() {
  preFunc();
  parameterValue = document.getElementById("poolDep").value;
  contract.methods.pool.sendTransaction(
    parameterValue,
    txnObject,
    function (error, result) {
      console.log("RECVED>>", error, result);
      if (error) {
        console.log("Send Transaction:   ", error, "", true);
      } else {
        console.log(
          "Send Transaction:   ",
          parameterValue,
          result,
          result,
          false
        );
        alert("Succesful Transaction");
      }
    }
  );
}

function LoanReq() {
  preFunc();
  parameterValue = document.getElementById("AmtReq").value;
  contract.methods.req_Money.sendTransaction(
    parameterValue,
    txnObject,
    function (error, result) {
      console.log("RECVED>>", error, result);
      if (error) {
        console.log("Send Transaction:   ", error, "", true);
      } else {
        console.log(
          "Send Transaction:   ",
          parameterValue,
          result,
          result,
          false
        );
        alert("Succesful Transaction");
      }
    }
  );
}

// export {AddInit, aadhvalidation, PolDep, LoanReq} ;
