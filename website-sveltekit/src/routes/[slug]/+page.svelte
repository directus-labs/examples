<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>


<h1>{data.page.title}</h1>
<div>{@html data.page.content}</div>