<script>
	import 'modern-normalize';
	import '../stylesheet/main.css';

	import Notice from '$lib/components/Notice.svelte';
	import Header from '$lib/components/Header.svelte';
	import Info from '$lib/components/Info.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Notice />
<Header />
<slot />
<Info />
<Footer />
