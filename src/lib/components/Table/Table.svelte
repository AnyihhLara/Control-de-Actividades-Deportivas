<script>
	import { Table, TableBody, TableHead, TableHeadCell } from 'flowbite-svelte';
	import TableBodyRow from './TableBodyRow.svelte';
	import TableAction from './TableAction.svelte';
	export let activities;
	export let openDeleteModal;
	export let openModifyModal;
</script>

<Table hoverable={true} shadow={true}>
	<TableHead>
		<TableHeadCell>Nombre</TableHeadCell>
		<TableHeadCell>Fecha</TableHeadCell>
		<TableHeadCell>Participantes</TableHeadCell>
		<TableHeadCell />
		<TableHeadCell />
	</TableHead>
	<TableBody>
		{#if activities}
			{#each activities as activity (activity.name)}
				<TableBodyRow>
					<span slot="activity-name">{activity.name}</span>
					<span slot="activity-date">{activity.date}</span>
					<span slot="activity-participants">{activity.participants}</span>
					<span slot="edit-a"><TableAction color="teal-600"on:click={openModifyModal(activity)}>Editar</TableAction></span>
					<span slot="delete-a"><TableAction color="red-600" on:click={openDeleteModal(activity)}>Eliminar</TableAction></span>
				</TableBodyRow>
			{/each}
		{/if}
	</TableBody>
</Table>
