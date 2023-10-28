<script>
	import Table from '$lib/components/Table/Table.svelte';
	import { Controller } from '$lib/scripts';
	import AddModal from '$lib/components/Modal/AddModal.svelte';
	import TableWrapper from '$lib/components/Table/TableWrapper.svelte';
	import AddModalButton from '$lib/components/Modal/AddModalButton.svelte';
	import DeleteModal from '$lib/components/Modal/DeleteModal.svelte';
	import ErrorModal from '$lib/components/Modal/ErrorModal.svelte';
	import ModifyModal from '$lib/components/Modal/ModifyModal.svelte';

	const controller = new Controller();
	controller.addActivity("Fútbol", "2023-10-29", 20);
	controller.addActivity("Dominó", "2023-11-01", 20);
	controller.addActivity("Tenis", "2023-11-05", 11);

	let name;
	let date;
	let participants;
	let activityToDelete;
	let activityToModify;
	let showAddModal = false;
	let showDeleteModal = false;
	let showModifyModal = false;
	let error = null;

	function addActivity() {
		try {
			controller.addActivity(name, date, participants);
			controller.sportsActivities = controller.sportsActivities;
			showAddModal = false;
			name = "";
			date = null;
			participants = 0;
		} catch (e) {
			error = e.message;
		}
	}
	function modifyActivity() {
		try {
			controller.modifyActivity(activityToModify.name, date, participants);
			controller.sportsActivities = controller.sportsActivities;
			showModifyModal = false;
			date = null;
			participants = 0;
		} catch (e) {
			error = e.message;
		}
	}
	function deleteActivity() {
		try {
			controller.deleteActivity(activityToDelete.name);
			controller.sportsActivities = controller.sportsActivities;
		} catch (e) {
			error = e.message;
		}
	}
	function openAddModal() {
		showAddModal = true;
	}
	function openDeleteModal(activity) {
		activityToDelete = activity;
		showDeleteModal = true;
	}
	function openModifyModal(activity) {
		activityToModify = activity;
		showModifyModal = true;
	}
</script>

<TableWrapper>
	<Table activities={controller.sportsActivities} {openDeleteModal} {openModifyModal} />
</TableWrapper>

<div class="m-4">
	<AddModalButton on:click={openAddModal} />
	<AddModal
		bind:name
		bind:date
		bind:participants
		on:submit={addActivity}
		{showAddModal}
		on:close={() => (showAddModal = false)}
	/>
</div>

<TableWrapper>
	<span slot="h2-text">Actividades Deportivas con mayor cantidad de participantes</span>
	<Table
		activities={controller.activitiesHighestNumberOfParticipants()}
		{openDeleteModal}
		{openModifyModal}
	/>
</TableWrapper>

<ErrorModal open={error} on:click={() => (error = null)}>{error}</ErrorModal>

<ModifyModal
	bind:date
	bind:participants
	on:submit={modifyActivity}
	{activityToModify}
	{showModifyModal}
	on:close={() => (showModifyModal = false)}
/>

<DeleteModal
	{activityToDelete}
	{showDeleteModal}
	on:click={deleteActivity}
	on:close={() => (showDeleteModal = false)}
/>
