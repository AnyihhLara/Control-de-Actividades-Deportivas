<script>
	import { TableBodyRow, TableBodyCell } from 'flowbite-svelte';
</script>

<TableBodyRow>
	<TableBodyCell><slot name="activity-name" /></TableBodyCell>
	<TableBodyCell><slot name="activity-date" /></TableBodyCell>
	<TableBodyCell><slot name="activity-participants" /></TableBodyCell>
	<TableBodyCell>
		<slot name="edit-a" />
	</TableBodyCell>
	<TableBodyCell>
		<slot name="delete-a" />
	</TableBodyCell>
</TableBodyRow>
