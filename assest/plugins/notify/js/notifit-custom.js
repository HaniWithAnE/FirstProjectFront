function not1() {
	notif({
		msg: "اعلان <b>پیش‌فرض</b> در بالا",
		position: "top",
	});
}

function not2() {
	notif({
		msg: "اعلان <b>پیش‌فرض</b> در مرکز",
		position: "center"
	});
}

function not3() {
	notif({
		msg: "اعلان <b>پیش‌فرض</b> در چپ",
		position: "left"
	});
}

function not4() {
	notif({
		msg: "اعلان <b>پیش‌فرض</b> در مرکز با عرض کامل",
		width: "all",
		position: "center"
	});
}

function not5() {
	notif({
		msg: "اعلان <b>پیش‌فرض</b> در راست",
		position: "right",
		bottom: '10'
	});
}

function not51() {
	notif({
		msg: "اعلان <b>پیش‌فرض</b> در پایین",
		position: "bottom",
		bottom: '10'
	});
}

function not6() {
	notif({
		type: "primary",
		msg: "خوش آمدید به سرون",
		position: "right",
		bottom: '10'
	});
}

function not7() {
	notif({
		msg: "<b>موفقیت:</b> اطلاعات با موفقیت ثبت شد",
		type: "success"
	});
}

function not8() {
	notif({
		msg: "<b>اوپس!</b> خطایی رخ داده است",
		type: "error",
		position: "center"
	});
}

function not9() {
	notif({
		type: "warning",
		msg: "<b>هشدار:</b> مشکلی رخ داده است",
		position: "left"
	});
}

function not10() {
	notif({
		type: "info",
		msg: "<b>اطلاعات: </b>متنی برای اطلاعات.",
		width: "all",
		position: "center"
	});
}

function not11() {
	notif({
		type: "error",
		msg: "<b>خطا: </b>این خطا تا زمانی که بر روی آن کلیک نکنید باقی می‌ماند.",
		position: "center",
		autohide: false
	});
}

function not12() {
	notif({
		type: "dark",
		msg: "شفافیت جذاب است!",
		position: "center",
		opacity: 0.5
	});
}

function not13() {
	notif({
		type: "info",
		msg: "آزمایش متن چندخطی. آزمایش، یک، دو.. بیشتر.",
		position: "center",
		width: 150,
		autohide: false,
		multiline: true
	});
}

function not14() {
	notif({
		type: "success",
		msg: "حالت خورشیدی فعال شد.",
		position: "right",
		fade: true
	});
}


function not15() {
	notif({
		msg: "با رنگ مورد علاقه خود سفارشی کنید!",
		position: "left",
		bgcolor: "#8500ff",
		color: "#fff"
	});
}

function not16() {
	notif({
		msg: "تنظیمات زمانی را سفارشی کنید!",
		position: "left",
		time: 1000
	});
}
function not17() {
	var myCallback = function(choice){
		if(choice){
			notif({
				'type': 'success',
				'msg': 'بله!',
				'position': 'center'
			})
		}else{
			notif({
				'type': 'error',
				'msg': '<i class="far fa-sad-tear"></i>',
				'position': 'center'
			})
		}
	}

	notif_confirm({
		'textaccept': 'این جا بمان',
		'textcancel': 'پنجره را ببند',
		'message': 'آیا مطمئن هستید که می خواهید ببندید؟',
		'callback': myCallback
	})
}
function not18() {
	var myCallback = function(input){
		if(input){
			notif({
				'type': 'success',
				'msg': input,
				'position': 'center'
			})
		}else{
			notif({
				'type': 'error',
				'msg': 'خالی یا لغو شده',
				'position': 'center'
			})
		}
	}

	notif_confirm({
		'textaccept': 'تمام شد!',
		'textcancel': 'من حیوان خانگی ندارم :(',
		'message': 'نام حیوان خانگی شما چیست؟',
		'callback': myCallback
	})
}