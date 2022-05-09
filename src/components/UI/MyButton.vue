<template lang="html">
	<button class="btn">
		<slot></slot>
		<!-- slot - то же самое что и props.children -->
	</button>
</template>
<script>
export default {};
</script>
<style lang="scss">
.btn {
	padding: 5px 10px 5px 10px;
	border-radius: 0.3em;
	background-color: aquamarine;
	border: 1px solid rgb(74, 255, 195);
	cursor: pointer;
}
</style>
