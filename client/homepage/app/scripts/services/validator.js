(function() {
	angular
	.module('validation.customer', ['validation'])
	.config(['$validationProvider', '$httpProvider', function ($validationProvider,  $httpProvider) {

    //Apply CORS measures
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    angular.extend($validationProvider, {
    	validCallback: function (element){
    		$(element).parents('.form-group:first').removeClass('has-error');
    		$(element).parents('.input-event:first').removeClass('has-error');
            $(".validation-valid").hide();
        },
        invalidCallback: function (element) {
        	$(element).parents('.form-group:first').addClass('has-error');
        	$(element).parents('.input-event:first').addClass('has-error');
            //$(".validation-invalid").hide();
        }
    })

    var expression = {
    	matching: function (value, scope, element, attrs) {
    		if (!value && !attrs.validatorPassword){
    			return true;
    		}else {
    			return value === attrs.validatorPassword;
    		}
    	},
    	ispassword: function (value, scope, element, attrs){
            //match(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
            if(value){
            	if (value.length >= 6){
            		return true;
            	}else{
            		return false;
            	} 
            }else{
            	return true;
            }
        },
        isimage: function (value, scope, element, attrs){
        	if(value && value.name){
        		if (value.name.match(/\.(jpg|jpeg|png|gif)$/)){
        			return true;
        		}else{
        			return false;
        		} 
        	}else{
        		return true;
        	}
        },
        range: function(value, scope, element, attrs) {
        	if (value >= parseInt(attrs.min) && value <= parseInt(attrs.max)) {
        		return value;
        	}
        },
        isphone: function (value, scope, element, attrs){
        	if(value){
        		if (value.match(/^[0-9\-]+$/)){
        			if (value.indexOf("-") > -1){
        				if (value.match(/^[0-9\-]{12}$/)){
        					return true;
        				}else{
        					return false;
        				}
        			}else {
        				if (value.length == 10){
        					return true;
        				}else{
        					return false;
        				}
        			}
        		}else {
        			return false;
        		}
        	}else{
        		return true;
        	}
        },
        isnotvalue: function(value, scope, element, attrs) {
        	return value != -1;
        },
        minvalue: function (value, scope, element, attrs) {
        	if(value){
        		return value >= attrs.min;
        	}else{
        		return true;
        	}
        },
        maxvalue: function (value, scope, element, attrs) {
        	if(value){
        		return value <= attrs.max;
        	}else{
        		return true;
        	}
        },
        iscurrency: function (value, scope, element, attrs){
        	if(value){
        		if (value.match(/^[0-9,.]+$/) && value.match(/^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})*(\.[0-9]{2})?$/)){
        			return true;
        		}else{
        			return false;
        		}
        	}else{
        		return true;
        	}
        }
    };
    var defaultMsg = {
    	matching: {
    		error: 'Passwords do not match.',
    		success: 'Password has matched.'
    	},
    	isimage: {
    		error: 'File do not format (jpg, jpeg, png, gif).',
            success: ''
    	},
    	ispassword: {
    		error: 'Password must be at least 6 characters.',
    		success: "It's password."
    	},
    	range: {
    		error: 'Number should between 0 ~ 18',
    		success: "Matched number."
    	},
    	isphone: {
    		error: 'Please enter 10 numberic.',
    		success: "It's phone number."
    	},
    	isnotvalue: {
    		error: 'Please choose a category.',
    		success: "Chose."
    	},
    	minvalue: {
    		error: 'It\'s not less than min value',
    		success: "Matched number."
    	},
    	maxvalue: {
    		error: 'It\'s not greater than max value',
    		success: "Matched number."
    	},
    	iscurrency: {
    		error: 'This field must be correct currency.',
    		success: "It's currency."
    	},
    	required: {
    		error: 'This field should be required',
    		success: ''
    	},
    	url: {
    		error: 'This is a error url given by user',
    		success: 'It\'s Url'
    	}
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);
}).call(this);
