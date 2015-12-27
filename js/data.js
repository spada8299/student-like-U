var Gender = [1339849,0.4971,0.5029];//all the student

var Subject = 
[38704,0.3372,0.6628,//edu
209157,0.3273,0.6727,//art
326361,0.4128,0.5872,//society,law,business
127162,0.6654,0.3346,//science
283167,0.8508,0.1492,//engineering
27659,0.4936,0.5064,//agriculture
155873,0.255,0.745,//medical
170297,0.4119,0.5881,//serve
1469,0.4989,0.5011//other
];//9 subjects

var Expense = [0.02,0.28,0.45,0.22,0.03];//this is an super expectation

var Level = [1037062,0.5034,0.4966,//Daigakusei
172968,0.559,0.441,//Daigakuinsei,
30549,0.6888,0.3112,//Ph.D
99270,0.2644,0.7356//expert
];

var Dorm = [1339849,0.4482,0.5518,//all,Dorm,home-school
600645,0.4862,0.5138,//all_Dorm,boy,girl
739204,0.5059,0.4941//all_home-school,boy,girl
];


//[總人數,此區縣市數,某縣市人數,...,]
var Student_area = [624275,6,270090,156668,15693,111459,52634,17731,//North,
294112,5,22361,193300,39957,12328,26166,//Central,
373443,5,18928,25481,136308,150149,42577,//South,
40892,3,15095,19915,5882,//East,
7127,2,3014,4113//other
];

var Number_of_area = [
["Taipei",2],["New_Taipei",3],["Keelung",4],["Taoyuan",5],["Hsinchu_City",6],["Hsinchu",7],
["Miaoli",10],["Taichung",11],["Changhua",12],["Nantou",13],["Yunlin",14],
["Chiayi_City",17],["Chiayi",18],["Tainan",19],["Kaohsiung",20],["Pingtung",21],
["Yilan",24],["Hualien",25],["Taitung",26],
["Penghu",29],["Kinmen",30]
];

// final chart data
var cost_food = [4586,7460,845,4586];//every months
var food_changeQ1 = [0.95,1.05];
var food_changeQ2 = [1,1,1,1,1,1,1,1,1];
var food_changeQ3 = [0.4,0.7,1,1.05,1.1];
var food_changeQ4 = [1,1,1,1];
var food_changeQ5 = [1.1,0.94];
var food_changeQ6 = [1.05,1,0.95,1.1,1];

var cost_travel = [819,4108,210, 819];
var travel_changeQ1 = [1,1];
var travel_changeQ2 = [1,1,1,1,1,1,1,1,1];
var travel_changeQ3 = [0.4,0.85,0.93,1.04,1.07];
var travel_changeQ4 = [1,1,1,1];
var travel_changeQ5 = [1,0.3];
var travel_changeQ6 = [1,1,1,1,1];

var cost_ent = [653,4478,70, 653];
var ent_changeQ1 = [0.96,1.04];
var ent_changeQ2 = [1,1,1,1,1,1,1,1];
var ent_changeQ3 = [0.2,0.65,1,1.2,2.1];
var ent_changeQ4 = [1,1,1,1];
var ent_changeQ5 = [1,1];
var ent_changeQ6 = [1,1,1,1,1];

var date = [0.38];
var date_jaja = [0.12];
var date_changeQ1 = [1,1];
var date_changeQ2 = [1,1.08,1.5,0.82,0.71,0.94,1,1,1];
var date_changeQ2_jaja = [1,3.842,0.942,0.26,0.22,0.1,0.32,0.896,1];
var date_changeQ3 = [0.9,1,1,1,1.1];
var date_changeQ4 = [1,1,1,1];
var date_changeQ5 = [1,1];
var date_changeQ6 = [1,1,1,1,1];

var myAry = [];
var rateAry = [];
var complete = 0;

var foodCostAry = [];
var travelCostAry = [];
var entCostAry = [];

var dateAry = [];
var jajaAry = [];

var foodCostData = [];
var travelCostData = [];
var entCostData = [];
var dateAllData = [];
var JajaAllData = [];

$(document).ready(function() {
	var s = d3.select('div#result')
                .append('svg')
                .attr({
                  'width':970,
                  'height':400,
                  'id': 'foodSvg'
                });
    var ps = d3.select('div#result')
    			.append('svg')
    			.attr({
    				'width': 970,
    				'height': 400,
                	'id': 'dateSvg'
    			});
    var allg = ps.append("g")
    			.attr("transform", "translate(" + 970 / 4 + "," + 400 / 2 + ")");
    	allg.append("text").text("全國").attr({
    		'fill': '#FFD460',
    		'text-anchor': 'middle',
    	});

    var likeg = ps.append("g")
    			.attr("transform", "translate(" + 970*3 / 4 + "," + 400 / 2 + ")");
    	likeg.append("text").text("Student like U").attr({
    		'fill': '#FFD460',
    		'text-anchor': 'middle',
    	});
	$('#q1 .btn').click(function() {
		myAry[0] = $(this).children('input').val();
		if ($(this).children('input').val() == "male") {
			rateAry[0] = Gender[1];
			foodCostAry[0] = food_changeQ1[0];
			travelCostAry[0] = travel_changeQ1[0];
			entCostAry[0] = ent_changeQ1[0];
		} else {
			rateAry[0] = Gender[2];
			foodCostAry[0] = food_changeQ1[1];
			travelCostAry[0] = travel_changeQ1[1];
			entCostAry[0] = ent_changeQ1[1];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		if (count < 10 && $('#total').text() == "少於10") {
			console.log('in!');
		} else if (count < 10 ) {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: 10 }, 'normal', function() {
				$('#total').text('少於10');
			});
		} else {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
		}
	});
	$('#q2 .btn').click(function() {
		myAry[1] = $(this).children('input').val();
		if ($(this).children('input').val() == "edu") {
			rateAry[1] = Subject[0]/1339849;
			foodCostAry[1] = food_changeQ2[0];
			travelCostAry[1] = travel_changeQ2[0];
			entCostAry[1] = ent_changeQ2[0];
			dateAry[0] = date_changeQ2[0];
			jajaAry[0] = date_changeQ2_jaja[0];
		} else if ($(this).children('input').val() == "art") {
			rateAry[1] = Subject[3]/1339849;
			foodCostAry[1] = food_changeQ2[1];
			travelCostAry[1] = travel_changeQ2[1];
			entCostAry[1] = ent_changeQ2[1];
			dateAry[0] = date_changeQ2[1];
			jajaAry[0] = date_changeQ2_jaja[1];
		} else if ($(this).children('input').val() == "society") {
			rateAry[1] = Subject[6]/1339849;
			foodCostAry[1] = food_changeQ2[2];
			travelCostAry[1] = travel_changeQ2[2];
			entCostAry[1] = ent_changeQ2[2];
			dateAry[0] = date_changeQ2[2];
			jajaAry[0] = date_changeQ2_jaja[2];
		} else if ($(this).children('input').val() == "science") {
			rateAry[1] = Subject[9]/1339849;
			foodCostAry[1] = food_changeQ2[3];
			travelCostAry[1] = travel_changeQ2[3];
			entCostAry[1] = ent_changeQ2[3];
			dateAry[0] = date_changeQ2[3];
			jajaAry[0] = date_changeQ2_jaja[3];
		} else if ($(this).children('input').val() == "engineering") {
			rateAry[1] = Subject[12]/1339849;
			foodCostAry[1] = food_changeQ2[4];
			travelCostAry[1] = travel_changeQ2[4];
			entCostAry[1] = ent_changeQ2[4];
			dateAry[0] = date_changeQ2[4];
			jajaAry[0] = date_changeQ2_jaja[4];
		} else if ($(this).children('input').val() == "agriculture") {
			rateAry[1] = Subject[15]/1339849;
			foodCostAry[1] = food_changeQ2[5];
			travelCostAry[1] = travel_changeQ2[5];
			entCostAry[1] = ent_changeQ2[5];
			dateAry[0] = date_changeQ2[5];
			jajaAry[0] = date_changeQ2_jaja[5];
		} else if ($(this).children('input').val() == "medical") {
			rateAry[1] = Subject[18]/1339849;
			foodCostAry[1] = food_changeQ2[6];
			travelCostAry[1] = travel_changeQ2[6];
			entCostAry[1] = ent_changeQ2[6];
			dateAry[0] = date_changeQ2[6];
			jajaAry[0] = date_changeQ2_jaja[6];
		} else if ($(this).children('input').val() == "serve") {
			rateAry[1] = Subject[21]/1339849;
			foodCostAry[1] = food_changeQ2[7];
			travelCostAry[1] = travel_changeQ2[7];
			entCostAry[1] = ent_changeQ2[7];
			dateAry[0] = date_changeQ2[7];
			jajaAry[0] = date_changeQ2_jaja[7];
		} else {
			rateAry[1] = Subject[24]/1339849;
			foodCostAry[1] = food_changeQ2[8];
			travelCostAry[1] = travel_changeQ2[8];
			entCostAry[1] = ent_changeQ2[8];
			dateAry[0] = date_changeQ2[8];
			jajaAry[0] = date_changeQ2_jaja[8];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		if (count < 10 && $('#total').text() == "少於10") {
			console.log('in!');
		} else if (count < 10 ) {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: 10 }, 'normal', function() {
				$('#total').text('少於10');
			});
		} else {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
		}
	});
	$('#q3 .btn').click(function() {
		myAry[2] = $(this).children('input').val();
		if ($(this).children('input').val() == "e1") {
			rateAry[2] = Expense[0];
			foodCostAry[2] = food_changeQ3[0];
			travelCostAry[2] = travel_changeQ3[0];
			entCostAry[2] = ent_changeQ3[0];
		} else if ($(this).children('input').val() == "e2") {
			rateAry[2] = Expense[1];
			foodCostAry[2] = food_changeQ3[1];
			travelCostAry[2] = travel_changeQ3[1];
			entCostAry[2] = ent_changeQ3[1];
		} else if ($(this).children('input').val() == "e3") {
			rateAry[2] = Expense[2];
			foodCostAry[2] = food_changeQ3[2];
			travelCostAry[2] = travel_changeQ3[2];
			entCostAry[2] = ent_changeQ3[2];
		} else if ($(this).children('input').val() == "e4") {
			rateAry[2] = Expense[3];
			foodCostAry[2] = food_changeQ3[3];
			travelCostAry[2] = travel_changeQ3[3];
			entCostAry[2] = ent_changeQ3[3];
		} else {
			rateAry[2] = Expense[4];
			foodCostAry[2] = food_changeQ3[4];
			travelCostAry[2] = travel_changeQ3[4];
			entCostAry[2] = ent_changeQ3[4];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		if (count < 10 && $('#total').text() == "少於10") {
			console.log('in!');
		} else if (count < 10 ) {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: 10 }, 'normal', function() {
				$('#total').text('少於10');
			});
		} else {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
		}
	});
	$('#q4 .btn').click(function() {
		myAry[3] = $(this).children('input').val();
		if ($(this).children('input').val() == "l1") {
			rateAry[3] = Level[0]/1339849;
			foodCostAry[3] = food_changeQ4[0];
			travelCostAry[3] = travel_changeQ4[0];
			entCostAry[3] = ent_changeQ4[0];
		} else if ($(this).children('input').val() == "l2") {
			rateAry[3] = Level[3]/1339849;
			foodCostAry[3] = food_changeQ4[1];
			travelCostAry[3] = travel_changeQ4[1];
			entCostAry[3] = ent_changeQ4[1];
		} else if ($(this).children('input').val() == "l3") {
			rateAry[3] = Level[6]/1339849;
			foodCostAry[3] = food_changeQ4[2];
			travelCostAry[3] = travel_changeQ4[2];
			entCostAry[3] = ent_changeQ4[2];
		} else {
			rateAry[3] = Level[9]/1339849;
			foodCostAry[3] = food_changeQ4[3];
			travelCostAry[3] = travel_changeQ4[3];
			entCostAry[3] = ent_changeQ4[3];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		if (count < 10 && $('#total').text() == "少於10") {
			console.log('in!');
		} else if (count < 10 ) {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: 10 }, 'normal', function() {
				$('#total').text('少於10');
			});
		} else {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
		}
	});
	$('#q5 .btn').click(function() {
		myAry[4] = $(this).children('input').val();
		if ($(this).children('input').val() == "dorm") {
			rateAry[4] = Dorm[1];
			foodCostAry[4] = food_changeQ5[0];
			travelCostAry[4] = travel_changeQ5[0];
			entCostAry[4] = ent_changeQ5[0];
		} else {
			rateAry[4] = Dorm[2];
			foodCostAry[4] = food_changeQ5[1];
			travelCostAry[4] = travel_changeQ5[1];
			entCostAry[4] = ent_changeQ5[1];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		if (count < 10 && $('#total').text() == "少於10") {
			console.log('in!');
		} else if (count < 10 ) {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: 10 }, 'normal', function() {
				$('#total').text('少於10');
			});
		} else {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
		}
	});
	$('#q6 .btn').click(function() {
		myAry[5] = $(this).children('input').val();
		if ($(this).children('input').val() == "north") {
			rateAry[5] = Student_area[0]/1339849;
			foodCostAry[5] = food_changeQ6[0];
			travelCostAry[5] = travel_changeQ6[0];
			entCostAry[5] = ent_changeQ6[0];
		} else if ($(this).children('input').val() == "central") {
			rateAry[5] = Student_area[8]/1339849;
			foodCostAry[5] = food_changeQ6[1];
			travelCostAry[5] = travel_changeQ6[1];
			entCostAry[5] = ent_changeQ6[1];
		} else if ($(this).children('input').val() == "south") {
			rateAry[5] = Student_area[15]/1339849;
			foodCostAry[5] = food_changeQ6[2];
			travelCostAry[5] = travel_changeQ6[2];
			entCostAry[5] = ent_changeQ6[2];
		} else if ($(this).children('input').val() == "east") {
			rateAry[5] = Student_area[22]/1339849;
			foodCostAry[5] = food_changeQ6[3];
			travelCostAry[5] = travel_changeQ6[3];
			entCostAry[5] = ent_changeQ6[3];
		} else {
			rateAry[5] = Student_area[27]/1339849;
			foodCostAry[5] = food_changeQ6[4];
			travelCostAry[5] = travel_changeQ6[4];
			entCostAry[5] = ent_changeQ6[4];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		if (count < 10 && $('#total').text() == "少於10") {
			console.log('in!');
		} else if (count < 10 ) {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: 10 }, 'normal', function() {
				$('#total').text('少於10');
			});
		} else {
			$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
		}
	});
	$('.btn').click(function() {
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				complete++;
			}
		}
		console.log(foodCostAry);
		if (complete >= 6) {
			$('.report-btn').prop("disabled", false).removeClass("disable");
			for (var i = 0; i < foodCostAry.length; i++){
				cost_food[3] = cost_food[3] * foodCostAry[i];
				cost_travel[3] = cost_travel[3] * travelCostAry[i];
				cost_ent[3] = cost_ent[3] * entCostAry[i];
			}
			// for (var i = 0; i < dateAry.length; i++){
			// 	date[1] = date[1] * dateAry[i];
			// }
			for (var i = 0; i < cost_food.length; i++) {
				foodCostData[i] = { x: i+1, w: cost_food[i]/20, value: cost_food[i] };
				travelCostData[i] = { x: i+1, w: cost_travel[i]/20, value: cost_travel[i] };
				entCostData[i] = { x: i+1, w: cost_ent[i]/20, value: cost_ent[i] };
			}
			// for (var i = 0; i < date.length*2 ; i+=2) {
				dateAllData[0] = { status: '交往中', value: date[0] };
				dateAllData[1] = { status: '單身', value: 1 - date[0] };
				var temp = date[0]*dateAry[0];
				dateAry[0] = { status: '交往中', value: temp };
				dateAry[1] = { status: '單身', value: 1 - temp };
			// }
			// for (var i = 0; i < date_jaja.length*2 ; i+=2) {
				JajaAllData[0] = { status: '同性', value: date_jaja[0] };
				JajaAllData[1] = { status: '異性', value: 1 - date_jaja[0] };
				temp = date_jaja[0]*jajaAry[0];
				jajaAry[0] = { status: '同性', value: temp };
				jajaAry[1] = { status: '異性', value: 1 - temp };
			// }
			console.log(cost_food, foodCostData);
			// _transition(foodCostData);
			$('#foodBtn').click(function() {
				_transition(foodCostData);
				$('#foodSvg').show();
				$('#dateSvg').hide();
			});
			$('#travelBtn').click(function() {
				_transition(travelCostData);
				$('#foodSvg').show();
				$('#dateSvg').hide();
			});
			$('#entBtn').click(function() {
				_transition(entCostData);
				$('#foodSvg').show();
				$('#dateSvg').hide();
			});
			$('#dateBtn').click(function() {
				drawPie(dateAllData, dateAry);
				$('#foodSvg').hide();
				$('#dateSvg').show();
				// _transition();
			});
			$('#jajaBtn').click(function() {
				drawPie(JajaAllData, jajaAry);
				$('#foodSvg').hide();
				$('#dateSvg').show();
				// _transition();
			});
		} else {
			complete = 0;
		}
	});

	function _transition(data){
		console.log(data);
		console.log(s.selectAll('rect'));
		if (s.selectAll('rect')[0].length > 0) {
			s.selectAll('rect')
			 .data(data)
			 .attr({
			  'fill':'#EA5455',
			  'width':50,
			  'height':0,
			  'x':function(d){
			  	if(d.x === 4)
			  		return (d.x-1) * 80;
			  	else 
			    	return (d.x+4) * 80;
			  },
			  'y':384
			 })
			 .transition()
			 .duration(1500)
			 .attr({
			  'height':function(d){
			    return d.w;
			  },
			  'y':function(d){
			  	return 384 - d.w;
			  }
			 });

			s.selectAll('text')
			 .data(data)
			 .text(function(d){
			  return 0  ;
			 })
			 .attr({
			  'fill':'#FFD460',
			  'x':function(d){
			    if(d.x === 4)
			  		return (d.x-1) * 80;
			  	else 
			    	return (d.x+4) * 80;
			  },
			  'y':381
			 })
			 .transition()
			 .duration(1500)
			 .attr({
			  'y':function(d){
			    return 381 - d.w;
			  }
			 })
			 .tween('number',function(d){
			    var i = d3.interpolateRound(0, d.value);
			      return function(t) {
			      this.textContent = i(t);
			    };
			 });
		} else {
			s.selectAll('rect')
			 .data(data)
			 .enter()
			 .append('rect')
			 .attr({
			  'fill':'#EA5455',
			  'width':50,
			  'height':0,
			  'x':function(d){
			    if(d.x === 4)
			  		return (d.x-1) * 80;
			  	else 
			    	return (d.x+4) * 80;
			  },
			  'y':384
			 })
			 .transition()
			 .duration(1500)
			 .attr({
			  'height':function(d){
			    return d.w;
			  },
			  'y':function(d){
			  	return 384 - d.w;
			  }
			 });

			s.selectAll('text.value')
			 .data(data)
			 .enter()
			 .append('text')
			 .text(function(d){
			  return 0  ;
			 })
			 .attr({
			  'class': 'value',
			  'fill':'#FFD460',
			  'x':function(d){
			    if(d.x === 4)
			  		return (d.x-1) * 80;
			  	else 
			    	return (d.x+4) * 80;
			  },
			  'y':381
			 })
			 .transition()
			 .duration(1500)
			 .attr({
			  'y':function(d){
			    return 381 - d.w;
			  }
			 })
			 .tween('number',function(d){
			    var i = d3.interpolateRound(0, d.value);
			      return function(t) {
			      this.textContent = i(t);
			    };
			 });
			 var dataName = [{x:1},{x:2},{x:3},{x:4}];
			 s.selectAll('text.name').data(dataName).enter()
			 .append('text').text(function(d) {
			 	if(d.x === 1)
			 		return '全國平均';
			 	else if (d.x === 2)
			 		return '花費最高值';
			 	else if (d.x === 3)
			 		return '花費最低值';
			 	else
			 		return 'Student like U 平均';
			 }).attr({
			 	'class': 'name',
			 	'fill':'#FFD460',
			 	'x':function(d){
				    if(d.x === 4)
				  		return (d.x-1) * 65;
				  	else 
				    	return (d.x+4) * 80;
				  },
				  'y':397
			 });
		}
	};

	function drawPie(data, like) {
		console.log('pie:', data);
		var radius = 200;
		var color = d3.scale.ordinal()
    		.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

		var arc = d3.svg.arc()
		    .outerRadius(radius - 10)
		    .innerRadius(radius - 100);

		var labelArc = d3.svg.arc()
		    .outerRadius(radius - 40)
		    .innerRadius(radius - 40);

		var pie = d3.layout.pie()
		    .sort(null)
		    .value(function(d) { return d.value; });

		console.log(pie(data));
		// console.log(startArc);

		var elema = allg.selectAll('path')
			.data(pie(data))
			.enter();
		var eleml = likeg.selectAll('path')
			.data(pie(like))
			.enter();

		var patha = elema.append('path')
			.attr({
				'd': arc,
				'fill': function(d) { return color(d.data.status); }
			}).each(function(d) { this._current = d; });
		var pathl = eleml.append('path')
			.attr({
				'd': arc,
				'fill': function(d) { return color(d.data.status); }
			}).each(function(d) { this._current = d; });

		var texta = elema.append('text')
		.attr({
			'transform': function(d) { return "translate(" + labelArc.centroid(d) + ")"; },
	    	'dy': '.35em',
	    	'class': 'data'
	    }).text(function(d) { return d.data.status +' '+ d.data.value*100 +'%'; });
	    var textl = eleml.append('text')
		.attr({
			'transform': function(d) { return "translate(" + labelArc.centroid(d) + ")"; },
	    	'dy': '.35em',
	    	'class': 'data'
	    }).text(function(d) { return d.data.status +' '+ d.data.value*100 +'%'; });

		var newPatha = allg.selectAll('path').data(pie(data));
		var newPathl = likeg.selectAll('path').data(pie(like));
		console.log(newPatha);
		newPatha.transition().duration(1500).attrTween("d", arcTween);
		newPathl.transition().duration(1500).attrTween("d", arcTween);
		var newTexta = allg.selectAll('text.data').data(pie(data));
		var newTextl = likeg.selectAll('text.data').data(pie(like));
		newTexta.transition()
			 .duration(1500).attr('transform', function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
				.text(function(d) { return d.data.status +' '+ d.data.value*100 +'%'; });
		newTextl.transition()
			 .duration(1500).attr('transform', function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
				.text(function(d) { return d.data.status +' '+ d.data.value*100 +'%'; });

		function arcTween(a) {
		  var i = d3.interpolate(this._current, a);
		  this._current = i(0);
		  return function(t) {
		    return arc(i(t));
		  };
		};
	};
	
});

