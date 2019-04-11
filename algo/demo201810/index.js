var MAIN_COLOR = "#ff671b";
var BACKGROUND_COLOR = "#12223d";
var FONTSIZE = 18;
var chartBarObj,chartScatterObj,chartTreeObj;
var scatterGuiObj;
var renderHandler = {
	renderBarChart: function() {
		var data = window.dataBar;
		chartBarObj = echarts.init(document.getElementById("bar"));
		var option = {
			//backgroundColor: BACKGROUND_COLOR,
			/*title: {
			text: "factor distribution",
			left:'center'
		},*/
			tooltip: {
				trigger: "axis"
			},
			/*legend: {
			data: ["蒸发量", "降水量"]
		},*/
			/*toolbox: {
			show: true,
			feature: {
				dataView: { show: true, readOnly: false },
				magicType: { show: true, type: ["line", "bar"] },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},*/
			calculable: true,
			xAxis: [
				{
					type: "category",
					data: data.series
				}
			],
			yAxis: [
				{
					type: "value"
				}
			],
			series: [
				{
					//name: "蒸发量",
					type: "bar",
					data: data.xAxis,
					itemStyle: {
						color: "#ff9d6f"
					}
				}
			]
		};
		chartBarObj.setOption(option);
	},
	renderScatterChart: function() {
		var app = {};
		var data = window.dataScatter;
		//var data = window.dataScatterTest;
		var schema = window.dataScatterSchame;
		chartScatterObj = echarts.init(document.getElementById("scatter"));
		var fieldNames = schema
			.map(function(item) {
				return item.name;
			})
			.slice(1);

		function getOption(data) {
			return {
				/*title: {
				text: "Return and Factors",
				left:'center'
			},*/
				backgroundColor: BACKGROUND_COLOR,
				tooltip: {
					padding: 10,
					backgroundColor: "#12223d",
					borderColor: "#777",
					borderWidth: 1
				},
				xAxis: {
					name: "size",
					nameTextStyle:{
						fontSize:FONTSIZE,
						fontWeight:'bolder'
					},
					splitLine: { show: false },
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					},
					axisLabel: {
						textStyle: {
							color: "#fff",
							fontSize:FONTSIZE
						}
					},
					axisTick: {
						lineStyle: {
							color: "#fff"
						}
					}
				},
				yAxis: {
					name: "one_month_return",
					nameTextStyle:{
						fontSize:FONTSIZE,
						fontWeight:'bolder'
					},
					splitLine: { show: false },
					axisLine: {
						lineStyle: {
							color: "#fff"
						}
					},
					axisLabel: {
						textStyle: {
							color: "#fff",
							fontSize:FONTSIZE
						},
						formatter:'{value}%'
					},
					axisTick: {
						lineStyle: {
							color: "#fff"
						}
					}
				},
				visualMap: [
					{
						show: false,
						type: "piecewise",
						dimension: 0,
						min: -10,
						max: 50,
						inRange: {
							//color: COLOR,
							color: MAIN_COLOR,
							colorLightness: [0.4, 1.7]
							//symbolSize: [10, 20]
						},
						textStyle: {
							color: "#fff"
						}
					}
				],
				series: [
					{
						zlevel: 1,
						//name: "nutrients",
						type: "scatter",
						data: data.map(function(item, idx) {
							//return [item[2], item[3], item[1], idx];
							return [item[1], item[11] /*,item[0], idx*/];
						}),
						animationThreshold: 5000,
						progressiveThreshold: 5000
					}
				],
				animationEasingUpdate: "cubicInOut",
				animationDurationUpdate: 2000
			};
		}
		chartScatterObj.setOption((option = getOption(data)));

		var fieldIndices = schema.reduce(function(obj, item) {
			obj[item.name] = item.index;
			return obj;
		}, {});
		app.config = {
			xAxis: "size",
			yAxis: "one_month_return",
			onChange: function() {
				if (data) {
					chartScatterObj.setOption({
						xAxis: {
							name: app.config.xAxis
						},
						yAxis: {
							name: app.config.yAxis
						},
						series: {
							data: data.map(function(item, idx) {
								return [
									item[fieldIndices[app.config.xAxis]],
									item[fieldIndices[app.config.yAxis]] //,
									//item[0],
									//idx
								];
							})
						}
					});
				}
			}
		};

		app.configParameters = {
			xAxis: {
				options: fieldNames
			},
			yAxis: {
				options: fieldNames
			}
		};

		if (app.config) {
			scatterGuiObj = new dat.GUI({
				autoPlace: false
			});
			var gui = scatterGuiObj;
			$(".tool-bar").append(gui.domElement);

			var configParameters = app.configParameters || {};
			for (var name in app.config) {
				var value = app.config[name];
				if (name !== "onChange" && name !== "onFinishChange") {
					var isColor = false;
					// var value = obj;
					var controller;
					if (configParameters[name]) {
						if (configParameters[name].options) {
							controller = gui.add(
								app.config,
								name,
								configParameters[name].options
							);
						} else if (configParameters[name].min != null) {
							controller = gui.add(
								app.config,
								name,
								configParameters[name].min,
								configParameters[name].max
							);
						}
					}
					if (typeof obj === "string") {
						try {
							var colorArr = echarts.color.parse(value);
							isColor = !!colorArr;
							if (isColor) {
								value = echarts.color.stringify(
									colorArr,
									"rgba"
								);
							}
						} catch (e) {}
					}
					if (!controller) {
						controller = gui[isColor ? "addColor" : "add"](
							app.config,
							name
						);
					}
					app.config.onChange &&
						controller.onChange(app.config.onChange);
					app.config.onFinishChange &&
						controller.onFinishChange(app.config.onFinishChange);
				}
			}
		}
	},
	renderTreeChart: function() {
		var data = window.dataTreeV3;
		chartTreeObj = echarts.init(document.getElementById("tree"));
		var option = {
			backgroundColor: BACKGROUND_COLOR,
			tooltip: {
				trigger: "item",
				triggerOn: "mousemove"
			},
			series: [
				{
					type: "tree",
					//width:650,
					height:650,
					data: [data],
					top: "12%",
					bottom: "14%",
					layout: "radial",
					symbol: "emptyCircle",
					initialTreeDepth: 3,
					animationDurationUpdate: 750,
					label: {
						show: true,
						fontSize: 18,
						color: "#fff",
						//position: ["0%", "-250%"]
					},
					symbolSize: 12,
					itemStyle: {
						borderColor: MAIN_COLOR,
						//color:'#545e72',
						borderWidth:1
					},
					lineStyle:{
						color:'#545e72',
						curveness:0.8,
						width:1
					}
				}
			]
		};
		chartTreeObj.setOption(option);
	}
};

var bindNavItemEvent = function() {
	var items = $(".nav-bar-item a");
	for (var i = 0; i < items.length; ++i) {
		!(function(inx) {
			$(items[inx]).on("click", function() {
				items.removeClass("nav-bar-item-active");
				$(items[inx]).addClass("nav-bar-item-active");
				var _key = items[inx].dataset.index;
				showChart(_key);
			});
		})(i);
	}
};
var showChart = function(key) {
	var obj = $(".container-" + key);
	if(!obj.hasClass('hide')){
		return;
	}
	$(".container").addClass("hide");
	obj.removeClass("hide");
	renderChart(key);
};
var renderChart = function(key){
	var keyHandlerMap = {
		bar:renderHandler.renderBarChart,
		scatter:renderHandler.renderScatterChart,
		tree:renderHandler.renderTreeChart
	};
	typeof keyHandlerMap[key] == 'function'?keyHandlerMap[key]():void(0);
	disposeChart(key);
};
var disposeChart = function(key){
	var keyObjMap = {
		bar:chartBarObj,
		scatter:chartScatterObj,
		tree:chartTreeObj
	};
	delete keyObjMap[key];
	for(p in keyObjMap){
		if (p=='scatter') {
			disposeScatterGui();
		}
		keyObjMap[p] && keyObjMap[p].dispose&&keyObjMap[p].dispose();
		//console.log(p);
	}
};
var disposeScatterGui = function(){
	$(".tool-bar").children().remove()
	scatterGuiObj && scatterGuiObj.destroy();
};
$(document).ready(function() {
	bindNavItemEvent();
	renderHandler.renderScatterChart();
});
