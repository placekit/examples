<script>
	import PlaceKit from '$lib/components/PlaceKit.svelte';
</script>

<PlaceKit
	apiKey={import.meta.env.VITE_PLACEKIT_API_KEY}
	on:pick={(event) => console.log(event.detail)}
/>