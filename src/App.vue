<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'app',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		color: #555;
	}
	a,a:hover {
		text-decoration: none;
	}
	ul {
		margin: 0;
	}

	/* Login */
	#page-login,
	#page-register {
		min-height: 600px;
		height: 100vh;
		background-repeat: no-repeat;
		/* background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33)); */
		background-image: linear-gradient(to right, rgb(22, 191, 253), rgb(203, 48, 102));
	}
	#page-login .navbar.navbar-default,
	#page-register .navbar.navbar-default {
		display: none;
	}
	#page-transaction {
		padding-bottom: 100px;
	}

	.card-container.card {
		min-width: 320px;
		max-width: 350px;
		padding: 40px 40px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		-ms-box-shadow: 0 0 0 1px rgba(14,41,57,.12),0 2px 5px rgba(14,41,57,.44),inset 0 -1px 2px rgba(14,41,57,.15);
		-o-box-shadow: 0 0 0 1px rgba(14,41,57,.12),0 2px 5px rgba(14,41,57,.44),inset 0 -1px 2px rgba(14,41,57,.15);
		box-shadow: 0 0 0 1px rgba(14,41,57,.12), 0 2px 5px rgba(14,41,57,.44), inset 0 -1px 2px rgba(14,41,57,.15);
	}

	/*
	* Card component
	*/
	.card {
		background-color: #F7F7F7;
		/* just in case there no content*/
		padding: 20px 25px 30px;
		margin: 0 auto 25px;
		margin-top: 50px;
		/* shadows and rounded borders */
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
		border-radius: 2px;
		-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	}

	.profile-img-card {
		width: 96px;
		height: 96px;
		margin: 0 auto 20px;
		display: block;
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
		border-radius: 50%;
	}

	/*
	* Form styles
	*/

	.form-signin input[type=email],
	.form-signin input[type=password],
	.form-signin input[type=text],
	.form-signin button {
		width: 100%;
		display: block;
		margin-bottom: 10px;
		z-index: 1;
		position: relative;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.form-signin .form-control:focus {
		border-color: rgb(104, 145, 162);
		outline: 0;
		-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
		box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);
	}

	.btn.btn-signin,
	.btn.btn-signup {
		/*background-color: #4d90fe; */
		background-color: rgb(104, 145, 162);
		position: relative;
		margin-top: 10px;
		padding: 0px;
		font-weight: 700;
		font-size: 14px;
		height: 36px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		border: none;
		-o-transition: all 0.3s ease;
		-moz-transition: all 0.3s ease;
		-webkit-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}

	.btn.btn-signin:hover,
	.btn.btn-signin:active,
	.btn.btn-signin:focus,
	.btn.btn-signup:hover,
	.btn.btn-signup:active,
	.btn.btn-signup:focus {
		background-color: #122b40;
		background-position: 0;
		outline: 0;
	}

	label.error {
		padding: 0 1px;
		color: red;
		margin-top: -7px;
		display: block;
		font-size: 12px;
	}
	.loader {
		display: none;
		border: 3px solid #f3f3f3;
		border-radius: 50%;
		border-top: 3px solid #3498db;
		width: 20px;
		height: 20px;
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
		position: absolute;
		top: 50%;
		left: 50%;
	}
	.sending {
		font-size: 0 !important;
		pointer-events: none !important;
	}
	.sending .loader {
		display: block;
	}
	.btn.disabled, .btn[disabled], fieldset[disabled] .btn {
		opacity: 0.95;
	}
	@-webkit-keyframes spin {
		0% { -webkit-transform: translate(-50%, -50%) rotate(0deg); }
		100% { -webkit-transform: translate(-50%, -50%) rotate(360deg); }
	}

	@keyframes spin {
		0% { transform: translate(-50%, -50%) rotate(0deg); }
		100% { transform: translate(-50%, -50%) rotate(360deg); }
	}

	.router-link-active.router-link-exact-active {
		color: #fff !important;
		text-decoration: underline;
	}
</style>
