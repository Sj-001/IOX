let abi = [{
    "inputs": [],
    "name": "_updateDaily",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "sellerAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "buyStakeRequest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }],
    "name": "cancelStakeLoanRequest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "lenderLendId",
        "type": "uint256"
    }],
    "name": "collectLendReturn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "__Day",
        "type": "uint256"
    }],
    "name": "debug_setCurrentDay",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "adr",
        "type": "address"
    }],
    "name": "do_changeInventiveAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "adr",
        "type": "address"
    }],
    "name": "do_changeTeam1Address",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "flushdevShareOfStakeSells",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "flushFirstDayLobbyEntry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "flushFirstDayLobbyEntrySwitch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "returnAmount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "loanDuration",
        "type": "uint256"
    }],
    "name": "getLoanOnStake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rawAmount",
        "type": "uint256"
    }],
    "name": "UserLobby",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rawAmount",
        "type": "uint256"
    }],
    "name": "UserLobbyCollect",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rawAmount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
    }],
    "name": "UserStake",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rawAmount",
        "type": "uint256"
    }],
    "name": "UserStakeCollect",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "day",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "day_lobby_entry",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }],
    "name": "EndStake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "referrerAddr",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "EnterLobby",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "stakingDays",
        "type": "uint256"
    }],
    "name": "EnterStake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "targetDay",
        "type": "uint256"
    }],
    "name": "ExitLobby",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "injectToLotteryPool",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "addr_2",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "lenderLendId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "lend_paid",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "loanerAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "lendOnStake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "lastRecord",
        "type": "uint256"
    }],
    "name": "lottery_winner",
    "type": "event"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "share",
        "type": "uint256"
    }],
    "name": "partner_1_addr_set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "share",
        "type": "uint256"
    }],
    "name": "partner_2_addr_set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "share",
        "type": "uint256"
    }],
    "name": "partner_3_addr_set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
    }],
    "name": "sellStakeRequest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }],
    "name": "stake_lend",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "stake_loan",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rawAmount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }],
    "name": "stake_loan_request",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rawAmount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }],
    "name": "stake_sell_request",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "addr",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "addr_2",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }],
    "name": "stake_sold",
    "type": "event"
}, {
    "inputs": [],
    "name": "switchLoaningStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "switchStakeSellingStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "switchVirtualBalanceEntering",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "referrerAddr",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }],
    "name": "virtualBalanceEnteringLobby",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "withdrawLoanedFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "withdrawSoldStakeFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "_clcDay",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "_clcDay_tobeset",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_address",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_Day",
        "type": "uint256"
    }],
    "name": "_clcTokenValue",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "StakeDuration",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "StakeAmount",
        "type": "uint256"
    }],
    "name": "calcBonusToken",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_address",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_stakeId",
        "type": "uint256"
    }],
    "name": "calcStakeCollecting",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_address",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "_stakeId",
        "type": "uint256"
    }],
    "name": "calcStakeCollectingUI",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_address",
        "type": "address"
    }],
    "name": "calcStakeCount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_address",
        "type": "address"
    }],
    "name": "clcLenderLendId",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "dayBNBPool",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "daysActiveInStakeTokens",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "daysActiveInStakeTokensDecrase",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "daysActiveInStakeTokensIncrese",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "devShareOfStakeSellsAndLoanFee",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "enterytokenMath",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "firstDayFlushed",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "lastLobbyPool",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "lendersPaidAmount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "LoanedFunds",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "loaningIsPaused",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "lobbyEntry",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "lottery_Pool",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "lottery_topBuy_latest",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "lottery_topBuy_today",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "lottery_topBuyer_today",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "mapLenderInfo",
    "outputs": [{
        "internalType": "address",
        "name": "lenderAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "loanerAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "lenderLendId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "returnAmount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "endDay",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "loanIsPaid",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "mapMemberLobby",
    "outputs": [{
        "internalType": "uint256",
        "name": "extraVirtualTokens",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "memberLobbyValue",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "memberLobbyEntryDay",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "hasCollected",
        "type": "bool"
    }, {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "mapMemberLobby_overallData",
    "outputs": [{
        "internalType": "uint256",
        "name": "overall_collectedTokens",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "overall_lobbyEnteries",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "overall_stakedTokens",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "overall_collectedDivs",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "mapMemberStake",
    "outputs": [{
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "tokenValue",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "startDay",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "endDay",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "loansReturnAmount",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "stakeCollected",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "stake_hasSold",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "stake_forSell",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "stake_hasLoan",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "stake_forLoan",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "mapRequestingLoans",
    "outputs": [{
        "internalType": "address",
        "name": "loanerAddress",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "lenderAddress",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "stakeId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "lenderLendId",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "loanAmount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "returnAmount",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "lend_startDay",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "lend_endDay",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "hasLoan",
        "type": "bool"
    }, {
        "internalType": "bool",
        "name": "loanIsPaid",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "overall_collectedBonusTokens",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "overall_collectedDivs",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "overall_collectedTokens",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "overall_lobbyEntry",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "overall_stakedTokens",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "partner_1_addr",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "partner_1_share",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "partner_2_addr",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "partner_2_share",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "partner_3_addr",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "partner_3_share",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "percentOfLobbyToBePooled",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "referrerBonusesPaid",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "saveTotalToken",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "soldStakeFunds",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "stakeSellingIsPaused",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "token_BUSD",
    "outputs": [{
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalLoanedAmount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalLoanedCount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalStakesSold",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "totalStakeTradeAmount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "totalTokensInActiveStake",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "totalTradeAmount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "usersCount",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "name": "usersCountDaily",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "virtualBalanceEnteringIsPaused",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}]
let BUSD_abi = [{
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "constant": true,
    "inputs": [],
    "name": "_decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "_name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "_symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "burn",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
    }],
    "name": "decreaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "getOwner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
    }],
    "name": "increaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "mint",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "sender",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}]
const DESI = 100000000
const SUN = 1000000
const zeroAddress = "0x000000000000000000000000000000000000dEaD"
let mainContract, BUSDTokenContract, currentDay
const contractAddress = "0xe7d923444C21F9Bd73F8D5972fF2E04114845143"
const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
let contract2
let user = {
    address: void 0,
    balance: void 0,
    balance_bnb: void 0,
    allowance: 0,
    referrer: zeroAddress
}

function setUpContracts() {
    mainContract = new web3.eth.Contract(abi, contractAddress)
    if (!mainContract) return void 0
    BUSDTokenContract = new web3.eth.Contract(BUSD_abi, busdAddress);
    contractLoaded()
    console.log("Contract Loaded")
    setUpAccount()
}
window.addEventListener('load', async () => {
    web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"));
    web3.eth.setProvider(Web3.givenProvider);
    let accs = await window.ethereum.request({
        method: 'eth_requestAccounts'
    });
    user.address = accs[0]
    setUpContracts()
    console.log("conn", accs[0])
    try {
        await ethereum.enable();
    } catch (error) {
        console.log('user rejected permission');
    }
})

function setUpAccount() {
    updateHeadAddress()
    if ($('.ref-link')[0]) $('.ref-link')[0].value = "https://avaricetoken.io/?ref=" + user.address
    if (typeof userAccConnected == "function") userAccConnected()
}

function updateHeadAddress() {
    let p2 = user.address.slice(42 - 5)
    $('.c-square-span')[0].innerHTML = user.address.slice(0, 5) + "..." + p2
}

function contractLoaded() {
    if (!user.address) return
    getUserBalance()
    setInterval(() => {
        getUserBalance()
    }, 1000 * 6)
    getCurrentDay()
    let intso = setInterval(() => {
        if (currentDay) {
            clearInterval(intso)
            if (typeof refreshGlobalData === "function") refreshGlobalData()
            if (typeof run_Stake === "function") run_Stake()
            if (typeof run_Auction === "function") run_Auction()
            if (typeof run_Dividends === "function") run_Dividends()
            averagePriceCalc()
        }
    }, 100)
    mainContract.methods.lottery_Pool().call({
        shouldPollResponse: true
    }).then(res => {
        $('.avrch-1')[0].value = (res / 1e18).toFixed(3)
    })
    mainContract.methods.lottery_topBuy_today().call({
        shouldPollResponse: true
    }).then(res => {
        $('.avrch-3')[0].value = (res / 1e18).toFixed(3)
    })
    mainContract.methods.lottery_topBuy_latest().call({
        shouldPollResponse: true
    }).then(res => {
        $('.avrch-2')[0].value = (res / 1e18).toFixed(3)
    })
}

function getLobbyData() {}

function getCurrentDay() {
    mainContract.methods._clcDay().call({
        shouldPollResponse: true
    }).then(res => {
        if (currentDay !== parseInt(res) && typeof auctionRender === "function") auctionRender(parseInt(res))
        currentDay = parseInt(res)
    })
    setTimeout(() => {
        getCurrentDay()
    }, 1000 * 60 * 5)
}

function getUserBalance() {
    mainContract.methods.balanceOf(user.address).call({
        shouldPollResponse: false
    }).then(res => {
        user.balance = parseInt(res)
        async function f() {
            BUSDTokenContract.methods.balanceOf(user.address).call({
                shouldPollResponse: false
            }).then(res => {
                user.balance_bnb = parseInt(res)
                setUserData()
            })
        }
        f()
    })
}

function setUserData() {
    $('.user-data-2')[0].value = parseFloat((user.balance / 1e18).toFixed(1))
    $('.user-data-1')[0].value = parseFloat((user.balance_bnb / 1e18).toFixed(4))
}

function abbreviate_number(_num, fixed) {
    let num = parseFloat(_num)
    if (num === null) {
        return null;
    }
    if (num === 0) {
        return '0';
    }
    fixed = (!fixed || fixed < 0) ? 0 : fixed;
    var b = (num).toPrecision(2).split("e"),
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
        c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed),
        d = c < 0 ? c : Math.abs(c),
        e = d + ['', 'K', 'M', 'B', 'T'][k];
    return e;
}

function toFixedNoRounding(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

function abbreviate_number_cu1(num) {
    let number = num.replace(/,/g, '')
    const indexDes = number.indexOf(".")
    let lcNm, doSk
    if (indexDes == 1 && number[0] === "0") {
        number = number.slice(0, indexDes + 9)
        lcNm = 8
    } else if (indexDes == 1 && number[0] !== "0") {
        number = number.slice(0, indexDes + 8)
        lcNm = 7
    } else if (indexDes == 2) {
        number = number.slice(0, indexDes + 6)
        lcNm = 5
    } else if (indexDes == 3) {
        number = number.slice(0, indexDes + 4)
        lcNm = 3
    } else if (indexDes > 3) {
        number = abbreviate_number(parseFloat(number), 2)
        doSk = true
    }
    if (doSk) {
        return number
    } else {
        number = (parseFloat(number)).toLocaleString(void 0, {
            minimumFractionDigits: lcNm
        })
        return number
    }
}

function extraDesi(a) {
    if (a.indexOf(".") == -1) return a
    if (a.length - a.indexOf(".") >= 4) {
        return a
    } else if (a.length - a.indexOf(".") == 3) {
        return a + "0"
    } else if (a.length - a.indexOf(".") == 2) {
        return a + "00"
    } else if (a.length - a.indexOf(".") == 1) {
        return a + "000"
    }
}
let int1, tm1, tm2

function displayAlert(type, text, duration) {
    const elm = $(`.alert-tb`)[type - 1]
    if (!elm) return
    clearInterval(int1)
    clearTimeout(tm1)
    clearTimeout(tm2)
    elm.style.display = "block"
    elm.style.opacity = "1"
    $('.alert-inner')[type - 1].innerHTML = text
    tm1 = setTimeout(() => {
        int1 = setInterval(() => {
            elm.style.opacity = parseFloat(elm.style.opacity) - 0.01
        }, 10)
    }, duration || 3000)
    tm2 = setTimeout(() => {
        elm.style.display = "none"
        clearInterval(int1)
    }, duration + 2000 || 5000)
}

function accessCookie(cookieName) {
    let name = cookieName + "=";
    let allCookieArray = document.cookie.split(';');
    for (let i = 0; i < allCookieArray.length; i++) {
        let temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0)
            return temp.substring(name.length, temp.length);
    }
    return "";
}
if (accessCookie("ref").length > 0) {
    if (validateAddress(accessCookie("ref"))) user.referrer = accessCookie("ref")
}

function validateAddress(address) {
    if (typeof address !== 'string')
        return false;
    if (address[0] === "T" && address.length == 34)
        return true;
    return false;
}
let rTargetTime
getTimer()

function getTimer() {
    let xmlhttp_gu = new XMLHttpRequest();
    xmlhttp_gu.open("POST", "/get-next-round", true);
    xmlhttp_gu.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp_gu.send('address=' + user.address);
    xmlhttp_gu.onreadystatechange = (e) => {
        if (xmlhttp_gu.readyState !== 4 || xmlhttp_gu.status !== 200) return;
        if (xmlhttp_gu.responseText.length < 1) return;
        rTargetTime = xmlhttp_gu.responseText
    }
}
setInterval(() => {
    getTimer()
}, 1000 * 60 * 5)
setInterval(() => {
    rewardTimer()
}, 1000)

function rewardTimer() {
    if (!rTargetTime) return
    var now = new Date().getTime()
    var t = rTargetTime - now
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((t % (1000 * 60)) / 1000)
    if (hours.toString().length == 1) hours = "0" + hours
    if (minutes.toString().length == 1) minutes = "0" + minutes
    if (seconds.toString().length == 1) seconds = "0" + seconds
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.day-end-in-mb')[0].innerHTML = `${hours} : ${minutes} : ${seconds}`
    } else {
        $('.day-end-in')[0].innerHTML = `Day ${currentDay} Ends In: ${hours} : ${minutes} : ${seconds}`
    }
}
let moralisRecentEvents

function getMoralisData_server() {
    $.getJSON('../../get-moralis-data2', function(data) {
        data[4].splice(15, data[3].length)
        data[3].splice(15, data[4].length)
        moralisRecentEvents = data
        renderMoralisData(moralisRecentEvents, true)
    });
}
setInterval(() => {
    getMoralisData_server()
}, 1000 * 10)
getMoralisData_server()
let type_1_A = "#267579"
let type_2_A = "#4f6b78"
let type_3_A = "#345f81"
let type_4_A = "#527b4b"
let type_1_B = "#2e8b90"
let type_2_B = "#607d8b"
let type_3_B = "#406f90"
let type_4_B = "#679569"

function renderMoralisData(data, noattribute) {
    let counter = 0
    $('.recent-events')[0].innerHTML = ""
    let color_A, color_B
    if (noattribute) {
        let txt
        if (data[0]) {
            data[0].forEach(el => {
                txt = `Stake Started: ${((parseInt(el.rawAmount)).toFixed(2)/1e18).toFixed(0)} BIOX for ${el.duration} days`
                color_A = type_1_A
                color_B = type_1_B
                dores(el)
            })
        }
        if (data[1]) {
            data[1].forEach(el => {
                txt = `Stake Collected: ${(parseInt(el.rawAmount)/1e18).toFixed(5)} BUSD`
                color_A = type_1_A
                color_B = type_1_B
                dores(el)
            })
        }
        if (data[2]) {
            data[2].forEach(el => {
                txt = `Auction Entered:<br> ${parseInt(el.rawAmount)/1e18} BUSD`
                color_A = type_4_A
                color_B = type_4_B
                dores(el)
            })
        }
        if (data[3]) {
            data[3].forEach(el => {
                counter++
                if (counter < 15) {
                    txt = `${(parseInt(el.rawAmount)/1e18).toFixed(0)} BIOX Stake sell offer for ${parseInt(el.price)/1e18} BUSD`
                    color_A = type_3_A
                    color_B = type_3_B
                    dores(el)
                }
            })
        }
        if (data[4]) {
            data[4].forEach(el => {
                txt = `${parseInt(el.rawAmount)/1e18} BUSD Loan request for ${parseInt(el.duration)} Days`
                color_A = type_2_A
                color_B = type_2_B
                dores(el)
            })
        }

        function dores(el) {
            let p22 = el.addr.slice(42 - 5)
            $('.recent-events')[0].innerHTML += `<div id="${parseInt(el.timestamp)}" onclick="window.open('https://bscscan.com/tx/${el.transaction_hash}')" 
				style="background-color: ${color_B};
				cursor: pointer;
				margin: 6px;
				border-radius: 3px;
				height: auto;
				color: #ffffffb8;
				text-align: center;
				margin: 8px;
				
			"><div style="
			background-color: ${color_A};
			border-radius: 3px;
			height: 20px;
			color: #ffffff4f;
			text-align: center;
			font-weight: 900;
			font-family: 'Montserrat-m1'
			">${el.addr.slice(0,5)+"..."+p22}</div><div style="
			border-radius: 3px;
			height: 20px;
			color: #ffffffb8;
			text-align: center;
			display: contents;
			font-size: inherit;
			font-weight: 400;
			font-family: 'Montserrat-m1';
			">${txt}</div><div style="
			font-size: 12px;
		border-radius: 3px;
		color: #ffffff52;
		text-align: right;
		margin-right: 3px;
		/* font-weight: 900; */
		font-family: 'Montserrat-m1';
			">${timeSince(parseInt(el.timestamp)*1000)} ago</div></div>`
        }
    }
    var aT = []
    for (var i = 0; i <= $('.recent-events')[0].children.length; i++) {
        aT.push($('.recent-events')[0].children[i])
    }
    aT.sort(function(b, a) {
        return parseInt(a.id) - parseInt(b.id);
    });
    $('.recent-events')[0].innerHTML = ""
    for (var i = 0; i <= aT.length; i++) {
        if (aT[i]) $('.recent-events')[0].appendChild(aT[i])
    }
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.card-title-rv')[0].style.display = "none"
    $('.card-title-rv')[1].style.display = "none"
}

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " year/s";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " month/s";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " day/s";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hour/s";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minute/s";
    }
    return Math.floor(seconds) + " second/s";
}

function openModal3() {
    $('.modal3')[0].style.marginTop = "auto"
    $('.modal3')[0].style.marginLeft = "auto"
    $('.modal3')[0].style.visibility = "visible"
    $('.modal3')[0].style.opacity = "1"
}

function closeModal3() {
    $('.modal3')[0].style.marginTop = "-10000px"
    $('.modal3')[0].style.marginLeft = "-10000px"
    $('.modal3')[0].style.visibility = "invisible"
    $('.modal3')[0].style.opacity = "0"
}

function openModal4() {
    $('.modal4')[0].style.marginTop = "auto"
    $('.modal4')[0].style.marginLeft = "auto"
    $('.modal4')[0].style.visibility = "visible"
    $('.modal4')[0].style.opacity = "1"
    BUSDTokenContract.methods.allowance(user.address, contractAddress).call({
        from: user.address,
    }).then(res => {
        $('.inp-tra-1')[0].value = res / 1e18 + " BUSD"
        if ($('.inp-tra-1')[1]) $('.inp-tra-1')[1].value = res / 1e18 + " BUSD"
    })
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.tmm-22')[0].style.padding = "0"
        $('.inp-tra-1')[0].style.width = "50%"
        $('.inp-tra-2')[0].style.width = "50%"
    }
}

function closeModal4() {
    $('.modal4')[0].style.marginTop = "-10000px"
    $('.modal4')[0].style.marginLeft = "-10000px"
    $('.modal4')[0].style.visibility = "invisible"
    $('.modal4')[0].style.opacity = "0"
}

function TransferBAVCTokens() {
    let toAddress = $('.inp-tra-2')[0].value
    let amount = $('.inp-tra-1')[0].value
    amount = web3.utils.toWei(amount, 'ether');
    if (!amount || !mainContract) return
    mainContract.methods.transfer(toAddress, amount).send({
        from: user.address,
        shouldPollResponse: false
    }).then(res => {
        doAlert(`Successfully Sent.`, 3)
        closeModal3()
    }).catch(err => {
        doAlert("Something went wrong!", 2)
    }).finally(res => {
        closeModal3()
    })
}

function copyreflink() {
    var linkk = `https://IOX.io/?r=${user.address}`;
    navigator.clipboard.writeText(linkk).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function lobbyPoolclc2(day) {
    let starter = 3e6
    let toreturn
    for (var i = 0; i < day; i++) {
        let beshown = starter
        starter -= starter * 5 / 1000
        toreturn = beshown.toFixed(0)
    }
    return toreturn
}
let dayEnteries = []

function getDayEntery2(_day) {
    mainContract.methods.lobbyEntry(_day).call({
        shouldPollResponse: true
    }).then(res => {
        dayEnteries[_day] = parseInt(res) / 1e18
    })
}

function averagePriceCalc() {
    dayEnteries = []
    for (var i = 0; i < 3; i++) {
        getDayEntery2(currentDay - (i + 1))
    }
    whenStartClcAvg()
}

function whenStartClcAvg() {
    setTimeout(() => {
        if (dayEnteries.length == currentDay) {
            clcPrice()
        } else {
            whenStartClcAvg()
        }
    }, 500)
}
let avgPrice

function clcPrice() {
    let fn
    avgPrice = dayEnteries[currentDay - 1] / lobbyPoolclc2((currentDay - 1) + 1) +
        dayEnteries[currentDay - 2] / lobbyPoolclc2((currentDay - 2) + 1) +
        dayEnteries[currentDay - 3] / lobbyPoolclc2((currentDay - 3) + 1)
    avgPrice /= 3
}

function switchChains() {
    if ((window.location.href).split("busd/").length == 2) {
        if ((window.location.href).split("lending").length == 2) {} else {
            let a1 = (window.location.href).split("busd/")
            window.location.href = a1[0] + a1[1];
        }
    } else if ((window.location.href).split("busd/").length == 1) {
        let a1 = (window.location.href).split("panel/")
        window.location.href = a1[0] + "panel/busd/" + a1[1];
    }
}

function checkAllowance() {
    BUSDTokenContract.methods.allowance(user.address, contractAddress).call({
        from: user.address
    }).then(res => {
        user.allowance = res / 1e18
    })
}

function doApprove() {
    let value
    if ((window.location.href).split("lobby").length == 2) {
        value = web3.utils.toWei($('.inp-tra-2')[0].value, 'ether')
    }
    if ((window.location.href).split("lending").length == 2) {
        value = web3.utils.toWei($('.inp-tra-2')[1].value, 'ether')
    }
    if ((window.location.href).split("buyandsell").length == 2) {
        value = web3.utils.toWei($('.inp-tra-2')[0].value, 'ether')
    }
    value = BigInt(parseInt(value))
    BUSDTokenContract.methods.approve(contractAddress, value).send({
        from: user.address,
    }).then(res => {
        BUSDTokenContract.methods.allowance(user.address, contractAddress).call({
            from: user.address,
        }).then(res => {
            $('.inp-tra-1')[0].value = res / 1e18 + " BUSD"
        })
    })
}
if ((window.location.href).split("busd/").length == 2) {
    $('.switcher-chains')[0].style.background = "#d3325b33"
    $('.switcher-chains')[0].style.border = "3px solid #dc3f5336"
    $('.switcher-chains')[1].style.background = "#d3325b33"
    $('.switcher-chains')[1].style.border = "3px solid #dc3f5336"
    $('.day-end-n')[0].innerHTML = "To IOX"
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.tmm-22')[0].style.padding = "0"
    }
}

function openfaq() {
    window.open("https://medium.com/@avaricetoken/avarice-faqs-f21c303227fc", '_blank').focus();
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}