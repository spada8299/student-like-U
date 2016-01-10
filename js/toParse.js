'use strict';
Parse.initialize("YT1RqFylNS63fOB92ephXJbt62c033HiP9InlU5T", "PpfRO2ZhGjLnqZdlsjaoQgF707UH5zvYVlsUuUZC");

var frontAry = [];
var schoolName = "";

$(document).ready(function() {
	$('#emailBtn').click(function() {
		console.log($('#Email1').val());
		testFormat($('#Email1').val());
		console.log(frontAry);
	});
	// console.log($('input[name="relationship"]:checked').val());

	$('#feedbackForm').submit(function(e) {
		var FeedbackObj = Parse.Object.extend("Feedback");
		var feedbackObj = new FeedbackObj();
		if (checkForm()) {
			feedbackObj.set("email", $('#Email1').val());
			feedbackObj.set("schoolName", schoolName);
			feedbackObj.set("foodCost", Number($('#foodCost').val()));
			feedbackObj.set("travelCost", Number($('#travelCost').val()));
			feedbackObj.set("entCost", Number($('#entCost').val()));
			feedbackObj.set("relationship", $('input[name="relationship"]:checked').val());
			feedbackObj.set("aptitude", $('input[name="aptitude"]:checked').val());
			feedbackObj.set("toSay", $('#toSay').val());
			feedbackObj.set("info", frontAry);

			feedbackObj.save(null, {
				success: function(fdbk) {
					console.log(fdbk);
					alert('感謝您提供資料！');
					$('#feedbackForm input').not('input[type="radio"]').val('');
					$('#feedbackForm textarea').val('');
					$('#feedbackForm input').not('#Email1').each(function() {
						$(this).prop("disabled", true);
					});
					$('#feedbackForm textarea').prop("disabled", true);
					$('#closeForm').click();
				},
				error: function(err) {
					console.log(err);
				}
			});
		}
		e.preventDefault();
	});
});

function testFormat (schoolEmail) {
	d3.json("json/email_address.json", function (err, data) {
		console.log(data.emailFormat);
		var testEmail = schoolEmail.substring(schoolEmail.indexOf("@"));
		console.log(testEmail);
		var found = 0;
		for (var i = 0; i < data.emailFormat.length; i++) {
			if (testEmail === data.emailFormat[i].ADDRESS) {
				found = 1;
				schoolName = data.emailFormat[i].SCHOOLNAME;
				console.log(data.emailFormat[i].SCHOOLNAME);
			}
		}
		if (found === 1) {
			$('#feedbackForm input').each(function() {
				$(this).prop("disabled", false);
			});
			$('#feedbackForm textarea').prop("disabled", false);
		} else {
			alert('請填寫正確學校信箱');
		}
		// 	var TestObject = Parse.Object.extend("TestObject");
		// var testObject = new TestObject();
		// testObject.save({foo: "bar"}).then(function(object) {
		//   alert("yay! it worked");
		// });
	});
};

function checkForm() {
	// console.log(schoolName);
	if($('#Email1').val().length < 1) {
		$('#Email1').focus();
		alert('請填寫完整學校信箱');
		return false;
	}
	if($('#foodCost').val().length < 1) {
		$('#foodCost').focus();
		alert('請填寫完整每月食物花費');
		return false;
	}
	if($('#travelCost').val().length < 1) {
		$('#travelCost').focus();
		alert('請填寫完整每月交通花費');
		return false;
	}
	if($('#entCost').val().length < 1) {
		$('#entCost').focus();
		alert('請填寫完整每月娛樂花費');
		return false;
	}
	return true;
};

function parseAry(ary){
	frontAry = ary;
};
