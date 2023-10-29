<script>
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<div class="min-h-screen bg-gradient-to-bl from-green-500 to-green-300 dark:from-teal-800 dark:to-teal-950">
    <NavBar />
    <slot />
</div>
