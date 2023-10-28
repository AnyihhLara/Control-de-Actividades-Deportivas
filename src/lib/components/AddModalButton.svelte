<script>
	import { PlusSolid } from 'flowbite-svelte-icons';
	import { Button } from 'flowbite-svelte';
</script>

<Button pill={true} class="!p-2" color="green" on:click>
	<PlusSolid class="w-4 h-4" />
</Button>
