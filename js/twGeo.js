// twGeo.js
'use strict';
var area = {
	"台北市": "north", "桃園縣": "north", "基隆市": "north", "新竹縣": "north", "新北市": "north", "新竹市": "north",
	// "北部": ["台北市", "桃園縣", "基隆市", "新竹縣", "新北市", "新竹市"],
	"雲林縣": "central", "台中市": "central", "南投縣": "central", "苗栗縣": "central", "彰化縣": "central",
	// "中部": ["雲林縣", "台中市", "南投縣", "苗栗縣", "彰化縣"],
	"屏東縣": "south", "台南市": "south", "嘉義市": "south", "高雄市": "south", "嘉義縣": "south",
	// "南部": ["屏東縣", "台南市", "嘉義市", "高雄市", "嘉義縣"],
	"花蓮縣": "east", "宜蘭縣": "east", "台東縣": "east",
	// "東部": ["花蓮縣", "宜蘭縣", "台東縣"],
	"連江縣": "other", "澎湖縣": "other", "金門縣": "other",
	// "外島": ["連江縣", "澎湖縣", "金門縣"]
};

d3.json("json/twCounty2010merge.topo.json", function (error, data) {
	console.log(data);
	var topo = topojson.feature(data, data.objects.layer1);
	var prj = d3.geo.mercator().center([122, 23.978567]).scale(7000);
	var path = d3.geo.path().projection(prj);
	var colorMap = d3.scale.linear().domain([0,5000000]).range(["#000","#FFD460"]);
	d3.select("svg#map").selectAll("path").data(topo.features).enter().append("path").attr("fill", function(d) {
		return colorMap(5000000); 
	}).attr("d", path).attr("class", function(d) {
		return area[d.properties.name];
	});

	$('.north').hover(function() {
		$('.north').attr("fill", "#EA5455");
		$('#areaName').text("北部");
	}, function() {
		$('.north').attr("fill", "#FFD460");
		$('#areaName').text(" ");
	});
	$('.central').hover(function() {
		$('.central').attr("fill", "#EA5455");
		$('#areaName').text("中部");
	}, function() {
		$('.central').attr("fill", "#FFD460");
		$('#areaName').text(" ");
	});
	$('.south').hover(function() {
		$('.south').attr("fill", "#EA5455");
		$('#areaName').text("南部");
	}, function() {
		$('.south').attr("fill", "#FFD460");
		$('#areaName').text(" ");
	});
	$('.east').hover(function() {
		$('.east').attr("fill", "#EA5455");
		$('#areaName').text("東部");
	}, function() {
		$('.east').attr("fill", "#FFD460");
		$('#areaName').text(" ");
	});
	$('.other').hover(function() {
		$('.other').attr("fill", "#EA5455");
		$('#areaName').text("外島");
	}, function() {
		$('.other').attr("fill", "#FFD460");
		$('#areaName').text(" ");
	});

	$('.north').click(function() {
		$('#q6 .btn')[0].click();
	});
	$('.central').click(function() {
		$('#q6 .btn')[1].click();
	});
	$('.south').click(function() {
		console.log($('#q6 .btn'));
		$('#q6 .btn')[2].click();
	});
	$('.east').click(function() {
		console.log($('#q6 .btn'));
		$('#q6 .btn')[3].click();
	});
	$('.other').click(function() {
		console.log($('#q6 .btn'));
		$('#q6 .btn')[4].click();
	});
});

