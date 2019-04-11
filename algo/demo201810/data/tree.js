var dataTree = {
	name: "expected return",
	children: [
		{
			name: "leverage",
			children: [
				{
					name: "debt to asset",
					children: [
						{ name: "total liability" },
						{ name: "total asset" }
					]
				},
				{
					name: "debt to equity",
					children: [
						{ name: "total liability" },
						{ name: "total equity" }
					]
				}
			]
		},
		{
			name: "momentum_short",
			children: [
				{
					name: "1 month excess return",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" }
					]
				},
				{
					name: "3 month excess return",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" }
					]
				},
				{
					name: "6 month excess return",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" }
					]
				}
			]
		},
		{
			name: "value",
			children: [
				{
					name: "bp ratio",
					children: [{ name: "total equity" }, { name: "market cap" }]
				},
				{
					name: "ep ratio",
					children: [{ name: "net income" }, { name: "market cap" }]
				},
				{
					name: "sp ratio",
					children: [
						{ name: "total revenue" },
						{ name: "market cap" }
					]
				}
			]
		},
		{
			name: "nlSize",
			children: [
				{
					name: "non-linear size",
					children: [{ name: "market cap" }]
				}
			]
		},
		{
			name: "beta",
			children: [
				{
					name: "beta",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" },
						{ name: "risk free rate" }
					]
				}
			]
		},
		{
			name: "growth",
			children: [
				{
					name: "revenue growth",
					children: [{ name: "revenue" }]
				},
				{
					name: "net income growth",
					children: [{ name: "net income" }]
				},
				{
					name: "operating cash flow growth",
					children: [{ name: "operating cash flow" }]
				}
			]
		},
		{
			name: "momentum_long",
			children: [
				{
					name: "12 month excess return",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" }
					]
				}
			]
		},
		{
			name: "turnover",
			children: [
				{
					name: "turnover rate",
					children: [{ name: "turnover rate" }]
				}
			]
		},
		{
			name: "volatility",
			children: [
				{
					name: "return daily volatility",
					children: [{ name: "market close" }]
				},
				{
					name: "return change range",
					children: [{ name: "market close" }]
				}
			]
		},
		{
			name: "quality",
			children: [
				{
					name: "roe",
					children: [{ name: "net income" }, { name: "total equity" }]
				},
				{
					name: "roa",
					children: [{ name: "net income" }, { name: "total asset" }]
				}
			]
		},
		{
			name: "liquidity",
			children: [
				{
					name: "1 month trading volume",
					children: [{ name: "1 month trading volume" }]
				}
			]
		},
		{
			name: "size",
			children: [
				{
					name: "market cap",
					children: [{ name: "market cap" }]
				},
				{
					name: "total asset",
					children: [{ name: "total asset" }]
				},
				{
					name: "total revenue",
					children: [{ name: "total revenue" }]
				}
			]
		}
	]
};

var dataTreeV2 = {
	name: "expected return",
	children: [
		{
			name: "value",
			children: [
				{
					name: "bp ratio",
					children: [{ name: "total equity" }, { name: "market cap" }]
				},
				{
					name: "ep ratio",
					children: [{ name: "net income" }, { name: "market cap" }]
				},
				{
					name: "sp ratio",
					children: [
						{ name: "total revenue" },
						{ name: "market cap" }
					]
				}
			]
		},
		{
			name: "beta",
			children: [
				{
					name: "beta",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" },
						{ name: "risk free rate" }
					]
				}
			]
		},
		{
			name: "turnover",
			children: [{ name: "turnover", children: [{ name: "turnover" }] }]
		},
		{
			name: "size",
			children: [
				{ name: "market cap", children: [{ name: "market cap" }] }
			]
		},
		{
			name: "quality",
			children: [
				{
					name: "roe",
					children: [{ name: "net income" }, { name: "total equity" }]
				},
				{
					name: "roa",
					children: [{ name: "net income" }, { name: "total asset" }]
				}
			]
		},
		{
			name: "liquidity",
			children: [{ name: "volume", children: [{ name: "volume" }] }]
		},
		{
			name: "volatility",
			children: [
				{
					name: "return volatility",
					children: [{ name: "market close" }]
				}
			]
		}
	]
};

var dataTreeV3 = {
	name: "expected return",
	children: [
		{
			name: "leverage",
			children: [
				{
					name: "debt to asset",
					children: [
						{ name: "total liability" },
						{ name: "total asset" }
					]
				},
				{
					name: "debt to equity",
					children: [
						{ name: "total liability" },
						{ name: "total equity" }
					]
				}
			]
		},
		{
			name: "momentum(S)",
			children: [
				{
					name: "1m return",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" }
					]
				},
				{
					name: "3m return",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" }
					]
				},
				{
					name: "6m return",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" }
					]
				}
			]
		},
		{
			name: "value",
			children: [
				{
					name: "bp ratio",
					children: [{ name: "total equity" }, { name: "market cap" }]
				},
				{
					name: "ep ratio",
					children: [{ name: "net income" }, { name: "market cap" }]
				},
				{
					name: "sp ratio",
					children: [
						{ name: "total revenue" },
						{ name: "market cap" }
					]
				}
			]
		},
		{
			name: "nlSize",
			children: [
				{ name: "non-linear size", children: [{ name: "market cap" }] }
			]
		},
		{
			name: "beta",
			children: [
				{
					name: "beta",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" },
						{ name: "risk free rate" }
					]
				}
			]
		},
		{
			name: "growth",
			children: [
				{ name: "revenue growth", children: [{ name: "revenue" }] },
				{ name: "income growth", children: [{ name: "net income" }] },
				{
					name: "CFO growth",
					children: [{ name: "operating cash flow" }]
				}
			]
		},
		{
			name: "momentum(L)",
			children: [
				{
					name: "12m return",
					children: [
						{ name: "market close" },
						{ name: "benchmark close" }
					]
				}
			]
		},
		{
			name: "turnover",
			children: [
				{ name: "turnover rate", children: [{ name: "turnover rate" }] }
			]
		},
		{
			name: "volatility",
			children: [
				{
					name: "return volatility",
					children: [{ name: "market close" }]
				},
				{ name: "return range", children: [{ name: "market close" }] }
			]
		},
		{
			name: "quality",
			children: [
				{
					name: "roe",
					children: [{ name: "net income" }, { name: "total equity" }]
				},
				{
					name: "roa",
					children: [{ name: "net income" }, { name: "total asset" }]
				}
			]
		},
		{
			name: "liquidity",
			children: [
				{
					name: "trading volume",
					children: [{ name: "trading volume" }]
				}
			]
		},
		{
			name: "size",
			children: [
				{ name: "market cap", children: [{ name: "market cap" }] },
				{ name: "total asset", children: [{ name: "total asset" }] },
				{ name: "total revenue", children: [{ name: "total revenue" }] }
			]
		}
	]
};
