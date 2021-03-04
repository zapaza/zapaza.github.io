<template>
	<div class="page">
		<CHeader></CHeader>
		<div class="page__content">
			<Nuxt />
		</div>
	</div>
</template>

<script>
import CHeader from '~/components/header/CHeader';

export default {
	components: {
		CHeader,
	},
};
</script>

<style lang="css">
:root {
	--white: 255, 255, 255;
	--black: 0, 0, 0;
}

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

html {
	background: rgb(var(--black));
	color: rgb(var(--white));
	font-size: 8px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
		'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

body {
	font-size: 2rem;
}

.page {
	display: flex;
	min-height: 100vh;
	flex-direction: column;

	&__content {
		flex: 1 1 auto;
	}
}

.wrapper {
	max-width: 1024px;
	width: 100%;
	margin: 0 auto;
	padding: 0 2rem;
}
</style>
