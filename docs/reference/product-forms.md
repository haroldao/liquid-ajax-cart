# Product forms

Liquid Ajax Cart ajaxifies product forms once it is loaded. When a user submits a product form, Liquid Ajax Cart intercepts the submission and sends an Ajax Cart API "Add to cart" request using [`cartRequestAdd`](/reference/cartRequestAdd/) function.

The form remains inactive when the "Add to cart" request is in progress and Liquid Ajax Cart adds the [`js-ajax-cart-form-in-progress`](/reference/js-ajax-cart-form-in-progress/) CSS class to the form.

Add a container with the [`data-ajax-cart-messages`](/reference/data-ajax-cart-messages/) attribute with the `form` value within product forms to show error messages.
