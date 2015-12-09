var Gender = [1339849,0.4971,0.5029];//all the student

var Subject = 
[38704,0.3372,0.6628,//edu
209157,0.3273,0.6727,//art
326361,0.4128,0.5872,//society,law,business
127162,0.6654,0.3346,//science
283167,0.8508,0.1492,//engineering
27659,0.4936,0.5064,//agriculture
155873,0.255,0745,//medical
170297,0.4119,0.5881,//serve
1469,0.4989,0.5011//other
];//9 subjects

var Expense = [0.025,0.25,0.45,0.25,0.025];//this is an super expectation

var Level = [1037062,0.5034,0.4966,//Daigakusei
172968,0.559,0.441,//Daigakuinsei
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

var myAry = []
var rateAry = [];

$(document).ready(function() {
	$('#q1 .btn').click(function() {
		myAry[0] = $(this).children('input').val();
		if ($(this).children('input').val() == "male") {
			rateAry[0] = Gender[1];
		} else {
			rateAry[0] = Gender[2];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
	});
	$('#q2 .btn').click(function() {
		myAry[1] = $(this).children('input').val();
		if ($(this).children('input').val() == "edu") {
			rateAry[1] = Subject[0]/1339849;
		} else if ($(this).children('input').val() == "art") {
			rateAry[1] = Subject[3]/1339849;
		} else if ($(this).children('input').val() == "society") {
			rateAry[1] = Subject[6]/1339849;
		} else if ($(this).children('input').val() == "science") {
			rateAry[1] = Subject[9]/1339849;
		} else if ($(this).children('input').val() == "engineering") {
			rateAry[1] = Subject[12]/1339849;
		} else if ($(this).children('input').val() == "agriculture") {
			rateAry[1] = Subject[15]/1339849;
		} else if ($(this).children('input').val() == "medical") {
			rateAry[1] = Subject[18]/1339849;
		} else if ($(this).children('input').val() == "serve") {
			rateAry[1] = Subject[21]/1339849;
		} else {
			rateAry[1] = Subject[24]/1339849;
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
	});
	$('#q3 .btn').click(function() {
		myAry[2] = $(this).children('input').val();
		if ($(this).children('input').val() == "e1") {
			rateAry[2] = Expense[0];
		} else if ($(this).children('input').val() == "e2") {
			rateAry[2] = Expense[1];
		} else if ($(this).children('input').val() == "e3") {
			rateAry[2] = Expense[2];
		} else if ($(this).children('input').val() == "e4") {
			rateAry[2] = Expense[3];
		} else {
			rateAry[2] = Expense[4];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
	});
	$('#q4 .btn').click(function() {
		myAry[3] = $(this).children('input').val();
		if ($(this).children('input').val() == "l1") {
			rateAry[3] = Level[0]/1339849;
		} else if ($(this).children('input').val() == "l2") {
			rateAry[3] = Level[3]/1339849;
		} else if ($(this).children('input').val() == "l3") {
			rateAry[3] = Level[6]/1339849;
		} else {
			rateAry[3] = Level[9]/1339849;
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
	});
	$('#q5 .btn').click(function() {
		myAry[4] = $(this).children('input').val();
		if ($(this).children('input').val() == "dorm") {
			rateAry[4] = Dorm[1];
		} else {
			rateAry[4] = Dorm[2];
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
	});
	$('#q6 .btn').click(function() {
		myAry[5] = $(this).children('input').val();
		if ($(this).children('input').val() == "north") {
			rateAry[5] = Student_area[0]/1339849;
		} else if ($(this).children('input').val() == "central") {
			rateAry[5] = Student_area[8]/1339849;
		} else if ($(this).children('input').val() == "south") {
			rateAry[5] = Student_area[15]/1339849;
		} else if ($(this).children('input').val() == "east") {
			rateAry[5] = Student_area[22]/1339849;
		} else {
			rateAry[5] = Student_area[27]/1339849;
		}
		console.log(myAry, rateAry, rateAry.length);
		var count = 1339849;
		for (var i = 0; i < 6; i++) {
			if (rateAry[i]) {
				count = count*rateAry[i];
			}
		}
		$('#total').prop('number', Number($('#total').text())).animateNumber({ number: count });
	});
});