const cssClassesPrefix = 'js-ajax-cart';
const dataAttributePrefix = 'data-ajax-cart';

const settings = {
	productFormsFilter: formNode => true,
	messageBuilder: messages => {
		let result = '';
		messages.forEach( element => {
			result += `<div class="${ cssClassesPrefix }-message ${ cssClassesPrefix }-message--${ element.type }">${ element.text }</div>`;
		})
		return result;
	},

	lineItemQuantityErrorText: 'You can\'t add more of this item to your cart',
	requestErrorText: 'There was an error while updating your cart. Please try again.',

	updateOnWindowFocus: true,

	computed: {
		productFormsErrorsAttribute: `${ dataAttributePrefix }-form-error`,
		sectionsAttribute: `${ dataAttributePrefix }-section`,
		binderAttribute: `${ dataAttributePrefix }-bind-state`,
		requestButtonAttribute: `${ dataAttributePrefix }-request-button`,
		toggleClassButtonAttribute: `${ dataAttributePrefix }-toggle-class-button`,
		initialStateAttribute: `${ dataAttributePrefix }-initial-state`,
		sectionScrollAreaAttribute: `${ dataAttributePrefix }-section-scroll`,
		quantityInputAttribute: `${ dataAttributePrefix }-quantity-input`,
		propertyInputAttribute: `${ dataAttributePrefix }-property-input`,
		messagesAttribute: `${ dataAttributePrefix }-messages`,
		configurationAttribute: `${ dataAttributePrefix }-configuration`,

		cartStateSetBodyClass: `${ cssClassesPrefix }-set`,
		requestInProgressBodyClass: `${ cssClassesPrefix }-request-in-progress`,
		emptyCartBodyClass: `${ cssClassesPrefix }-empty`,
		notEmptyCartBodyClass: `${ cssClassesPrefix }-not-empty`,
		productFormsProcessingClass: `${ cssClassesPrefix }-form-in-progress`
	}
}

const configureCart = ( property, value ) => {
	if ( property in settings && property !== 'computed' ) {
		settings[property] = value;
	} else {
		console.error(`Liquid Ajax Cart: unknown configuration parameter "${ property }"`);
	}
}

const cartSettingsInit = () => {
	const configurationContainer = document.querySelector(`[${ settings.computed.configurationAttribute }]`);
	if ( configurationContainer ) {
		try {
			const configuration = JSON.parse(configurationContainer.textContent);
			const notSupportedProperties = [ 'productFormsFilter', 'messageBuilder' ];
			for ( let property in configuration ) {
				if ( notSupportedProperties.includes( property ) ) {
					console.error(`Liquid Ajax Cart: the "${ property }" parameter is not supported inside the "${ settings.computed.configurationAttribute }" script — use the "configureCart" function for it`);
				} else {
					configureCart( property, configuration[property] );
				}
			}
		} catch (e) {
			console.error(`Liquid Ajax Cart: can't parse configuration JSON from the "${ settings.computed.configurationAttribute }" script`);
			console.error(e);
		}
	}
}

export { cartSettingsInit, settings, configureCart };