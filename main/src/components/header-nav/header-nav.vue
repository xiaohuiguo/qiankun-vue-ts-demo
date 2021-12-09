<template>
	<div class="header-container">
		<div class="header-logo">
			<img src="https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png" alt="">
		</div>
		<div class="header-info">
			<div class="header-info-left flex">
				<div class="efly-popover">
					<div class="header-exit sys-tabs">
						系统切换：
						<span class="sys-tab" :class="{'active-sys': menuType ==='sysA'}" @click="skip('/gernal')">系统A</span>
						<span class="sys-tab" :class="{'active-sys': menuType ==='sysB'}" @click="skip('/subtwo/home')">系统B</span>
					</div>
				</div>
			</div>
			<div class="header-info-right flex">
				<div class="efly-popover">
					<div class="header-exit">
						<span class="login-tab">admin</span>
						<span class="login-tab" @click="skip('/login')">退出</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import HeaderNav from './header-nav';
    export default HeaderNav;
</script>

<style lang="scss" scoped>
	.flex{display: flex;}
	.active-sys{color: #009FEF;}
	.header-container {
		display: box!important;
		display: flex!important;
		width: 100%;
		height: 56px;
		box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
		position: relative;
	}
	
	.header-container .header-logo {
		display: box!important;
		display: flex!important;
		align-items: center;
		justify-content: center;
		min-width: 190px;
		background: #384247;
	}
	
	.header-logo img {
		height: 55px;
	}
	
	.header-container .header-info {
		display: box!important;
		display: flex!important;
		align-items: center!important;
		justify-content: space-between!important;
		-prefix-box-flex: 1;
		flex: 1!important;
		height: 100%;
	}
	
	.header-container .header-info .header-info-left,
	.header-container .header-info .header-info-right {
		height: 100%;
	}

	.sys-tabs{
		font-weight: bold;
	}
	.login-tab,
	.sys-tab{
		padding: 0 10px;
		cursor: pointer;
	}
	.nav-top-title {
		margin-left: 20px;
		position: relative;
		color: #009FEF;
		width: 230px;
		text-align: left;
		margin-right: 20px;
		cursor: pointer;
		justify-content: flex-start;
	}
	
	.header-account {
		width: 100px;
	}
	
	.header-account-name {
		color: #646464;
		margin-left: 8px;
	}
	
	.header-exit {
		display: flex;
		align-items: center;
		padding: 0 20px;
		height: 100%;
		text-align: center;
		&:hover {
			background: #f8faff;
		}
		.icon {
			font-size: 14px;
		}
	}
	
	.nav-top-title {
		width: 130px;
		text-align: left;
		margin-left: 20px;
		cursor: pointer;
		position: relative;
		color: #009FEF;
	}
	
	.nav-top-title-menu {
		margin-right: 5px;
		color: #009FEF;
	}
	
	.sys-change-ul {
		position: absolute;
		left: -20px;
		top: 56px;
		font-weight: 400;
		color: #555;
		background: #fff;
		border-top: 1px solid #dddde1;
		box-shadow: 1px 2px 4px #ccc;
		display: none;
		z-index: 100;
		text-align: center;
		padding: 5px;
		max-width: 209px;
	}
	
	.sys-change-li {
		background: #F4F7FF;
		float: left;
		width: 98px;
		height: 98px;
		color: #555;
		margin: 2.5px;
	}
	
	.sys-change-li .icon {
		display: block;
		margin: 20px 0 7px 0;
		font-size: 30px;
	}
	
	.sys-change-li:hover {
		background: #009FEF;
		color: #fff;
	}
	
	.sys-change-ul-outer:hover .sys-change-ul,
	.sys-change-ul:hover {
		display: block;
	}
</style>