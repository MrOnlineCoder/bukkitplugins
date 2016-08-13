function noop(refs) {

}

function OrderController(refs) {
	refs.orderForm.on("submit", function(e) {
		console.log(refs.step1);
		refs.step1.hide();
		refs.step2.hide();
		refs.orderResult.show();


		var result = "";
		result += "--------------------------------------------------\n";
		result += "Тип услуги: "+refs.orderType[0].options[refs.orderType[0].selectedIndex].text+" \n";
		result += "Название: "+refs.orderName.val()+"\n";
		result += "Версия сервера: "+refs.orderVersion[0].options[refs.orderVersion[0].selectedIndex].text+" \n";
		result += "Способ оплаты: "+refs.orderPayway[0].options[refs.orderPayway[0].selectedIndex].text+" \n";
		result += "Описание: \n";
		result += refs.orderDesc.val()+"\n";
		result += "Идентификатор заказа: "+md5(new Date().toString()) +"\n";
		result += "---------------------------------------------------";

		refs.orderResultText.val(result);
		return false;
	});
 }

 function jqSelector(e) {
 	return $(e);
 }

function init() {
	Cobblestone.config("refAttr", "ref-model");
	Cobblestone.config("selector", jqSelector);
	Cobblestone.route("home", "views/home.html", noop);
	Cobblestone.route("order", "views/order.html", OrderController);
	Cobblestone.route("contacts", "views/contacts.html", noop);
	Cobblestone.navigate("home");
}

init();