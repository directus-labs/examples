<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>
<img src="{import.meta.env.VITE_APIURL}/assets/{data.post.image.filename_disk}?width=600" alt="">
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>