<script>
	import { Navbar, NavBrand } from 'flowbite-svelte';
	import { DribbbleSolid } from 'flowbite-svelte-icons';
	import { DarkMode } from 'flowbite-svelte';
	import { SunSolid, MoonSolid } from 'flowbite-svelte-icons';
</script>

<Navbar class="shadow-xl">
	<NavBrand href="/" class="ml-8">
		<DribbbleSolid class="mr-3 h-6 sm:h-9" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Control de Actividades Deportivas</span
		>
	</NavBrand>
	<DarkMode class="text-lg mr-8">
		<svelte:fragment slot="lightIcon">
			<SunSolid />
		</svelte:fragment>
		<svelte:fragment slot="darkIcon">
			<MoonSolid />
		</svelte:fragment>
	</DarkMode>
</Navbar>
