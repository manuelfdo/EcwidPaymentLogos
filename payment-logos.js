// Replace XXXXXXXX-X with your custom App Id.
function addPaymentIcons() {
	var addPaymentIcons = document.querySelector('.ec-wrapper .ec-store .ec-cart .ec-radiogroup fieldset .ec-radiogroup__item--app_id-custom-app-XXXXXXXX-X .ec-radiogroup__info');
	addPaymentIcons.innerHTML = '<div class="ec-cart__accept ec-cart-accept"><div class="ec-cart-accept__icons"><div><div><img class="ecwid-PaymentMethodsBlockSvg" src="apple-pay.svg" width="54" height="34" alt="Apple Pay"><img class="ecwid-PaymentMethodsBlockSvg" src="google-pay.svg" width="54" height="34" alt="Google Pay"><img class="ecwid-PaymentMethodsBlockSvg" src="ms-pay.png" width="54" height="34" alt="Microsoft Pay"></div></div></div></div>'
};

if(typeof Ecwid != 'undefined'){
	Ecwid.OnPageLoaded.add(function(page) {
		if(page.type == "CHECKOUT_PAYMENT_DETAILS"){
			addPaymentIcons()
		}  
	});
}
